import { a as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot } from './astro/server_C-Sf_0IX.mjs';
import 'kleur/colors';
import 'clsx';

const $$Heading = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-2 mb-4"> <div class="w-[4px] h-full min-h-9 bg-red-800 flex items-center"></div> ${renderSlot($$result, $$slots["headingText"])} </div>`;
}, "C:/Users/Kingsley Akwa/Documents/web-dev/Jobs/chima-amadi-portfolio/src/components/sections/heros/Heading.astro", void 0);

export { $$Heading as $ };
