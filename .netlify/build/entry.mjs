import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DZnHmPX6.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin/_---params_.astro.mjs');
const _page4 = () => import('./pages/blog/posts/consider-hybrid-work.astro.mjs');
const _page5 = () => import('./pages/blog/posts/odyssey-theme-officially-released.astro.mjs');
const _page6 = () => import('./pages/blog/posts/remote-work-mental-health.astro.mjs');
const _page7 = () => import('./pages/blog/tags.astro.mjs');
const _page8 = () => import('./pages/blog/_id_.astro.mjs');
const _page9 = () => import('./pages/blog.astro.mjs');
const _page10 = () => import('./pages/gallery.astro.mjs');
const _page11 = () => import('./pages/theme/get-started.astro.mjs');
const _page12 = () => import('./pages/theme/style-guide.astro.mjs');
const _page13 = () => import('./pages/wiki.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page3],
    ["src/pages/blog/posts/consider-hybrid-work.mdx", _page4],
    ["src/pages/blog/posts/odyssey-theme-officially-released.mdx", _page5],
    ["src/pages/blog/posts/remote-work-mental-health.mdx", _page6],
    ["src/pages/blog/tags/index.astro", _page7],
    ["src/pages/blog/[id].astro", _page8],
    ["src/pages/blog/index.astro", _page9],
    ["src/pages/gallery.astro", _page10],
    ["src/pages/theme/get-started.astro", _page11],
    ["src/pages/theme/style-guide.astro", _page12],
    ["src/pages/wiki.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "680a7883-b4a0-4878-bbad-3dd651765fa9"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
