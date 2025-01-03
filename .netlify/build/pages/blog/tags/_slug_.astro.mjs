import '../../../chunks/page-ssr_C1XCyQoh.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_BSuU5-Gf.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../../chunks/Page_CSlaaEtl.mjs';
import { $ as $$Container } from '../../../chunks/Logo_BGCn34SM.mjs';
import { g as generateTagData } from '../../../chunks/helpers_CRdKBoFS.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://odyssey-theme.sapling.supply/");
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/consider-hybrid-work.mdx": () => import('../../../chunks/consider-hybrid-work_CuGWt5CP.mjs').then(n => n._),"../posts/odyssey-theme-officially-released.mdx": () => import('../../../chunks/odyssey-theme-officially-released_f6CG14TK.mjs').then(n => n._),"../posts/remote-work-mental-health.mdx": () => import('../../../chunks/remote-work-mental-health_D8XqqBy0.mjs').then(n => n._)}), () => "../posts/*.mdx");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());
  const allCategoriesUnique = /* @__PURE__ */ new Set();
  sortedPosts.forEach((post) => {
    post.frontmatter.tags && post.frontmatter.tags.map((tag) => {
      allCategoriesUnique.add(tag);
    });
  });
  const allCategoriesData = generateTagData(allCategoriesUnique);
  return allCategoriesData.map((tag) => {
    const posts = sortedPosts.filter((post) => post.frontmatter.tags.includes(tag.title));
    return {
      params: { slug: tag.slug },
      props: {
        tag: tag.title,
        posts
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { tag, posts } = Astro2.props;
  const seo = {
    title: `${tag} | Astro Odyssey`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-5igcag46": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "narrow": true, "data-astro-cid-5igcag46": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="tag-page__section" data-astro-cid-5igcag46> <h1 data-astro-cid-5igcag46>Posts Tagged with "${tag}"</h1> <ul data-astro-cid-5igcag46> ${posts.map((post) => renderTemplate`<li data-astro-cid-5igcag46><a${addAttribute(post.url, "href")} data-astro-cid-5igcag46>${post.frontmatter.title}</a></li>`)} </ul> </section> ` })} ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/blog/tags/[slug].astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/blog/tags/[slug].astro";
const $$url = "/blog/tags/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
