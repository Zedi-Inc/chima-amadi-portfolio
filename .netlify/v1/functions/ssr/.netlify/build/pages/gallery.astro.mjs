import '../chunks/page-ssr_Do-0TkbW.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, o as renderScript, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_a_9r0Ufn.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/Page_DYZhNt29.mjs';
import { g as gallery } from '../chunks/sanity-utils_Db0sd0oL.mjs';
import { $ as $$AOSInit } from '../chunks/AOSInit_D939KJTF.mjs';
import { c as $$PortableText } from '../chunks/Logo_B-gdB_MZ.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const seo = {
    title: "Dr. Chima Matthew Amadi | Pictures gallery",
    description: "Dr. Chima Matthew Amadi is a renowned scholar, advocates for good governance, and entrepreneur."
  };
  let galleryContents = { data: [] };
  try {
    galleryContents = await gallery();
  } catch (error) {
    console.error("error", error);
  }
  const gallery$1 = galleryContents ?? null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-sahthylw": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AOSInit", $$AOSInit, { "data-astro-cid-sahthylw": true })} ${maybeRenderHead()}<section class="pt-8 pb-24 relative max-w-[1280px] mx-auto" data-astro-cid-sahthylw> <div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6" data-astro-cid-sahthylw> <div class="mb-6 md:mb-16" data-astro-cid-sahthylw> <h2 class="w-full text-center text-gray-900 text-xl md:text-3xl font-bold font-manrope leading-normal pb-2.5" data-astro-cid-sahthylw>
Gallery
</h2> <p class="w-full text-center text-gray-600 lg:text-lg font-normal md:leading-8" data-astro-cid-sahthylw>
Discover the journey and achievements of Dr. Chima Matthew Amadi, a
					dedicated politician, through this gallery.
</p> </div> </div> <section class="gallery-section pt-8 pb-12" data-astro-cid-sahthylw> <div id="gallery-grid" class="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" data-astro-cid-sahthylw> ${gallery$1.data.map((item, index) => renderTemplate`<div${addAttribute(`gallery-item relative overflow-hidden h-64 rounded-lg ${index >= 9 ? "hidden" : ""}`, "class")} data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-sahthylw> <div class="image-wrapper relative h-full w-full overflow-hidden group cursor-pointer" data-astro-cid-sahthylw> ${renderComponent($$result2, "PortableText", $$PortableText, { "portableText": item?.image, "style": "max-height: 100%; max-width: 100%; border: 1px solid red; aspect-ratio: 3/2;", "class": "gallery-image !block w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110", "imageOpts": {
    alt: item?.title || `Dr. Chima Matthew Amadi Gallery Image ${index}`
  }, "data-astro-cid-sahthylw": true })} ${item?.title && renderTemplate`<div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end" data-astro-cid-sahthylw> <p class="text-white p-4 text-sm" data-astro-cid-sahthylw>${item.title}</p> </div>`} </div> </div>`)} </div> <div class="flex justify-center mt-8" data-astro-cid-sahthylw> <button id="view-more-btn" class="text-red-800 font-semibold hover:underline hover:text-red-800/80" data-astro-cid-sahthylw> ${gallery$1.data.length > 9 ? "[See more images]" : ""} </button> </div> <!-- Lightbox --> <div id="lightbox" class="fixed inset-0 z-50 hidden bg-black bg-opacity-90 items-center justify-center" data-astro-cid-sahthylw> <button id="close" class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 focus:outline-none" data-astro-cid-sahthylw>
&times;
</button> <img id="lightbox-image" class="max-w-[90vw] max-h-[90vh] object-contain" src="" alt="Dr. Chima Matthew Amadi, Mazi Gburugburu" data-astro-cid-sahthylw> </div> </section> </section> ` })} ${!gallery$1 && renderTemplate`<div class="loading-state flex items-center justify-center py-20" data-astro-cid-sahthylw> <p class="text-gray-600" data-astro-cid-sahthylw>Loading images...</p> </div>`}  ${renderScript($$result, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/gallery.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Gallery,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
