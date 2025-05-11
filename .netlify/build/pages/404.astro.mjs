/* empty css                                                */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Button } from '../chunks/BaseLayout_7RIAZE-k.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    description: "Not found",
    title: "404"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-10 text-center sm:px-6 lg:px-8"> <h1 class="block text-7xl font-bold sm:text-9xl">404</h1> <p class="mt-3 text-muted-foreground">Oops, something went wrong.</p> <p class="text-lg">Sorry, we couldn't find your page.</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Back to home", "href": "/", "style": "ahead", "class": "mt-5" })} </div> ` })}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/pages/404.astro", void 0);

const $$file = "D:/1大学学习/blog/astro-theme-pure-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
