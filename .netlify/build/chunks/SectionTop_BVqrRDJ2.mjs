import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, f as renderSlot } from './astro/server_1-oyxUY5.mjs';
import 'kleur/colors';
import { $ as $$Container } from './Logo_CJFBAAmv.mjs';
/* empty css                         */

const $$SectionTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-qpn6hw3e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hero-section__section mt-10 flex flex-col md:flex-row-reverse items-center justify-between px-4 lg:px-8" data-astro-cid-qpn6hw3e> <div class="hero-section__text" data-astro-cid-qpn6hw3e> ${renderSlot($$result2, $$slots["text-container"])} </div> <div class="hero-section__image" data-astro-cid-qpn6hw3e> ${renderSlot($$result2, $$slots["image-container"])} </div> </div> ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/components/sections/heros/SectionTop.astro", void 0);

export { $$SectionTop as $ };
