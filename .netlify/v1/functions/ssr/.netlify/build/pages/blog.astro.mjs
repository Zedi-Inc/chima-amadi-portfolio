import '../chunks/page-ssr_BSouY8rh.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CZvC6DWo.mjs';
import 'kleur/colors';
import { $ as $$Container, d as $$BlogPostsList } from '../chunks/Logo_t5A6Jcft.mjs';
import { $ as $$Page } from '../chunks/Page_Jpozj1tt.mjs';
import { b as articles, $ as $$Heading } from '../chunks/sanity-utils_N5ziniui.mjs';
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
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
