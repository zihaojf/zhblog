/* empty css                                                */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { e as $$PFSearch } from '../chunks/PFSearch_CQVHJdVn.mjs';
import { $ as $$BaseLayout, a as $$Button } from '../chunks/BaseLayout_7RIAZE-k.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    description: "Search relative posts of the whole blog",
    title: "Search"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "style": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Search</h1> </div> <div id="content" class="animate"> ${renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <p>Enter a search term or phrase to search the blog.</p> ${renderComponent($$result3, "PFSearch", $$PFSearch, {})} ` })}` } </div> </main> ` })}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/pages/search/index.astro", void 0);

const $$file = "D:/1大学学习/blog/astro-theme-pure-main/src/pages/search/index.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
