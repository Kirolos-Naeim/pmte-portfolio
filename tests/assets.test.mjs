import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = path.join(root, "public");

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filename) : [filename];
  });
}

test("every literal local media reference resolves to a public file", () => {
  const references = new Set();
  for (const filename of walk(path.join(root, "app"))) {
    if (!/\.(?:tsx?|json|css)$/.test(filename)) continue;
    const source = readFileSync(filename, "utf8");
    for (const match of source.matchAll(/\/(?:[\w.-]+\/)*[\w.-]+\.(?:png|jpe?g|webp|avif|svg|gif|mp4|webm|pdf)\b/g)) {
      references.add(match[0]);
    }
  }
  assert.ok(references.size > 0, "No asset references found");
  for (const url of references) {
    assert.ok(existsSync(path.join(publicDir, url.slice(1))), `Missing asset: ${url}`);
  }
});

test("gallery photographs have unique IDs, accessible files and captions", () => {
  const gallery = JSON.parse(readFileSync(path.join(root, "app/gallery-manifest.json"), "utf8"));
  assert.ok(gallery.length > 0);
  assert.equal(new Set(gallery.map((item) => item.id)).size, gallery.length);
  for (const item of gallery) {
    assert.ok(item.alt?.trim(), `Missing caption for gallery image ${item.id}`);
    assert.ok(existsSync(path.join(publicDir, item.src.slice(1))), `Missing gallery image ${item.id}`);
  }
});

test("essential downloads and SEO files are retained", () => {
  for (const filename of ["PMTE-Company-Portfolio-2026.pdf", "robots.txt", "sitemap.xml", "llms.txt", "favicon.png"]) {
    assert.ok(existsSync(path.join(publicDir, filename)), `Missing ${filename}`);
  }
  assert.equal(readFileSync(path.join(publicDir, "PMTE-Company-Portfolio-2026.pdf")).subarray(0, 5).toString(), "%PDF-");
});
