import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, g as renderSlot } from './astro/server_C-Sf_0IX.mjs';
import 'kleur/colors';
import { $ as $$Container } from './Logo_BoHxFp4f.mjs';
import { $ as $$Page } from './Page_y_a9vCOe.mjs';
/* empty css                                        */

function generateSlug(string) {
	return string
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

function generateTagData(categories) {
	let categoryData = [];
	categories.forEach(category => {
		categoryData.push({
			title: category,
			slug: `${generateSlug(category)}`,
		});
	});
	return categoryData;
}

const $$Astro = createAstro("https://chimaamadi.cv");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const {
    content: {
      title,
      description,
      publishDate,
      canonicalURL,
      featuredImage,
      tags
    }
  } = Astro2.props;
  let allTagsData = [];
  if (tags && tags.length > 0) {
    allTagsData = generateTagData(tags);
  }
  const seo = {
    title,
    description,
    publishDate,
    canonicalURL,
    image: featuredImage
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-gvpn4u4b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="post-header__container" data-astro-cid-gvpn4u4b> <ul class="post-tags__list" data-astro-cid-gvpn4u4b> ${allTagsData.map((tag) => renderTemplate`<li class="post-tags__tag" data-astro-cid-gvpn4u4b> <a${addAttribute(`/blog/tags/${tag.slug}`, "href")} data-astro-cid-gvpn4u4b>${tag.title}</a> </li>`)} </ul> <h2 data-astro-cid-gvpn4u4b>${title}</h2> <p class="post-layout__date" data-astro-cid-gvpn4u4b> <time data-astro-cid-gvpn4u4b><em data-astro-cid-gvpn4u4b>${publishDate}</em></time> </p> ${featuredImage && renderTemplate`<img class="post-layout__img"${addAttribute(featuredImage, "src")}${addAttribute(title, "alt")} data-astro-cid-gvpn4u4b>`} </div> ${renderComponent($$result2, "Container", $$Container, { "narrow": true, "data-astro-cid-gvpn4u4b": true }, { "default": ($$result3) => renderTemplate` <article id="article" data-astro-cid-gvpn4u4b> ${renderSlot($$result3, $$slots["default"])} </article> ` })} ` })} `;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/layouts/Post.astro", void 0);

export { $$Post as $ };
