import '../chunks/page-ssr_Dq7ZCpBh.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_1-oyxUY5.mjs';
import 'kleur/colors';
import { parse, isBefore } from 'date-fns';
import { $ as $$Container, c as $$BlogPostsList } from '../chunks/Logo_mlr6rG5n.mjs';
import { $ as $$Page } from '../chunks/Page_yJE0Ldw0.mjs';
import { $ as $$Heading } from '../chunks/Heading_BxSldCcy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://odyssey-theme.sapling.supply/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/consider-hybrid-work.mdx": () => import('../chunks/consider-hybrid-work_BYsf6Twp.mjs').then(n => n._),"./posts/odyssey-theme-officially-released.mdx": () => import('../chunks/odyssey-theme-officially-released_32S9kc7U.mjs').then(n => n._),"./posts/remote-work-mental-health.mdx": () => import('../chunks/remote-work-mental-health_B2n1mGPb.mjs').then(n => n._)}), () => "./posts/*.mdx").then(
    (posts2) => posts2.map(({ frontmatter, url }) => ({
      title: frontmatter.title,
      description: frontmatter.description,
      authors: frontmatter.authors,
      publishDate: parse(frontmatter.publishDate, "MMMM d, yyyy", /* @__PURE__ */ new Date()),
      featuredImage: frontmatter.featuredImage,
      excerpt: frontmatter.excerpt,
      href: url
    })).sort((a, b) => {
      if (isBefore(a.publishDate, b.publishDate)) return 1;
      if (isBefore(b.publishDate, a.publishDate)) return -1;
      return 0;
    })
  );
  const seo = {
    title: "Dr. Chima Amadi | Articles",
    description: "Articles about Dr. Chima Amadi"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-5tznm7mj": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="pb-10 lg:px-6" data-astro-cid-5tznm7mj> <section class="blog-posts-list__section px-4" data-astro-cid-5tznm7mj> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-5tznm7mj": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-[1px]" data-astro-cid-5tznm7mj>
Articles
</h2>` })} ${renderComponent($$result3, "BlogPostsList", $$BlogPostsList, { "posts": posts, "data-astro-cid-5tznm7mj": true })} </section> </div> ` })} ` })} `;
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
