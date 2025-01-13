import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C0oXIx9d.mjs';
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
const _page10 = () => import('./pages/company/about.astro.mjs');
const _page11 = () => import('./pages/company/contact.astro.mjs');
const _page12 = () => import('./pages/company/legal.astro.mjs');
const _page13 = () => import('./pages/gallery.astro.mjs');
const _page14 = () => import('./pages/landing-pages/landing-1.astro.mjs');
const _page15 = () => import('./pages/landing-pages/landing-2.astro.mjs');
const _page16 = () => import('./pages/theme/get-started.astro.mjs');
const _page17 = () => import('./pages/theme/style-guide.astro.mjs');
const _page18 = () => import('./pages/wiki.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
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
    ["src/pages/company/about.astro", _page10],
    ["src/pages/company/contact.astro", _page11],
    ["src/pages/company/legal.astro", _page12],
    ["src/pages/gallery.astro", _page13],
    ["src/pages/landing-pages/landing-1.astro", _page14],
    ["src/pages/landing-pages/landing-2.astro", _page15],
    ["src/pages/theme/get-started.astro", _page16],
    ["src/pages/theme/style-guide.astro", _page17],
    ["src/pages/wiki.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8d1e7016-4536-42bc-aae8-7cfe31d08e82"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
