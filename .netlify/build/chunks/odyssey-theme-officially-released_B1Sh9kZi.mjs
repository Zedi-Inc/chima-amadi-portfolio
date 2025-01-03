import './page-ssr_CkBzZ5BF.mjs';
import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './astro/server_BSuU5-Gf.mjs';
import { $ as $$Post } from './Post_0AVC7P8D.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_C5uQ9hSb.mjs';
import './Logo_DQiqqeyw.mjs';
import 'clsx';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$Post, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../../layouts/Post.astro",
  "title": "Odyssey Theme Has Officially Been Released!",
  "description": "This is a sample blog post for Odyssey",
  "publishDate": "May 15, 2022",
  "featuredImage": "/assets/images/blog/odyssey-theme-officially-released/featured.jpg",
  "excerpt": "The time has come to officially release Odyssey Theme to the world. Learn more about what it is and how you can start using it today.",
  "tags": ["Odyssey Theme"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "getting-started",
    "text": "Getting Started"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", createVNode(_components.p, {
      children: ["To get started with the Odyssey Theme clone the ", createVNode(_components.a, {
        href: "https://gixthub.com/treefarmstudio/odyssey-theme",
        children: "Odyssey Theme Repository"
      }), " directly from GitHub ."]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/blog/posts/odyssey-theme-officially-released";
const file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/blog/posts/odyssey-theme-officially-released.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/blog/posts/odyssey-theme-officially-released.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
