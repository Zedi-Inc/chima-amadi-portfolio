import '../../chunks/page-ssr_CMqITo4_.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C-Sf_0IX.mjs';
import 'kleur/colors';
import { f as $$TextSection } from '../../chunks/Logo_BoHxFp4f.mjs';
import { $ as $$Page } from '../../chunks/Page_y_a9vCOe.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://chimaamadi.cv");
const $$Legal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Legal;
  const seo = {
    title: `Legal Page | Astro Odyssey Theme`,
    description: `This is the legal page template. It is a great starter for your company's Terms of Service, Terms & Conditions, Privacy Policy, etc.`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TextSection", $$TextSection, { "narrow": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Legal Page</h1> <p>
This is the legal page template. It is a great starter for your company's
      Terms of Service, Terms & Conditions, Privacy Policy, etc.
</p> <h2>Terms of Service</h2> <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
      obcaecati. Aspernatur facilis molestias vitae. Aliquid debitis eum quis
      repudiandae pariatur possimus provident accusantium reiciendis nemo, culpa
      labore laborum, dolorum ea.
</p> <p>
Corrupti impedit perferendis, libero in, voluptates quod ratione
      repudiandae veniam sapiente necessitatibus, eius illo. Impedit quibusdam
      esse saepe placeat incidunt voluptatibus soluta dolore blanditiis ad
      provident animi illum, est adipisci?
</p> <p>
Ratione optio necessitatibus numquam dignissimos sunt molestiae ipsum
      fugiat quae maxime veniam aspernatur eius quidem vel reprehenderit sequi,
      molestias perspiciatis, illo architecto perferendis nobis, in dolore! Nam
      asperiores eaque totam.
</p> <p>
Repudiandae, labore alias. Voluptatem quia itaque sequi, aperiam,
      reprehenderit ipsum libero quae adipisci possimus eum esse corrupti
      sapiente harum dignissimos eligendi cum iure tempora magnam nemo, sunt
      provident vero. Voluptatibus.
</p> <h2>Privacy Policy</h2> <p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eveniet
      quibusdam ipsa, veniam adipisci rerum temporibus inventore! Sit quas vero
      laboriosam tempora alias! Fugit, saepe earum quod modi harum qui.
      Expedita, pariatur consequuntur! Modi, maiores. Quaerat voluptatibus
      nostrum non harum rerum dolorem totam qui repellendus, itaque dignissimos
      eveniet consequuntur ducimus! Non commodi magnam nemo, pariatur facilis
      repellendus sunt fuga ipsa.
</p> <p>
Consequuntur similique ab ea tenetur, quo aperiam molestias sed facilis
      minus eaque eveniet libero quis accusantium deleniti tempore? Qui vel
      reiciendis voluptates corporis eum repellat maiores fugit, eveniet
      sapiente ad.
</p> ` })} ` })}`;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/company/legal.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/company/legal.astro";
const $$url = "/company/legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Legal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
