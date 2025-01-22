import '../chunks/page-ssr_Do-0TkbW.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_a_9r0Ufn.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$TextCardSection, b as $$Button } from '../chunks/Logo_B-gdB_MZ.mjs';
import { $ as $$Page } from '../chunks/Page_DYZhNt29.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://chimaamadi.cv");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const seo = {
    title: "Get Started using the Astro Odyssey Theme",
    description: "Get started on how to setup and use this Astro theme."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TextCardSection", $$TextCardSection, { "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 data-astro-cid-zetdm5md>404</h2> <h2 data-astro-cid-zetdm5md>Page Not Found 👀</h2> <div class="cta-buttons__container" data-astro-cid-zetdm5md> ${renderComponent($$result4, "Button", $$Button, { "href": "/", "data-astro-cid-zetdm5md": true }, { "default": ($$result5) => renderTemplate`Return Home` })} </div> ` })} ` })} ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/404.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
