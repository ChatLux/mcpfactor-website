# MCP Factor Website Prototype v2
Status: local prototype only. No GitHub, Lovable or domain changes.

## Pages
- `/` — Homepage v1, unchanged in substance, shared navigation updated with Contact
- `/solutions/` — Custom Ai solutions page
- `/media/` — Approved Earned Media design; original imagery and content
- `/blog/` — Original articles from the existing Lovable site, linked to their existing URLs
- `/contact/` — Project inquiry, email, consultation booking link, and qualification guidance

## Design system
- `shared/tokens.css`: color, typography and design tokens
- `shared/site.css`: base, navigation, Media sections and layout
- `shared/home.css`: Homepage styles reused throughout
- `shared/inner.css`: Solutions, Blog and Contact page components
- `shared/site.js`: enhancement for Media filtering
- `assets/`: real, previously uploaded user photographs and imagery

## Preview on Mac
Unzip this archive, then open Terminal in the extracted folder:
    python3 -m http.server 8000
Visit:
    http://localhost:8000/
    http://localhost:8000/solutions/
    http://localhost:8000/media/
    http://localhost:8000/blog/
    http://localhost:8000/contact/

Do not open index.html as file:// to test site navigation: these are root-relative URLs.

## QA performed
- Verified all five HTML entrypoints exist and contain one H1.
- Verified all local CSS, JS and image asset references resolve.
- Verified common nav paths map to existing local pages.
- Verified all output is staged and no external services were changed.
- Automated Chromium rendering was blocked by environment administration rules. Desktop/mobile visual rendering, keyboard accessibility and live outbound-link checks still require browser QA.

## Before launch
1. Review all page copy and service scope against current offerings.
2. Verify booking CTA, consultation fees/eligibility, and any real lead-intake destination.
3. Replace original Lovable-hosted article links with new internal blog article pages when migrated.
4. Verify media links/embeds and the pages' real-world mobile behavior.
5. Configure domain, canonical URLs, crawl rules, analytics, OG images, security and 404s in GitHub staging.
6. Do not redirect mcpfactor.com or deploy without user approval.

Blog migration note: Article PDF download links were intentionally excluded at the owner’s request. Full article copy is embedded in the two internal pages.

## Media corrections v4
- Amplified Business Summit speaking card labeled correctly.
- SMDAYJAX talk title: Humanize Your Brand using messenger Automation.
- Buzz TV 5 Minutes With appearance disentangled from the separate Making a Marketer podcast. TV video link pending; existing podcast audio entry retained.

## Media corrections v5
- Replaced generic podcast/title placeholders with thumbnail artwork in the audio section.
- Added sourced cover art for Making a Marketer, The Marketing Ninja (used for both Digital Hangout entries), Real Estate Pros Show, MOVD Entrepreneur Evolved, Burnt Phone Marketing Radio, and Chat Marketing Podcast.
- Replaced the SoundCloud placeholder with a branded Danny Monzon portrait thumbnail.

## Media corrections v6
- Restored the three omitted original Lovable TV appearances using existing photo assets buzz-tv3, buzz-tv4, buzz-tv5.
- Featured gallery now includes all seven Buzz TV assets plus two speaking cards.
- Specific video links remain pending verification; no fictitious links added.

## v7 Recognition addition
- Added the user-supplied transparent crystal award photo to /assets.
- Added a dedicated homepage section for the 2020 ManyChat Emerging Agency Award, attributed to DM Digital, not MCP Factor.
- Added an award credential in the about section.

## v8: Podcast thumbnail rollback
- Reverted podcast audio cards to the earlier text-based thumbnail design, removing oversized images.
- Removed seven locally added podcast image files from this build.
- Retained all seven TV cards, the two speaking cards, 2020 ManyChat award section, and other site improvements.
