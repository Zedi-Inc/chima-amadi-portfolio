import '../chunks/page-ssr_Do-0TkbW.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_a_9r0Ufn.mjs';
import 'kleur/colors';
import { s as $$Socials, $ as $$Container, e as $$BlogPostsList } from '../chunks/Logo_B-gdB_MZ.mjs';
import { $ as $$Heading } from '../chunks/Heading_dsUdEwPs.mjs';
import { $ as $$SectionTop } from '../chunks/SectionTop_S2hxlu1E.mjs';
/* empty css                                 */
import { $ as $$Page } from '../chunks/Page_DYZhNt29.mjs';
import { b as articles } from '../chunks/sanity-utils_Db0sd0oL.mjs';
import { $ as $$AOSInit } from '../chunks/AOSInit_D939KJTF.mjs';
export { renderers } from '../renderers.mjs';

const $$HomeHeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-ulkickqi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex justify-center max-w-[1280px]" data-astro-cid-ulkickqi> <div class="hero-section__section flex flex-col-reverse md:flex-row md:gap-[120px] px-4 lg:px-12 mt-8 w-full" data-astro-cid-ulkickqi> <div class="hero-section__text" data-aos="fade-right" data-astro-cid-ulkickqi> <h1 class="text-[44px] text-red-800 font-semibold text-center md:text-right md:text-[50px] lg:text-5xl -tracking-[4px] whitespace-nowrap" data-astro-cid-ulkickqi>
Dr. Chima Amadi
</h1> <div class="flex justify-center md:justify-end" data-astro-cid-ulkickqi> <p class="text-sm md:text-base text-center md:text-right max-w-[80%]" data-astro-cid-ulkickqi>
Executive Director of the Centre for Transparency Advocacy (CTA)
</p> </div> ${renderComponent($$result2, "Socials", $$Socials, { "data-astro-cid-ulkickqi": true })} </div> <div class="hero-section__image" data-aos="fade-left" data-astro-cid-ulkickqi> <picture data-astro-cid-ulkickqi> <img src="/assets/images/home/mazi-15.webp" alt="Dr. Chima Matthew Amadi Mazi Gburugburu" id="home-hero-image" class="h-full" data-astro-cid-ulkickqi> </picture> </div> </div> </section> ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/components/sections/heros/HomeHeroSection.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const seo = {
    title: "Dr. Chima Amadi",
    description: "Dr. Chima Amadi is a renowned scholar, advocates for good governance, and entrepreneur."
  };
  let articleContents = { data: [] };
  try {
    articleContents = await articles();
  } catch (error) {
    console.error("error", error);
  }
  const posts = articleContents?.data?.[0]?.articles ?? null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AOSInit", $$AOSInit, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "HomeHeroSection", $$HomeHeroSection, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<section class="pb-10 lg:px-6 w-full mx-auto" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionTop", $$SectionTop, { "data-astro-cid-j7pv25f6": true }, { "image-container": ($$result3) => renderTemplate`<picture data-aos="fade-right" data-astro-cid-j7pv25f6> <img src="/assets/images/home/chima-amadi-2.webp" alt="Dr. Chima Amadi's image" id="home-hero-image" data-astro-cid-j7pv25f6> </picture>`, "text-container": ($$result3) => renderTemplate`<div data-aos="fade-right" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-j7pv25f6": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-j7pv25f6>
About Dr. Chima Amadi
</h2>` })} <div class="text-sm md:text-base" data-aos="fade-left" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
Dr. Chima Matthew Amadi, also called "Mazi Gburugburu," is a
						respected Nigerian scholar, researcher, advocate for good
						governance, entrepreneur, and philanthropist who has made noteworthy
						advancements in the fields of Political Science, Economics, and
						Development Studies.
</p> <p data-astro-cid-j7pv25f6>
He is the chairman of Centre for Transparency Advocacy (CTA),
						Julian-Matt Group, and founded the Jude and Juliana Amadi
						Foundation.
</p> <p data-astro-cid-j7pv25f6>
In 2023, Amadi was awarded the Social Crusader of the Year by The
						New Telegraph Newspapers.
</p> <div class="mt-2" data-astro-cid-j7pv25f6> <a href="/about" class="text-red-800 font-semibold hover:underline hover:text-red-800/80" data-astro-cid-j7pv25f6>[See more]</a> </div> </div> </div>` })} </section> <section class="pb-10 px-4 lg:px-12 mt-8 max-w-[1280px] mx-auto" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Heading", $$Heading, { "data-astro-cid-j7pv25f6": true }, { "headingText": ($$result3) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-j7pv25f6>
Recent Articles
</h2>` })} ${renderComponent($$result2, "BlogPostsList", $$BlogPostsList, { "posts": posts?.slice(0, 4), "data-astro-cid-j7pv25f6": true })} <div class="mt-2" data-astro-cid-j7pv25f6> <a href="/blog" class="text-red-800 font-semibold hover:underline hover:text-red-800/80" data-astro-cid-j7pv25f6>
[See more articles]
</a> </div> </section> ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
