import '../../chunks/page-ssr_fmdHnOdU.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_a_9r0Ufn.mjs';
import 'kleur/colors';
import { $ as $$Container, d as $$PortableText, c as $$Page } from '../../chunks/Page_DYwx_ung.mjs';
import { $ as $$Heading } from '../../chunks/Heading_dsUdEwPs.mjs';
import { b as articles } from '../../chunks/sanity-utils_DeNr6wu5.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://chimaamadi.cv");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const postId = Astro2.params.id;
  let articleContents = { data: [] };
  try {
    articleContents = await articles();
  } catch (error) {
    console.error("error", error);
  }
  let posts = articleContents?.data?.[0]?.articles ?? null;
  const filteredPost = posts?.find((post) => post?._key === postId);
  const getMetaDescription = (content) => {
    if (!content) return "";
    const plainText = content.filter((block) => block._type === "block").map(
      (block) => block.children?.map((child) => child.text).join(" ")
    ).join(" ");
    return plainText.slice(0, 155) + "...";
  };
  const seo = {
    title: `Dr. Chima Amadi | ${filteredPost?.title} `,
    description: getMetaDescription(filteredPost?.content) || `Read about ${filteredPost?.title} by Dr. Chima Amadi`,
    openGraph: {
      title: filteredPost?.title,
      description: getMetaDescription(filteredPost?.content),
      type: "article",
      image: filteredPost?.image || "/images/home/chima-amadi-2.webp",
      publishedTime: filteredPost?.createdAt,
      author: "Dr. Chima Amadi",
      article: {
        section: filteredPost?.title || "Articles",
        tags: [
          "Dr. Chima Amadi",
          "Articles",
          "Dr. Chima Matthew Amadi",
          "Mazi Gburugburu",
          "Chima Amadi"
        ]
      }
    },
    twitter: {
      card: "summary_large_image",
      title: filteredPost?.title,
      description: getMetaDescription(filteredPost?.content),
      image: filteredPost?.image || "/images/home/chima-amadi-2.webp"
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: filteredPost?.title,
      image: filteredPost?.image || "/images/home/chima-amadi-2.webp",
      author: {
        "@type": "Person",
        name: "Dr. Chima Amadi"
      },
      publisher: {
        "@type": "Person",
        name: "Dr. Chima Amadi"
      },
      datePublished: filteredPost?.createdAt,
      description: getMetaDescription(filteredPost?.content)
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-gsbvazvt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-gsbvazvt": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="pb-10 lg:px-6" data-astro-cid-gsbvazvt> <div class="blog-posts-list__section px-4" data-astro-cid-gsbvazvt> ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-gsbvazvt": true }, { "headingText": ($$result4) => renderTemplate`<h2 class="text-lg md:text-2xl font-medium tracking-normal md:tracking-[1px] leading-5" data-astro-cid-gsbvazvt> ${filteredPost?.title} </h2>` })} <div class="article-content" data-astro-cid-gsbvazvt> ${renderComponent($$result3, "PortableText", $$PortableText, { "portableText": filteredPost?.content, "data-astro-cid-gsbvazvt": true })} </div> <div data-astro-cid-gsbvazvt> ${renderComponent($$result3, "PortableText", $$PortableText, { "portableText": filteredPost?.image, "data-astro-cid-gsbvazvt": true })} </div> </div> <div class="px-4 mt-8" data-astro-cid-gsbvazvt> ${filteredPost?.createdAt && renderTemplate`<div class="flex items-center gap-2 mb-4 text-xs" data-astro-cid-gsbvazvt> <span class="font-medium" data-astro-cid-gsbvazvt>Date published:</span> <time${addAttribute(filteredPost.createdAt, "datetime")} class="text-gray-600 block" data-astro-cid-gsbvazvt> ${new Date(filteredPost.createdAt).toLocaleDateString()} </time> </div>`} <p class="text-xs" data-astro-cid-gsbvazvt> <span class="font-medium" data-astro-cid-gsbvazvt>Keywords:</span> <span class="text-gray-700" data-astro-cid-gsbvazvt>
Dr. Chima Amadi, Articles, Dr. Chima Matthew Amadi, Mazi Gburugburu,
						Chima Amadi</span> </p> </div> </article> ` })} ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/blog/[id].astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
