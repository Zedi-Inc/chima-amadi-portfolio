import '../chunks/page-ssr_CMqITo4_.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C-Sf_0IX.mjs';
import 'kleur/colors';
import { c as $$PortableText, $ as $$Container } from '../chunks/Logo_BoHxFp4f.mjs';
import { $ as $$Page } from '../chunks/Page_y_a9vCOe.mjs';
import { $ as $$Heading } from '../chunks/Heading_BIpVdQ_3.mjs';
import { $ as $$SectionTop } from '../chunks/SectionTop_nCeyoAcj.mjs';
import { a as about } from '../chunks/sanity-utils_CIA4ddue.mjs';
import { $ as $$AOSInit } from '../chunks/AOSInit_BbeBoo28.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Wiki = createComponent(async ($$result, $$props, $$slots) => {
  const seo = {
    title: "About | Dr. Chima Amadi",
    description: "Explore the life, education, and achievements of Dr. Chima Amadi, a renowned scholar, advocate for good governance, and entrepreneur."
  };
  let aboutContent = { data: [] };
  try {
    aboutContent = await about();
  } catch (error) {
    console.error("Failed to fetch about content:", error);
  }
  const heroContent = aboutContent.data[0]?.heroContent?.[0] ?? null;
  const mainContent = aboutContent.data[0]?.aboutContent;
  const philanthropyActivities = aboutContent.data[0]?.activities?.[0] ?? null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-uypgrzsv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AOSInit", $$AOSInit, { "data-astro-cid-uypgrzsv": true })} ${maybeRenderHead()}<section class="pb-10 lg:px-10" data-astro-cid-uypgrzsv> ${renderComponent($$result2, "SectionTop", $$SectionTop, { "data-astro-cid-uypgrzsv": true }, { "image-container": ($$result3) => renderTemplate`${renderComponent($$result3, "PortableText", $$PortableText, { "slot": "image-container", "portableText": heroContent?.image, "data-astro-cid-uypgrzsv": true })}`, "text-container": ($$result3) => renderTemplate`<div data-astro-cid-uypgrzsv> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-uypgrzsv": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-uypgrzsv> ${heroContent?.name} </h2>` })} <div class="text-sm md:text-base xl:text-base" data-astro-cid-uypgrzsv> ${renderComponent($$result3, "PortableText", $$PortableText, { "portableText": heroContent?.description, "data-astro-cid-uypgrzsv": true })} </div> </div>` })} ${mainContent?.length ? mainContent.splice(0, mainContent.length - 1).map((item) => renderTemplate`<div class="px-4 lg:px-10 mt-8" data-aos="fade-up" data-aos-duration="1000" data-astro-cid-uypgrzsv> ${renderComponent($$result2, "Heading", $$Heading, { "data-astro-cid-uypgrzsv": true }, { "headingText": ($$result3) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-uypgrzsv> ${item?.name || "Default Name"} </h2>` })} <div class="text-sm md:text-base" data-astro-cid-uypgrzsv> ${item?.description?.map((desc, index) => renderTemplate`${renderComponent($$result2, "PortableText", $$PortableText, { "key": index, "portableText": desc, "data-astro-cid-uypgrzsv": true })}`)} </div> </div>`) : renderTemplate`<p data-astro-cid-uypgrzsv>No content available.</p>`} ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-uypgrzsv": true }, { "default": ($$result3) => renderTemplate` <div class="hero-section__section mt-10 flex flex-col md:flex-row-reverse items-center justify-between px-4 lg:px-8" data-astro-cid-uypgrzsv> <div class="hero-section__text" data-astro-cid-uypgrzsv> <div data-astro-cid-uypgrzsv> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-uypgrzsv": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-uypgrzsv> ${philanthropyActivities?.name} </h2>` })} <div class="text-sm md:text-base" data-astro-cid-uypgrzsv> <p data-astro-cid-uypgrzsv> ${philanthropyActivities?.description} </p> </div> </div> </div> <div class="hero-section__image" data-astro-cid-uypgrzsv> ${renderComponent($$result3, "PortableText", $$PortableText, { "portableText": philanthropyActivities?.image, "data-astro-cid-uypgrzsv": true })} </div> </div> ${mainContent?.length ? mainContent.splice(mainContent.length - 1, mainContent.length).map((item) => renderTemplate`<div class="px-4 lg:px-10 mt-8" data-astro-cid-uypgrzsv> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-uypgrzsv": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-uypgrzsv> ${item?.name || "Default Name"} </h2>` })} <div class="text-sm md:text-base" data-astro-cid-uypgrzsv> ${item?.description?.map((desc, index) => renderTemplate`${renderComponent($$result3, "PortableText", $$PortableText, { "key": index, "portableText": desc, "data-astro-cid-uypgrzsv": true })}`)} </div> </div>`) : renderTemplate`<p data-astro-cid-uypgrzsv>No content available.</p>`}` })} </section>  ` })}`;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/wiki.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/wiki.astro";
const $$url = "/wiki";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Wiki,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
