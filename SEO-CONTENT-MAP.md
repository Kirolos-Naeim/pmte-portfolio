# PMTE search-content coverage

Updated 2 October 2026. This is internal repository documentation, not a public
keyword list. Keywords are grouped by customer intent; coverage does not mean
inserting every singular/plural or geographic variation verbatim.

## Architecture

Use service pages for enquiries, project pages for evidence, and visible FAQs
for selection, cost and scope questions. A blog is not needed for these terms.
No keyword-only city pages, hidden keyword blocks, fabricated projects, reviews,
prices, rental inventory or equipment specifications have been added.

| Keyword family and variants | Destination and implementation |
| --- | --- |
| Demolition company / companies; demolition company in Abu Dhabi / UAE; building demolition company; demolition company Abu Dhabi UAE | Homepage identity and service-page introduction. Primary homepage target stays “Demolition Company in Abu Dhabi, UAE”. |
| Demolition contractor / contractors; building demolition contractors; demolition services / works; demolition specialists; demolition subcontractor / subcontractors UAE | `/demolition-company-abu-dhabi`: distinct contractor title, scope, equipment support and contracting-arrangement FAQ. Broad UAE searches are addressed in Abu Dhabi context, without claiming offices in other emirates. |
| Demolition companies in Abu Dhabi; choosing a demolition contractor | Contractor-comparison FAQ covering scope, experience, credentials, equipment and handover. |
| Demolition company Musaffah / Mussafah; demolition contractors near me; building demolition near me; demolition services near me | Location FAQ, visible address, telephone, map and business structured data. “Near me” is a local intent, not a sentence to repeat on the page. |
| Structural demolition; demolition and dismantling; structural dismantling Abu Dhabi / UAE; controlled demolition Abu Dhabi / UAE; demolition and decommissioning UAE | Existing demolition scope and process plus documented Mina Plaza experience. No new specialist-method claims. |
| Commercial demolition; commercial building demolition Abu Dhabi | KMART case study and demolition FAQ. |
| Industrial demolition; industrial building demolition Abu Dhabi; warehouse demolition / contractors UAE; warehouse demolition cost Abu Dhabi | Saif Bin Darwish warehouse case study; project-specific quotation guidance rather than an invented price. |
| Building removal services; building removal and site levelling Abu Dhabi | Mina Zayed buildings case study, earthworks page and site-clearance page. |
| Wall demolition; foundation removal | Saadiyat Bridge and Fisherman's Wharf case studies linked from the concrete-removal page. No invented cutting method for either project. |
| Concrete demolition; reinforced concrete demolition; mechanical demolition; concrete cutting contractors; concrete removal; asphalt removal Abu Dhabi | `/concrete-cutting-asphalt-removal-abu-dhabi`: scope distinctions, access/material information and quotation FAQs. Reinforced concrete is discussed as a scope factor, not an unsupported specialist certification. Mechanical/equipment-assisted work is explained through actual equipment and removal activities. |
| Demolition and site clearance; site clearing contractors; rubble removal; construction debris removal; demolition waste removal; construction waste transportation Abu Dhabi | `/site-clearance-waste-transport-abu-dhabi`: waste/material, loading, transport and handover questions. |
| Demolition and excavation contractors UAE; excavation contractors; earthworks contractors; site preparation contractors; land levelling; cut and fill Abu Dhabi | `/earthworks-excavation-abu-dhabi`, Al Ain Zoo and regional ground works, with additional enquiry FAQs. |
| Marine works contractors; underwater concrete removal; shoreline works Abu Dhabi | `/marine-works-abu-dhabi`, Mina Zayed Harbour and shoreline project links; harbour enquiry FAQ. |
| Demolition equipment UAE / Abu Dhabi; demolition machinery; heavy demolition equipment; demolition excavators; excavator demolition services; heavy equipment for demolition | `/demolition-equipment-uae`: recorded fleet, verified models, machinery selection and availability FAQ. |
| Demolition company contact number; demolition contractor quotation; building demolition quotation; demolition cost Abu Dhabi; building demolition cost UAE; how much does demolition cost; what is included in a demolition quotation | Demolition FAQs and visible quotation section with phone/email. No standard rate or price promise. |

