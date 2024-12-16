import '../../chunks/page-ssr_NmI0AUXy.mjs';
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, c as createAstro } from '../../chunks/astro/server_1-oyxUY5.mjs';
import 'kleur/colors';
import { f as $$FormInput, g as $$FormSelect, h as $$FormTextarea, b as $$Button, $ as $$Container } from '../../chunks/Logo_BTijNAeU.mjs';
/* empty css                                      */
import { $ as $$Page } from '../../chunks/Page_CXPBlTx2.mjs';
export { renderers } from '../../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const selectOptions = [
    "Google Search",
    "Social Media",
    "Email"
  ];
  return renderTemplate`${maybeRenderHead()}<form name="Contact Form" method="POST" action="/contact-thank-you" data-astro-cid-baqc3mtv> ${renderComponent($$result, "FormInput", $$FormInput, { "type": "text", "label": "Name", "name": "Name", "placeholder": "John Doe", "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "type": "email", "label": "Email", "name": "Email", "placeholder": "hello@example.com", "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "FormSelect", $$FormSelect, { "label": "How Did You Hear About Us?", "options": selectOptions, "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "FormTextarea", $$FormTextarea, { "label": "Message", "name": "Message", "placeholder": "Your message here...", "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "Button", $$Button, { "data-astro-cid-baqc3mtv": true }, { "default": ($$result2) => renderTemplate`Submit` })} </form> `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/components/forms/ContactForm.astro", void 0);

const $$Astro = createAstro("https://odyssey-theme.sapling.supply/");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const seo = {
    title: "Contact | Astro Odyssey Theme",
    description: "Contact Page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-gum5xmpw": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-gum5xmpw": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="contact-hero__section" data-astro-cid-gum5xmpw> <div class="contact-hero__text-section" data-astro-cid-gum5xmpw> <h1 data-astro-cid-gum5xmpw>Contact Us</h1> <p data-astro-cid-gum5xmpw>
This is a contact form using Odyssey's form components to create a
          contact form component. The contact form is setup to use Netlify's
          form detection; however, it can easily be translated to other popular
          form services such as Formspree, Getform, Formspark, etc.
</p> <div data-astro-cid-gum5xmpw> <p data-astro-cid-gum5xmpw> <em data-astro-cid-gum5xmpw><a href="tel:8008675309" data-astro-cid-gum5xmpw>(800) 867-5309</a></em> • <em data-astro-cid-gum5xmpw><a href="mailto:hello@odysseytheme.com" data-astro-cid-gum5xmpw>hello@ourcompany.com</a></em> </p> </div> </div> <div class="col-2__container" data-astro-cid-gum5xmpw> ${renderComponent($$result3, "ContactForm", $$ContactForm, { "data-astro-cid-gum5xmpw": true })} </div> </section> ` })} ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/company/contact.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/company/contact.astro";
const $$url = "/company/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
