# MCP Factor website

Static consulting site for [mcpfactor.com](https://mcpfactor.com). The MCP Factor platform is at [app.mcpfactor.com](https://app.mcpfactor.com/).

## Publishing

The intended GitHub Pages publishing source is `main` at the repository root. Keep the approved static website's directory structure and shared styles. Before production cutover, verify all seven pages and their assets at the GitHub Pages project URL.

## Editing

1. Create a change branch from `main`.
2. Edit copy in the corresponding page's `index.html`. For images, update the asset and its references together and check its alt text and dimensions. For a new page or article, create a folder with an `index.html`, add the corresponding navigation or blog index link, and set page metadata.
3. Preview and test the branch at desktop and mobile sizes. Check internal links, assets, and the consultation and contact destinations.
4. Open a pull request with the changes and preview results for review. After approval, merge it into `main` and verify the live Pages deployment.

To roll back a site release, revert its commit through a pull request, merge the revert, and verify the live routes. Keep the production DNS snapshot outside this public repository. A DNS rollback restores only the prior website records and their TTLs.