## Arabic equivalents

Equivalent Arabic service pages exist under `/ar/` with reciprocal hreflang and
self-canonicals. Arabic content is written for the same scope, not an expanded
set of claims.

| Arabic keyword family | Destination |
| --- | --- |
| شركة هدم في أبوظبي، شركات هدم في أبوظبي، شركة هدم مباني أبوظبي، شركات هدم المباني في أبوظبي، شركة هدم في الإمارات، شركات هدم المباني في الإمارات | Arabic homepage and demolition service page |
| مقاول هدم أبوظبي، مقاولو هدم المباني في أبوظبي، مقاولات هدم المباني أبوظبي، أعمال هدم أبوظبي، خدمات هدم المباني أبوظبي | Arabic demolition scope and contractor-comparison FAQs |
| شركة هدم في مصفح، مقاول هدم مصفح | Arabic location FAQ and contact information |
| هدم مستودعات أبوظبي، إزالة مباني أبوظبي | Warehouse and Mina Zayed project pages |
| تكسير خرسانة أبوظبي، قص خرسانة أبوظبي، إزالة أساسات أبوظبي | Arabic concrete cutting/removal page and linked project evidence |
| رفع الأنقاض أبوظبي، نقل مخلفات الهدم أبوظبي، تنظيف وتسوية مواقع أبوظبي | Arabic site-clearance page |
| مقاول حفريات أبوظبي، أعمال حفر وردم أبوظبي | Arabic earthworks page and Al Ain Zoo case study |
| معدات هدم أبوظبي | Arabic equipment page |
| تكلفة هدم مبنى في أبوظبي | Arabic cost and quotation FAQs |

## Deliberately held for confirmation

Standalone rental/sales terms are not advertised: demolition equipment rental
UAE/Abu Dhabi, excavator rental UAE/Abu Dhabi, excavator with breaker rental,
hydraulic breaker rental, demolition attachment rental, heavy equipment rental,
demolition equipment suppliers and demolition equipment for sale. Owning or
using equipment is not proof of offering it for standalone hire or sale.

Explosive demolition, robotic demolition, asbestos removal, high-reach demolition
and interior strip-out are not added as service offers without confirmation.
Mina Plaza's controlled-demolition association remains accurately attributed.
No unsupported city-specific pages or “best/number one” claims are introduced.

## Search and AI accessibility

- Main content and FAQ answers are present in server-rendered HTML. FAQs remain
  readable using native details/summary controls without JavaScript.
- Statistics render their actual values before animation and with reduced motion.
- Service, WebPage, Article, breadcrumb and FAQ structured data uses the same
  content as the visible page; no invented ratings or prices.
- Six service subjects, 12 project subjects and existing general pages have
  linked English/Arabic URLs. The sitemap contains 41 URLs.
- `robots.txt` already permits crawling; no training-bot permissions are changed.
- The existing `llms.txt` is kept consistent as a supplemental summary, not a
  ranking mechanism or a requirement for Google/AI discovery.
- FAQ markup does not promise Google FAQ rich results, which are generally
  restricted to authoritative government/health sites.

## Verification

`pnpm test` checks asset references. After a Netlify-mode build, `pnpm test:seo`
checks every sitemap URL, canonical, heading, service links, English/Arabic FAQ
parity with structured data, real statistics, distinct titles and unknown-route
404 handling. Publish only after the changes are approved for deployment.

References: [Google AI guidance](https://developers.google.com/search/docs/appearance/ai-features),
[spam policies](https://developers.google.com/search/docs/essentials/spam-policies),
[FAQ eligibility](https://developers.google.com/search/blog/2023/08/howto-faq-changes).
