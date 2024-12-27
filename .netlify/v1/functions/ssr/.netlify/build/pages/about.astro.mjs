import '../chunks/page-ssr_BSouY8rh.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CZvC6DWo.mjs';
import 'kleur/colors';
import { c as $$PortableText, $ as $$Container } from '../chunks/Logo_t5A6Jcft.mjs';
import { $ as $$Page } from '../chunks/Page_Jpozj1tt.mjs';
import { a as about, $ as $$Heading } from '../chunks/sanity-utils_N5ziniui.mjs';
import { $ as $$SectionTop } from '../chunks/SectionTop_Bo5Y12MB.mjs';
import { $ as $$AOSInit } from '../chunks/AOSInit_CIZxvWgd.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AOSInit", $$AOSInit, { "data-astro-cid-kh7btl4r": true })} ${maybeRenderHead()}<section class="pb-10 lg:px-10" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "SectionTop", $$SectionTop, { "data-astro-cid-kh7btl4r": true }, { "image-container": ($$result3) => renderTemplate`${renderComponent($$result3, "PortableText", $$PortableText, { "slot": "image-container", "portableText": heroContent?.image, "data-astro-cid-kh7btl4r": true })}`, "text-container": ($$result3) => renderTemplate`<div data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-kh7btl4r": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-kh7btl4r> ${heroContent?.name} </h2>` })} <div class="text-sm md:text-base xl:text-base" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "PortableText", $$PortableText, { "portableText": heroContent?.description, "data-astro-cid-kh7btl4r": true })} </div> </div>` })} ${mainContent?.length ? mainContent.splice(0, mainContent.length - 1).map((item) => renderTemplate`<div class="px-4 lg:px-10 mt-8" data-aos="fade-up" data-aos-duration="1000" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Heading", $$Heading, { "data-astro-cid-kh7btl4r": true }, { "headingText": ($$result3) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-kh7btl4r> ${item?.name || "Default Name"} </h2>` })} <div class="text-sm md:text-base" data-astro-cid-kh7btl4r> ${item?.description?.map((desc, index) => renderTemplate`${renderComponent($$result2, "PortableText", $$PortableText, { "key": index, "portableText": desc, "data-astro-cid-kh7btl4r": true })}`)} </div> </div>`) : renderTemplate`<p data-astro-cid-kh7btl4r>No content available.</p>`} ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="hero-section__section mt-10 flex flex-col md:flex-row-reverse items-center justify-between px-4 lg:px-8" data-astro-cid-kh7btl4r> <div class="hero-section__text" data-astro-cid-kh7btl4r> <div data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-kh7btl4r": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-kh7btl4r> ${philanthropyActivities?.name} </h2>` })} <div class="text-sm md:text-base" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r> ${philanthropyActivities?.description} </p> </div> </div> </div> <div class="hero-section__image" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "PortableText", $$PortableText, { "portableText": philanthropyActivities?.image, "data-astro-cid-kh7btl4r": true })} </div> </div> ${mainContent?.length ? mainContent.splice(mainContent.length - 1, mainContent.length).map((item) => renderTemplate`<div class="px-4 lg:px-10 mt-8" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-kh7btl4r": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-kh7btl4r> ${item?.name || "Default Name"} </h2>` })} <div class="text-sm md:text-base" data-astro-cid-kh7btl4r> ${item?.description?.map((desc, index) => renderTemplate`${renderComponent($$result3, "PortableText", $$PortableText, { "key": index, "portableText": desc, "data-astro-cid-kh7btl4r": true })}`)} </div> </div>`) : renderTemplate`<p data-astro-cid-kh7btl4r>No content available.</p>`}` })} </section>  ` })}`;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
