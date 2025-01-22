import '../../chunks/page-ssr_CyZe_LUJ.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_a_9r0Ufn.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$TextCardSection, b as $$Button, g as $$Icon, c as $$Page } from '../../chunks/Page_CRe-USFk.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://chimaamadi.cv");
const $$GetStarted = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GetStarted;
  const seo = {
    title: "Get Started using the Astro Odyssey Theme",
    description: "Get started on how to setup and use this Astro theme."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-mz6karmx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-mz6karmx": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TextCardSection", $$TextCardSection, { "data-astro-cid-mz6karmx": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-mz6karmx>Get Started with Odyssey</h1> <div class="cta-buttons__container" data-astro-cid-mz6karmx> ${renderComponent($$result4, "Button", $$Button, { "href": "https://github.com/treefarmstudio/odyssey-theme", "outlined": true, "newTab": true, "customIcon": true, "data-astro-cid-mz6karmx": true }, { "default": ($$result5) => renderTemplate`
Dr. Chima Amadi
 `, "icon": ($$result5) => renderTemplate`${renderComponent($$result5, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Icon", $$Icon, { "name": "ic:baseline-launch", "data-astro-cid-mz6karmx": true })} ` })}` })} ${renderComponent($$result4, "Button", $$Button, { "href": "/theme/theme-setup", "customIcon": true, "data-astro-cid-mz6karmx": true }, { "default": ($$result5) => renderTemplate`
Theme Setup
 `, "icon": ($$result5) => renderTemplate`${renderComponent($$result5, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Icon", $$Icon, { "name": "ic:baseline-chevron-right", "data-astro-cid-mz6karmx": true })} ` })}` })} ${renderComponent($$result4, "Button", $$Button, { "href": "/theme/customizing-odyssey", "customIcon": true, "data-astro-cid-mz6karmx": true }, { "default": ($$result5) => renderTemplate`
Customizing Odyssey
 `, "icon": ($$result5) => renderTemplate`${renderComponent($$result5, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Icon", $$Icon, { "name": "ic:baseline-chevron-right", "data-astro-cid-mz6karmx": true })} ` })}` })} </div> ` })} ` })} ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/theme/get-started.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/theme/get-started.astro";
const $$url = "/theme/get-started";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GetStarted,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
