import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot, e as addAttribute } from './astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { b as $$BackToTop } from './PFSearch_CQVHJdVn.mjs';
import { $ as $$BaseLayout, a as $$Button, c as cn, i as integ } from './BaseLayout_7RIAZE-k.mjs';

const $$Astro = createAstro("https://astro-pure.js.org");
const $$ContentLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { meta, highlightColor, back = "/", ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta, "highlightColor": highlightColor, ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": back, "style": "back" })} ${maybeRenderHead()}<main class="mt-6 items-start gap-x-10 md:flex">  <aside class="animate top-20 min-w-48 basis-60 overflow-y-scroll max-md:hidden md:sticky md:order-2 lg:shrink-0" style="height:calc(100vh - 7rem);" id="sidebar"> ${renderSlot($$result2, $$slots["sidebar"])} </aside> <article class="min-w-0 grow">  <div id="content-header" class="animate"> ${renderSlot($$result2, $$slots["header"])} </div>  <div id="content"${addAttribute(cn("max-w-none animate mt-8 md:min-w-[45ch]", integ.typography.class), "class")}> ${renderSlot($$result2, $$slots["default"])} </div> </article> </main> <div class="bottom mt-6 items-start gap-x-10 md:flex">  <div class="mt-8 flex-1 text-muted-foreground md:min-w-[50ch]"> ${renderSlot($$result2, $$slots["bottom"])} </div> <div class="min-w-48 basis-60"> ${renderSlot($$result2, $$slots["bottom-sidebar"])} </div> </div> ${renderComponent($$result2, "BackToTop", $$BackToTop, { "header": "content-header", "content": "content" })} ` })}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/layouts/ContentLayout.astro", void 0);

export { $$ContentLayout as $ };
