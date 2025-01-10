import '../../chunks/page-ssr_DZE3iadG.mjs';
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, F as Fragment, c as createAstro } from '../../chunks/astro/server_BSuU5-Gf.mjs';
import 'kleur/colors';
import { f as $$FormInput, j as $$Icon, b as $$Button, p as $$Logo, q as $$Base } from '../../chunks/Logo_ChHdVA5R.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$LandingContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form name="Contact Form" method="POST" action="/contact-thank-you" data-astro-cid-glhcn673> ${renderComponent($$result, "FormInput", $$FormInput, { "type": "text", "label": "First Name", "name": "First Name", "placeholder": "John", "data-astro-cid-glhcn673": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "type": "text", "label": "Last Name", "name": "Last Name", "placeholder": "Doe", "data-astro-cid-glhcn673": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "type": "email", "label": "Email", "name": "Email", "placeholder": "hello@example.com", "data-astro-cid-glhcn673": true })} ${renderComponent($$result, "Button", $$Button, { "customIcon": true, "data-astro-cid-glhcn673": true }, { "default": ($$result2) => renderTemplate`Submit
 `, "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "ic:baseline-chevron-right", "data-astro-cid-glhcn673": true })} ` })}` })} </form> `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/components/forms/LandingContactForm.astro", void 0);

const $$Astro = createAstro("https://odyssey-theme.sapling.supply/");
const $$Landing2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing2;
  const seo = {
    title: "Landing Page #2 | Astro Odyssey Theme",
    description: "Landing Page #2 | Astro Odyssey Theme"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo, "data-astro-cid-xeyyrucl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="full-page-split__wrapper" data-astro-cid-xeyyrucl> <section class="full-page-split__image-section" data-astro-cid-xeyyrucl> <div class="full-page-split__logo" data-astro-cid-xeyyrucl> <a href="/" data-astro-cid-xeyyrucl> ${renderComponent($$result2, "Logo", $$Logo, { "data-astro-cid-xeyyrucl": true })} </a> </div> <picture data-astro-cid-xeyyrucl> <img src="/assets/images/home/classic-hero.jpg" alt="Astro Odyssey" class="full-page-split__image" data-astro-cid-xeyyrucl> </picture> </section> <section class="full-page-split__content-section" data-astro-cid-xeyyrucl> <div class="full-page-split__content-container" data-astro-cid-xeyyrucl> <h1 data-astro-cid-xeyyrucl>Contact Us For a Free Consultation</h1> <p data-astro-cid-xeyyrucl>Fill out the form below to schedule a free consultation on your business' website needs.</p> ${renderComponent($$result2, "LandingContactForm", $$LandingContactForm, { "data-astro-cid-xeyyrucl": true })} </div> </section> </div> ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/landing-pages/landing-2.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/landing-pages/landing-2.astro";
const $$url = "/landing-pages/landing-2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Landing2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
