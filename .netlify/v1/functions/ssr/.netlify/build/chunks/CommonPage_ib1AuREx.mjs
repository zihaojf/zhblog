import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead, d as renderSlot } from './astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { $ as $$TOC, a as $$PageInfo } from './PFSearch_CQVHJdVn.mjs';
import { $ as $$ContentLayout } from './ContentLayout_B1XCfq_D.mjs';

const $$Astro = createAstro("https://astro-pure.js.org");
const $$CommonPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CommonPage;
  const { title, headings, info, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$ContentLayout, { "meta": { title }, ...props }, { "bottom": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom"])}`, "bottom-sidebar": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom-sidebar"])}`, "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}   `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl"> ${title} </h1> ${info && renderTemplate`${renderComponent($$result3, "PageInfo", $$PageInfo, { "path": typeof info === "string" ? info : info.slug, "hideComment": typeof info === "object" && info.hideComment ? info.hideComment : false, "class": "italic" })}`}` })}`, "sidebar": ($$result2) => renderTemplate`${headings?.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "headings": headings, "slot": "sidebar" })}`}` })}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/layouts/CommonPage.astro", void 0);

export { $$CommonPage as $ };
