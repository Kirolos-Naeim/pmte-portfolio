import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import handler from "../.netlify/functions-internal/server/main.mjs";

// Run after a build with NETLIFY=true and NITRO_PRESET=netlify.
const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedServices = ["demolition-company-abu-dhabi", "demolition-equipment-uae", "marine-works-abu-dhabi", "earthworks-excavation-abu-dhabi", "concrete-cutting-asphalt-removal-abu-dhabi", "site-clearance-waste-transport-abu-dhabi"];
const htmlByUrl = new Map();
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const visibleText = (html) => decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<[^>]*>/g, ""));

test("all sitemap pages render, have one H1, canonical and indexable content", async () => {
  assert.equal(new Set(urls).size, urls.length);
  for (const url of urls) {
    const response = await handler(new Request(url));
    assert.equal(response.status, 200, url);
    const html = await response.text();
    htmlByUrl.set(url, html);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `H1: ${url}`);
    assert.ok(html.includes('rel="canonical"'), `canonical: ${url}`);
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
    assert.equal(canonical?.replace(/\/$/, ""), url.replace(/\/$/, ""), url);
    assert.doesNotMatch(html, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i);
    assert.ok(visibleText(html).length > 500, `Thin/empty rendered response: ${url}`);
  }
});

test("English and Arabic service FAQs match visible answers and are internally linked", () => {
  for (const locale of ["", "/ar"]) {
    const home = htmlByUrl.get(`https://petrolum.ae${locale || "/"}`);
    for (const slug of expectedServices) {
      const url = `https://petrolum.ae${locale}/${slug}`;
      assert.ok(urls.includes(url), `Missing sitemap service: ${url}`);
      assert.ok(home.includes(`href="${locale}/${slug}"`), `Orphan service: ${url}`);
      const html = htmlByUrl.get(url);
      assert.ok(html.includes('id="quotation"'));
      assert.ok(html.includes('href="tel:+97126337709"'));
      assert.ok(html.includes('href="mailto:petrolum@emirates.net.ae"'));
      assert.ok(html.includes(`href="https://petrolum.ae/ar/${slug}"`), "Arabic alternate missing");
      const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((match) => JSON.parse(match[1])["@graph"] ?? []);
      const faq = graphs.find((item) => item["@type"] === "FAQPage");
      assert.ok(faq?.mainEntity.length > 0, url);
      assert.equal((html.match(/<details\b/g) ?? []).length, faq.mainEntity.length, url);
      const text = visibleText(html);
      for (const item of faq.mainEntity) {
        assert.ok(text.includes(item.name), `Hidden question: ${url}`);
        assert.ok(text.includes(item.acceptedAnswer.text), `Hidden answer: ${url}`);
      }
    }
  }
});

test("statistics contain real values in server HTML and titles are distinct", () => {
  const home = htmlByUrl.get("https://petrolum.ae/");
  for (const value of ["1994", "30+", "8", "25+"]) assert.ok(home.includes(`aria-label="${value}"`));
  const statText = [...home.matchAll(/<strong[^>]*class="stat-value[^>]*>([\s\S]*?)<\/strong>/g)].map((match) => visibleText(match[1]));
  assert.deepEqual(statText, ["1994", "30+", "8", "25+"]);
  const title = (html) => html.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1];
  assert.notEqual(title(home), title(htmlByUrl.get("https://petrolum.ae/demolition-company-abu-dhabi")));
});

test("unknown service URLs remain 404 rather than keyword doorway pages", async () => {
  const response = await handler(new Request("https://petrolum.ae/unverified-equipment-rental-service"));
  assert.equal(response.status, 404);
});
