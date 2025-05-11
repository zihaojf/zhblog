import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CLUekxBa.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/archives.astro.mjs');
const _page5 = () => import('./pages/blog/_---id_.astro.mjs');
const _page6 = () => import('./pages/blog/_---page_.astro.mjs');
const _page7 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page8 = () => import('./pages/links.astro.mjs');
const _page9 = () => import('./pages/projects.astro.mjs');
const _page10 = () => import('./pages/robots.txt.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/search.astro.mjs');
const _page13 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page14 = () => import('./pages/tags.astro.mjs');
const _page15 = () => import('./pages/terms/copyright.astro.mjs');
const _page16 = () => import('./pages/terms/disclaimer.astro.mjs');
const _page17 = () => import('./pages/terms/list.astro.mjs');
const _page18 = () => import('./pages/terms/privacy-policy.astro.mjs');
const _page19 = () => import('./pages/terms/terms-and-conditions.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page3],
    ["src/pages/archives/index.astro", _page4],
    ["src/pages/blog/[...id].astro", _page5],
    ["src/pages/blog/[...page].astro", _page6],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page7],
    ["src/pages/links/index.astro", _page8],
    ["src/pages/projects/index.astro", _page9],
    ["src/pages/robots.txt.ts", _page10],
    ["src/pages/rss.xml.ts", _page11],
    ["src/pages/search/index.astro", _page12],
    ["src/pages/tags/[tag]/[...page].astro", _page13],
    ["src/pages/tags/index.astro", _page14],
    ["src/pages/terms/copyright.md", _page15],
    ["src/pages/terms/disclaimer.md", _page16],
    ["src/pages/terms/list.astro", _page17],
    ["src/pages/terms/privacy-policy.md", _page18],
    ["src/pages/terms/terms-and-conditions.md", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a6dd83e3-3061-4691-aa99-0cb422dcf426"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
