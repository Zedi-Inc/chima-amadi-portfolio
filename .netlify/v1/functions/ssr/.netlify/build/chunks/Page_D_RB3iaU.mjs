import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, g as renderSlot } from './astro/server_a_9r0Ufn.mjs';
import 'kleur/colors';
import { t as $$Footer, u as settings, q as $$Logo, v as $$Header, r as $$Base } from './Logo_BxMPVF_t.mjs';

const socials = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/chima-amadi',
    icon: "mdi:twitter",
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/chima-amadi',
    icon: "mdi:twitter",
  },
  {
    name: 'Youtube',
    url: 'https://youtube.com/chima-amadi',
    icon: "mdi:youtube",
  },
  {
    name: 'LinkedIn',
    url: 'https:/linkedin.com/chima-amadi',
    icon: "ic:baseline-discord",
  },
];

const footerLists = [
	{
		title: 'Landing Pages',
		items: [
			{
				title: 'Landing Page 1',
				slug: '/landing-pages/landing-1',
			},
			{
				title: 'Landing Page 2',
				slug: '/landing-pages/landing-2',
			},
      // {
			// 	title: 'Landing Page 3',
			// 	slug: '/landing-pages/landing-3',
			// },
		],
	},
	{
		title: 'Company',
		items: [
			{
				title: 'About',
				slug: '/company/about',
			},
			{
				title: 'Blog',
				slug: '/blog',
			},
			{
				title: 'Contact',
				slug: '/company/contact',
			},
		],
	},
	{
		title: 'Theme',
		items: [
			{
				title: 'Get Started',
				slug: '/theme/get-started',
			},
			{
				title: 'Style Guide',
				slug: '/theme/style-guide',
			},
      {
        title: 'Theme Setup',
        slug: '/theme/theme-setup',
      },
      {
        title: 'Customizing Odyssey',
        slug: '/theme/customizing-odyssey',
      }
		],
	},
];

const nav = [
	{
		title: 'About',
		slug: '/about',
	},
	{
		title: 'Articles',
		slug: '/blog',
	},
	{
		title: 'Gallery',
		slug: '/gallery',
	},
	{
		title: 'Wiki',
		slug: '/wiki',
	},
];

const $$Astro = createAstro("https://chimaamadi.cv");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Page;
  const { seo } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="page"> ${renderSlot($$result2, $$slots["default"])} </div>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "background": "var(--theme-surface-1)", "color": "var(--theme-on-surface-1)", "footerLists": footerLists, "~": true, "footerSocials": socials, "copyrightName": settings.name, "showPlug": settings.showPlug }, { "logo": ($$result3) => renderTemplate`${renderComponent($$result3, "Logo", $$Logo, { "slot": "logo" })}` })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "rightMenu": true, "navData": nav, "slot": "header" }, { "logo": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Logo", $$Logo, {})} </span>` })}` })}`;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/layouts/Page.astro", void 0);

export { $$Page as $ };
