/* empty css                                                */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, r as renderComponent, b as renderTemplate, f as defineScriptVars } from '../chunks/astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { $ as $$CommonPage } from '../chunks/CommonPage_ib1AuREx.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_M95deA3r.mjs';
import { c as cn, b as $$Icon, d as config } from '../chunks/BaseLayout_7RIAZE-k.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://astro-pure.js.org");
const $$ProjectSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const { class: className, project, ...props } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/projects/alex-tyson-2BAXJ7ha74s-unsplash.jpg": () => import('../chunks/alex-tyson-2BAXJ7ha74s-unsplash_DVdQaQbT.mjs'),"/src/assets/projects/angelica-teran-Bk9hpaXHK4o-unsplash.jpg": () => import('../chunks/angelica-teran-Bk9hpaXHK4o-unsplash__Cv1UBwX.mjs'),"/src/assets/projects/kseniia-zapiatkina-yATU3rg8tNI-unsplash.jpg": () => import('../chunks/kseniia-zapiatkina-yATU3rg8tNI-unsplash_q8AvUU_y.mjs'),"/src/assets/projects/wen-qiao-g_w8I64FiO0-unsplash.jpg": () => import('../chunks/wen-qiao-g_w8I64FiO0-unsplash_Lu14zEm2.mjs')

});
  const projectIconSet = {
    github: "github-circle",
    site: "earth",
    doc: "document",
    release: "package"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}${spreadAttributes(props)}> <div class="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4"> ${project.map((project2) => {
    var imagePath = null;
    if (project2.image) {
      imagePath = "/src/assets/projects/" + project2.image;
      if (!images[imagePath])
        throw new Error(
          `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif}"`
        );
    }
    return renderTemplate`<div class="relative overflow-hidden rounded-xl border"> ${imagePath && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "absolute end-0 z-0 m-0 h-full w-1/2 object-cover opacity-40", "src": images[imagePath](), "alt": project2.name, "loading": "lazy", "style": {
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      msMaskImage: "-ms-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      WebkitMaskImage: "-webkit-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
    } })}`} <div${addAttribute(cn(
      "relative z-10 flex flex-col gap-y-2 px-3 py-1.5 sm:px-4 sm:py-3",
      imagePath && "me-20"
    ), "class")}> <a class="line-clamp-1 font-medium text-foreground no-underline transition-colors"${addAttribute(project2.links[0].href, "href")} target="_blank"> ${project2.name} </a> <div class="line-clamp-2 leading-snug text-muted-foreground sm:h-12"> ${project2.description} </div> <div class="flex flex-row items-center gap-x-2 sm:gap-x-3"> ${project2.links.map((link) => {
      const icon = projectIconSet[link.type];
      return renderTemplate`<a${addAttribute(link.href, "href")} class="rounded-full bg-muted p-1 text-muted-foreground transition-colors sm:p-1.5"${addAttribute(link.type, "aria-label")} target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": icon })} </a>`;
    })} </div> </div> </div>`;
  })} </div> </div>`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/components/projects/ProjectSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-pure.js.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const headings = [
    { depth: 2, slug: "theme", text: "Theme" },
    { depth: 2, slug: "programs", text: "Programs" },
    { depth: 2, slug: "learnings", text: "Learnings" }
    // { depth: 2, slug: 'others', text: 'Others' },
    // { depth: 2, slug: 'gpg-signature', text: 'GPG Signature' },
    // { depth: 2, slug: 'sponsorship', text: 'Sponsorship' }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" data-astro-rerun>', "\n  const loadPageviewCount = async () => {\n    const pageview = await import(`${npmCDN}/@waline/client@v3/dist/pageview.js`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: window.location.pathname\n    })\n  }\n\n  await loadPageviewCount()\n<\/script>"], ["", ' <script type="module" data-astro-rerun>', "\n  const loadPageviewCount = async () => {\n    const pageview = await import(\\`\\${npmCDN}/@waline/client@v3/dist/pageview.js\\`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: window.location.pathname\n    })\n  }\n\n  await loadPageviewCount()\n<\/script>"])), renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Projects", "headings": headings, "info": { slug: "/projects", hideComment: true } }, { "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<h2 id="theme">Theme</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "\u{1F36D} Astro-theme-pure",
      description: "A simple, clean but powerful blog theme build by astro.",
      links: [
        { type: "github", href: "https://github.com/cworld1/astro-theme-pure" },
        { type: "site", href: "https://github.com/cworld1/astro-theme-pure" },
        {
          type: "doc",
          href: "https://github.com/cworld1/astro-theme-pure/blob/main/src/content/blog/customize/index.md"
        }
      ]
    }
  ] })} <h2 id="programs">Programs</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "\u{1F916} Zora - A Desktop Assistant",
      description: "Whu\u5927\u4E00\u9AD8\u7A0B\u671F\u672B\u5927\u4F5C\u4E1A",
      links: [
        { type: "github", href: "https://github.com/zihaojf/Zora" },
        { type: "site", href: "https://github.com/zihaojf/Zora" }
        // {
        //   type: 'doc',
        //   href: 'https://github.com/IJNKAWAKAZE/arknights_bot/blob/main/docs/Development.md'
        // }
      ]
    },
    {
      name: "\u{1F31F} Yifu-backend",
      description: "\u81EA\u5F3A\u5BD2\u5047\u65B0\u4EBA\u9879\u76EE-\u9A7F\u592B\u5145\u7535\u6869\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u540E\u7AEF",
      links: [
        { type: "github", href: "https://github.com/zihaojf/zq_yifu_backend" },
        { type: "site", href: "https://github.com/zihaojf/zq_yifu_backend" }
      ]
    }
  ] })}  <h2 id="learnings">Learnings</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "class": "my-2", "project": [
    {
      name: "CMU CS15213: CSAPP",
      description: "\u8BA1\u7B97\u673A\u7CFB\u7EDF\u57FA\u7840",
      links: [{ type: "site", href: "https://csapp.cs.cmu.edu/" }]
    },
    {
      name: "GAMES101",
      description: "\u56FE\u5F62\u5B66\u5165\u95E8\u516C\u5F00\u8BFE",
      links: [
        {
          type: "site",
          href: "https://sites.cs.ucsb.edu/~lingqi/teaching/games101.html"
        }
      ]
    }
  ] })}     ` }), defineScriptVars({ npmCDN: config.npmCDN, walineServer: config.integ.waline.server }));
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/pages/projects/index.astro", void 0);

const $$file = "D:/1大学学习/blog/astro-theme-pure-main/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
