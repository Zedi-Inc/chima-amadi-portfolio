import '../../chunks/page-ssr_BSouY8rh.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot, F as Fragment } from '../../chunks/astro/server_CZvC6DWo.mjs';
import 'kleur/colors';
import { $ as $$Container, i as $$AnnouncementBar, b as $$Button, j as $$Icon, k as $$CustomerQuoteSection, l as $$ThreeColumnTextSection, m as $$YouTubeEmbedSection, n as $$StickyTextImageSection, o as $$CtaCardSection } from '../../chunks/Logo_t5A6Jcft.mjs';
/* empty css                                        */
import { $ as $$Page } from '../../chunks/Page_Jpozj1tt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://odyssey-theme.sapling.supply/");
const $$TextAndImageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TextAndImageHero;
  const { reversed } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-k22oaszl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section${addAttribute(`text-and-image__section ${reversed && `text-and-image__section--reversed`}`, "class")} data-astro-cid-k22oaszl> <div class="text-and-image__text" data-astro-cid-k22oaszl> ${renderSlot($$result2, $$slots["text-container"])} <div class="text-and-image__btns" data-astro-cid-k22oaszl> ${renderSlot($$result2, $$slots["btns-container"])} </div> </div> <div class="text-and-image__image" data-astro-cid-k22oaszl> ${renderSlot($$result2, $$slots["image-container"])} </div> </section> ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/components/sections/heros/TextAndImageHero.astro", void 0);

const $$Astro = createAstro("https://odyssey-theme.sapling.supply/");
const $$Landing1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing1;
  const seo = {
    title: "Landing Page #1 | Astro Odyssey Theme",
    description: "Landing Page #1 | Astro Odyssey Theme"
  };
  return renderTemplate`${renderComponent($$result, "AnnouncementBar", $$AnnouncementBar, { "text": "Read Our Latest Blog Post", "href": "/blog/posts/remote-work-mental-health/", "slot": "announcement-bar" })} ${renderComponent($$result, "Layout", $$Page, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TextAndImageHero", $$TextAndImageHero, { "reversed": true }, { "btns-container": ($$result3) => renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result3, "Button", $$Button, { "href": "/theme/get-started", "customIcon": true }, { "default": ($$result4) => renderTemplate`Get Started `, "icon": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Icon", $$Icon, { "name": "ic:baseline-chevron-right" })} ` })}` })} </div>`, "image-container": ($$result3) => renderTemplate`<picture> <img src="/assets/images/landing-1/landing-hero-1.jpg" alt="Astro Odyssee" id="home-hero-image"> </picture>`, "text-container": ($$result3) => renderTemplate`<div> <h1>Don't Reinvent the Wheel</h1> <p>Use Odyssey Theme to jumpstart your company's marketing website.</p> </div>` })} ${renderComponent($$result2, "CustomerQuoteSection", $$CustomerQuoteSection, { "quoteText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vero nobis? Voluptas assumenda, voluptatibus commodi qui ducimus delectus praesentium maiores, impedit iure labore ratione, ea facilis numquam doloremque aperiam aspernatur.", "customerName": "Happy Customer" })} ${renderComponent($$result2, "ThreeColumnTextSection", $$ThreeColumnTextSection, {}, { "column-1-body": ($$result3) => renderTemplate`<div> <h2>Why?</h2> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
        tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
        consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
        mollitia cumque. Velit.
</p> </div>`, "column-1-cta": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "column-1-cta" }, { "default": ($$result4) => renderTemplate`Learn More` })}`, "column-2-body": ($$result3) => renderTemplate`<div> <h2>How?</h2> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
        tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
        consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
        mollitia cumque. Velit.
</p> </div>`, "column-2-cta": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "column-2-cta", "outlined": true }, { "default": ($$result4) => renderTemplate`Learn More` })}`, "column-3-body": ($$result3) => renderTemplate`<div> <h2>What?</h2> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
        tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
        consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
        mollitia cumque. Velit.
</p> </div>`, "column-3-cta": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "slot": "column-3-cta" }, { "default": ($$result4) => renderTemplate`Learn More` })}` })} ${renderComponent($$result2, "YouTubeEmbedSection", $$YouTubeEmbedSection, { "url": "https://www.youtube.com/watch?v=cbYr75_R15M", "rounded": true })} ${renderComponent($$result2, "StickyTextImageSection", $$StickyTextImageSection, {}, { "image-container": ($$result3) => renderTemplate`<picture> <img src="/assets/images/landing-1/landing-sticky.jpg" alt="Astro Odyssey" loading="lazy"> </picture>`, "text-container": ($$result3) => renderTemplate`<div> <h2>Features</h2> <h3>SEO</h3> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
        tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
        consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
        mollitia cumque. Velit.
</p> <h3>Responsive</h3> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
        tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
        consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
        mollitia cumque. Velit.
</p> <h3>Themeable</h3> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
        tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
        consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
        mollitia cumque. Velit.
</p> </div>` })} ${renderComponent($$result2, "CtaCardSection", $$CtaCardSection, { "background": "var(--theme-surface-2)", "color": "var(--theme-on-surface-2)" }, { "default": ($$result3) => renderTemplate` <h2>Start Your Website Today</h2> <p>
It only takes a couple clicks to have a new, modern website for your
      business or startup.
</p> ${renderComponent($$result3, "Button", $$Button, { "href": "/theme/get-started", "customIcon": true }, { "default": ($$result4) => renderTemplate`Get Started `, "icon": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "icon" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Icon", $$Icon, { "name": "ic:baseline-chevron-right" })} ` })}` })} ` })} ` })}`;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/landing-pages/landing-1.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/landing-pages/landing-1.astro";
const $$url = "/landing-pages/landing-1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Landing1,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
