import '../chunks/page-ssr_CMqITo4_.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C-Sf_0IX.mjs';
import 'kleur/colors';
import { $ as $$Container, e as $$BlogPostsList } from '../chunks/Logo_BoHxFp4f.mjs';
import { $ as $$Page } from '../chunks/Page_y_a9vCOe.mjs';
import { $ as $$Heading } from '../chunks/Heading_BIpVdQ_3.mjs';
import { b as articles } from '../chunks/sanity-utils_CIA4ddue.mjs';
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
    title: "Dr. Chima Amadi",
    description: "Articles about Dr. Chima Amadi",
    openGraph: {
      title: "Dr. Chima Amadi | Articles",
      description: "Articles about Dr. Chima Amadi",
      image: "/images/home/chima-amadi-2.webp",
      author: "Dr. Chima Amadi"
    },
    twitter: {
      card: "summary_large_image",
      title: "Dr. Chima Amadi",
      description: "Articles about Dr. Chima Amadi",
      image: "/images/home/chima-amadi-2.webp"
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Articles about Dr. Chima Amadi",
      image: "/images/home/chima-amadi-2.webp",
      author: {
        "@type": "Person",
        name: "Dr. Chima Amadi"
      }
    }
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
