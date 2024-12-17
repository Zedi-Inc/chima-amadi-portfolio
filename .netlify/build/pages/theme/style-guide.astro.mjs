import '../../chunks/page-ssr_Dbep8LgX.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_1-oyxUY5.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$TextCardSection, b as $$Button, j as $$Icon, f as $$FormInput, g as $$FormSelect, h as $$FormTextarea } from '../../chunks/Logo_CJFBAAmv.mjs';
import { $ as $$Page } from '../../chunks/Page_Cfl4j5Iu.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://odyssey-theme.sapling.supply/");
const $$StyleGuide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StyleGuide;
  const seo = {
    title: "Astro Odyssey Theme Style Guide",
    description: "Get started on how to setup and use this Astro theme."
  };
  const selectOptions = ["Option 1", "Option 2", "Option 3"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-zlic2tnn": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-zlic2tnn": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TextCardSection", $$TextCardSection, { "data-astro-cid-zlic2tnn": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-zlic2tnn>Style Guide</h1> <p data-astro-cid-zlic2tnn>
This is the style guide for the <a href="https://github.com/treefarmstudio/odyssey-theme" target="_blank" rel="noopener noreferrer" data-astro-cid-zlic2tnn>Odyssey Theme</a>. Everything you'll find in the theme's starter repo is either a
        component from the <a href="https://www.npmjs.com/package/@/components/odyssey-theme" target="_blank" rel="noopener noreferrer" data-astro-cid-zlic2tnn>Odyssey Components Package</a> or built using a component. Not only does this allow for a fully modular
        setup that receives updates and improvements over time but also allows you
        to use bits and pieces as needed to create your own unique website with Odyssey
        as the foundation.
</p> ` })} <section class="style-guide__section" data-astro-cid-zlic2tnn> <div class="style-guide__title-container" data-astro-cid-zlic2tnn> <h2 data-astro-cid-zlic2tnn>Colors</h2> </div> <div data-astro-cid-zlic2tnn> <div class="style-guide-color__card" data-astro-cid-zlic2tnn> <h3 data-astro-cid-zlic2tnn>Primary</h3> </div> <div class="style-guide-color__card style-guide-color__card--surface-1" data-astro-cid-zlic2tnn> <h3 data-astro-cid-zlic2tnn>Surface 1</h3> </div> <div class="style-guide-color__card style-guide-color__card--surface-2" data-astro-cid-zlic2tnn> <h3 data-astro-cid-zlic2tnn>Surface 2</h3> </div> </div> </section> <section class="style-guide__section" data-astro-cid-zlic2tnn> <div class="style-guide__title-container" data-astro-cid-zlic2tnn> <h2 data-astro-cid-zlic2tnn>Typography</h2> </div> <div data-astro-cid-zlic2tnn> <h1 data-astro-cid-zlic2tnn>Heading 1</h1> <h2 data-astro-cid-zlic2tnn>Heading 2</h2> <h3 data-astro-cid-zlic2tnn>Heading 3</h3> <h4 data-astro-cid-zlic2tnn>Heading 4</h4> <h5 data-astro-cid-zlic2tnn>Heading 5</h5> <h6 data-astro-cid-zlic2tnn>Heading 6</h6> <p data-astro-cid-zlic2tnn>Body Text</p> <blockquote data-astro-cid-zlic2tnn>
“Don’t settle for what life gives you; make life better and build
          something.” — Ashton Kutcher
</blockquote> </div> </section> <section class="style-guide__section" data-astro-cid-zlic2tnn> <div class="style-guide__title-container" data-astro-cid-zlic2tnn> <h2 data-astro-cid-zlic2tnn>Buttons</h2> </div> <div data-astro-cid-zlic2tnn> <p data-astro-cid-zlic2tnn>Button</p> <p data-astro-cid-zlic2tnn> ${renderComponent($$result3, "Button", $$Button, { "data-astro-cid-zlic2tnn": true }, { "default": ($$result4) => renderTemplate`Button 1` })} </p> <p data-astro-cid-zlic2tnn>Unelevated Button</p> <p data-astro-cid-zlic2tnn> ${renderComponent($$result3, "Button", $$Button, { "unelevated": true, "data-astro-cid-zlic2tnn": true }, { "default": ($$result4) => renderTemplate`Button 2` })} </p> <p data-astro-cid-zlic2tnn>Outlined Button</p> <p data-astro-cid-zlic2tnn> ${renderComponent($$result3, "Button", $$Button, { "outlined": true, "data-astro-cid-zlic2tnn": true }, { "default": ($$result4) => renderTemplate`Button 3` })} </p> <p data-astro-cid-zlic2tnn>Button With Custom Icon</p> ${renderComponent($$result3, "Button", $$Button, { "customIcon": true, "data-astro-cid-zlic2tnn": true }, { "default": ($$result4) => renderTemplate`Launch Page
 `, "icon": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Icon", $$Icon, { "name": "ic:baseline-launch", "data-astro-cid-zlic2tnn": true })} ` })}` })} </div> </section> <section class="style-guide__section" data-astro-cid-zlic2tnn> <div class="style-guide__title-container" data-astro-cid-zlic2tnn> <h2 data-astro-cid-zlic2tnn>Forms</h2> </div> <div class="style-guide-forms__container" data-astro-cid-zlic2tnn> <div data-astro-cid-zlic2tnn> <h3 data-astro-cid-zlic2tnn>Input With Label</h3> ${renderComponent($$result3, "FormInput", $$FormInput, { "type": "text", "label": "Name", "name": "Name", "placeholder": "John Doe", "data-astro-cid-zlic2tnn": true })} </div> <div data-astro-cid-zlic2tnn> <h3 data-astro-cid-zlic2tnn>Input Without Label</h3> ${renderComponent($$result3, "FormInput", $$FormInput, { "type": "text", "name": "Name", "placeholder": "John Doe", "data-astro-cid-zlic2tnn": true })} </div> <div data-astro-cid-zlic2tnn> <h3 data-astro-cid-zlic2tnn>Select Dropdown</h3> ${renderComponent($$result3, "FormSelect", $$FormSelect, { "options": selectOptions, "data-astro-cid-zlic2tnn": true })} </div> <div data-astro-cid-zlic2tnn> <h3 data-astro-cid-zlic2tnn>Textarea</h3> ${renderComponent($$result3, "FormTextarea", $$FormTextarea, { "name": "Message", "placeholder": "Your message here...", "data-astro-cid-zlic2tnn": true })} </div> </div> </section> ` })} ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/theme/style-guide.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/theme/style-guide.astro";
const $$url = "/theme/style-guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StyleGuide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
