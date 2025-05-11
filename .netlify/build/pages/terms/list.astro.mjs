/* empty css                                                   */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Button, c as cn, i as integ, e as $$CardList, t as terms } from '../../chunks/BaseLayout_7RIAZE-k.mjs';
export { renderers } from '../../renderers.mjs';

const $$List = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Site policy",
    description: "Site policy documentation"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Site Policy</h1> </div> <div id="content"${addAttribute(cn("animate mt-8 max-w-none md:min-w-[45ch]", integ.typography.class), "class")}> <h2 class="text-xl font-medium">Site policy documentation</h2> ${renderComponent($$result2, "CardList", $$CardList, { ...terms })} <h2 class="text-xl font-medium">Help Infomation</h2> <p>You need to add md files in this directory.</p> </div> </main> ` })}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/pages/terms/list.astro", void 0);

const $$file = "D:/1大学学习/blog/astro-theme-pure-main/src/pages/terms/list.astro";
const $$url = "/terms/list";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$List,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
