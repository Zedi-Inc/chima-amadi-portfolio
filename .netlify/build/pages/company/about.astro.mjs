import '../../chunks/page-ssr_Do-0TkbW.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_a_9r0Ufn.mjs';
import 'kleur/colors';
import { f as $$TextSection } from '../../chunks/Logo_B-gdB_MZ.mjs';
import { $ as $$SectionTop } from '../../chunks/SectionTop_S2hxlu1E.mjs';
import { $ as $$Page } from '../../chunks/Page_DYZhNt29.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://chimaamadi.cv");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const seo = {
    title: "About | Astro Odyssey Theme",
    description: "About Page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTop", $$SectionTop, {}, { "image-container": ($$result3) => renderTemplate`${maybeRenderHead()}<picture> <img src="/assets/images/home/classic-hero.jpg" alt="Astro Odyssee" id="home-hero-image"> </picture>`, "text-container": ($$result3) => renderTemplate`<div> <h1>About Odyssey</h1> <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nisi
        recusandae? Quidem dignissimos nobis, dicta unde, aperiam voluptate
        autem iste reprehenderit, aliquam ducimus illo ea ipsum qui animi sequi.
        Numquam.
</p> </div>` })} ${renderComponent($$result2, "TextSection", $$TextSection, { "narrow": true }, { "default": ($$result3) => renderTemplate` <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
      asperiores alias illo accusamus voluptatem ea cum nemo odit! Consequatur
      quidem quo iusto quam ea neque nisi dolorum quod, recusandae id!
      Repudiandae, fugit labore voluptatum beatae modi omnis adipisci corrupti
      aut aliquid cumque inventore iure possimus doloremque iste incidunt nulla
      architecto. Nobis iusto sunt voluptatem necessitatibus laborum, earum
      doloremque fugit rerum!
</p> <p>
Fugit asperiores harum consectetur sapiente deleniti. Optio enim tenetur
      impedit reprehenderit labore, illo eius in, consequatur odio dolore iste
      assumenda explicabo, nisi similique qui obcaecati possimus delectus
      reiciendis quod modi.
</p> <p>
Vel tempore rem omnis esse officiis optio, explicabo, quod deleniti
      adipisci ullam cum necessitatibus eius minus vero saepe ad, dicta rerum
      praesentium deserunt illo itaque odio corrupti voluptatum quibusdam.
      Pariatur. Porro neque tempore, illum eligendi deleniti iure dolorem amet
      magnam at dolores veniam nemo cumque aut alias repellat est dicta sit
      repellendus facilis officia? Minima dolorum quo ducimus adipisci
      perferendis.
</p> <p>
Quis distinctio tempora sequi sit repudiandae cumque nostrum deserunt,
      voluptatibus rem eum fuga modi beatae cum ullam delectus dicta atque eius
      nam quos corporis. Animi praesentium quae nobis. Odit, mollitia.
      Voluptatum, hic explicabo. Ex accusamus ipsa ea dolor commodi quas esse
      ipsum alias et adipisci error necessitatibus atque facere rerum ratione
      consequatur aspernatur repudiandae minima consectetur fuga, doloremque
      dolorum pariatur. Ipsam error eaque velit possimus porro eum quod illo
      iusto officia magnam magni, beatae nisi voluptate praesentium? Saepe
      distinctio adipisci quas hic quae facilis? Sequi eum hic aperiam impedit
      minus?
</p> ` })} ` })}`;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/company/about.astro", void 0);

const $$file = "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/ZEDI-PROJECTS/chima-amadi-portfolio/src/pages/company/about.astro";
const $$url = "/company/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
