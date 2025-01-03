import '../chunks/page-ssr_C1XCyQoh.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BSuU5-Gf.mjs';
import 'kleur/colors';
import { $ as $$Container, d as $$BlogPostsList } from '../chunks/Logo_BGCn34SM.mjs';
import { $ as $$Page } from '../chunks/Page_CSlaaEtl.mjs';
import { $ as $$Heading } from '../chunks/Heading_C2tD4eku.mjs';
import { b as articles } from '../chunks/sanity-utils_BGePeoMV.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let articleContents = { data: [] };
  try {
    articleContents = await articles();
  } catch (error) {
    console.error("error", error);
  }
  const posts = articleContents?.data?.[0]?.articles ?? null;
  const seo = {
    title: "Dr. Chima Amadi | Articles",
    description: "Articles about Dr. Chima Amadi"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-5tznm7mj": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="pb-10 lg:px-6" data-astro-cid-5tznm7mj> <div class="blog-posts-list__section px-4" data-astro-cid-5tznm7mj> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-5tznm7mj": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-5tznm7mj>
Articles
</h2>` })} ${renderComponent($$result3, "BlogPostsList", $$BlogPostsList, { "posts": posts, "data-astro-cid-5tznm7mj": true })} </div> </section> ` })} ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
