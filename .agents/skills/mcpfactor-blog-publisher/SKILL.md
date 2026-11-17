---
name: mcpfactor-blog-publisher
description: Turn approved manuscripts into MCP Factor blog articles, update the blog listing, validate assets and SEO, and open a GitHub pull request for review.
---

# MCP Factor Blog Publisher

## Purpose
Publish or revise Danny Monzon blog articles in the **specific repository ChatLux/mcpfactor-website**. This is a repository-local skill for an agent operating with the direct GitHub integration. It does not automatically install itself in ChatGPT or publish any content.

## Absolute rules
- Confirm that the authenticated GitHub account is ChatLux and the target repository is ChatLux/mcpfactor-website.
- Use the direct GitHub integration, NOT MCP Factor's landing-page-to-GitHub deployment tools. Those tools are for landing pages created inside MCP Factor, not this independent website.
- Before editing, fetch the current contents from the repository's default branch. The repository is the source of truth, not a previously downloaded ZIP.
- Create an article-specific feature branch from the current main branch, commit there, and open a pull request. Never push directly to main, merge, or publish without Danny's explicit approval.
- Do not change DNS, GitHub Pages configuration, email DNS, app.mcpfactor.com, existing media galleries, or unrelated pages.
- Preserve the author's article word-for-word, including voice, section order, quotations and links. Fix only formatting artifacts from source extraction. Flag questionable claims or ambiguous text, but never rewrite them silently.

## Source intake
Accept user-supplied PDF, DOCX, plain text, images, or connected documents. Examine all pages and embedded images. Extract the provided artwork when possible and reproduce its intended position. If the author says an image came from a previous conversation, retrieve the correct referenced asset if available; otherwise flag the missing source and ask for it. Never substitute generic stock art, invented episode covers, or an AI likeness without approval.

## Current repository conventions (verify before using)
- Blog index: blog/index.html, with article cards inside the article-grid container.
- Article route: blog/SLUG/index.html.
- Existing source templates: blog/dependency-chain-demystified/index.html and blog/agentifying-a-lengthy-static-form/index.html.
- Shared styles: shared/tokens.css, shared/site.css, shared/home.css, shared/inner.css, shared/articles.css.
- Article classes: article-top, article-top-wrap, backlink, article-byline, article-content, article-main, article-cover, article-next.
- Blog listing classes: article-card, feature-article, article-art, article-body, article-topic, article-cta.
- Paths from nested articles to shared resources begin ../../; links from the listing to article pages can use ../blog/SLUG/.
- Preserve existing header, footer, typography, editorial styling, and the established spelling Ai. Keep Resources linked to https://app.mcpfactor.com/.
- Canonical website: https://mcpfactor.com.

## Publishing process
1. Read the submission completely and capture title, subtitle, headings, paragraphs, links, captions, author attribution and image placements.
2. Choose a concise, lowercase hyphenated slug. Check for duplicates. Preserve existing slugs during revisions unless explicitly authorized to change them.
3. On a new Git branch, create blog/SLUG/index.html by adapting the current article template. Use semantic HTML with one H1 and logical H2/H3 headings. Do not truncate or summarize the body.
4. Set a unique title tag, meta description, canonical URL and Open Graph title/description. Use a real OG image only if a suitable reachable image is provided. Do not invent publication dates or claims.
5. Put approved images in a stable assets/blog/SLUG/ directory or follow the current asset structure. Use descriptive alt text, practical web formats, and explicit responsive constraints such as max-width:100%;width:100%;height:auto. Never place a raw tall portrait or oversized image without layout constraints.
6. Use the existing article CSS and typography. Avoid changing global styles. Preserve verified video embeds with responsive containers.
7. Insert a matching article card in blog/index.html, usually newest first, with an accurate title, excerpt, category and internal URL. Use original artwork when appropriate and properly sized; otherwise prefer an intentional text-based graphic over a fabricated thumbnail.
8. Write text files with GitHub's file actions on the feature branch. For image binaries, use a supported Git blob upload or a connected Work checkout and verify the committed bytes. Do not claim images are included if they are not.
9. Before requesting review, verify internal links, nested relative paths, image paths, headings, accessibility attributes, actual asset existence and completeness against the manuscript. Inspect mobile, tablet and desktop rendering if a browser is available. A static check is NOT proof of visual QA.
10. Open a GitHub PR targeting main with summary, article URL, images and provenance, changes to index/SEO, tests actually run, source deviations, caveats, and a rollback plan. Stop for Danny's approval.
11. After approval and merge, verify the deployed page and listing at the public domain before claiming that the article is published. If deployment does not occur, say so.

## Editorial QA
- No omitted sections, invented quotations, fake statistics, unapproved copy edits or uncredited image substitutions.
- Flag consequential time-sensitive product/company claims for verification, but do not silently change the authorial position.
- Do not use placeholder links, fabricated sources, or a sandbox image URL as a permanent website asset.
- Verify the site's previous articles still load and the Media page is not affected.
- Test 375px, 768px and 1440px viewports whenever browser capabilities exist.
- If browser preview or deployment access is absent, clearly state which checks remain outstanding.

## Default request
"Use the MCP Factor Blog Publisher skill in ChatLux/mcpfactor-website to add the attached article, preserve my writing and supplied images, match the site design, update blog/index.html, test what you can, and open a PR for approval. Do not merge."

## Future enhancements
Optional later: automated HTML validation, sitemap/RSS, image optimization pipeline, PR preview deployments and social promotion. Do not add paid services or new platforms without approval.
