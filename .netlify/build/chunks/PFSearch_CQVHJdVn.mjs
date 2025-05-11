import { c as createAstro, a as createComponent, r as renderComponent, p as renderScript, b as renderTemplate, m as maybeRenderHead, e as addAttribute, f as defineScriptVars, s as spreadAttributes, F as Fragment } from './astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_M95deA3r.mjs';
import 'clsx';
import { c as cn, b as $$Icon, k as getFormattedDate, l as $$FormattedDate, a as $$Button } from './BaseLayout_7RIAZE-k.mjs';
import { c as config, r as renderEntry } from './_astro_content_CJKhTKM6.mjs';
/* empty css                        */
import { parse } from 'node-html-parser';

const $$Astro$e = createAstro("https://astro-pure.js.org");
const $$Quote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Quote;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "quote-component", "quote-component", { "class": cn("not-prose inline-block", className) }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row items-center gap-x-3 rounded-full border px-4 py-2 text-sm shadow-sm"> <span class="relative flex items-center justify-center"> <span class="absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="size-2 rounded-full bg-green-400"></span> </span> <p id="quote-sentence" class="font-medium text-muted-foreground">Loading...</p> </div> ` })} ${renderScript($$result, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/advanced/Quote.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/advanced/Quote.astro", void 0);

const $$Astro$d = createAstro("https://astro-pure.js.org");
const $$GithubCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$GithubCard;
  const { repo: repoRaw } = Astro2.props;
  const repo = repoRaw.replace(/^https:\/\/github\.com\//, "");
  const [owner, repoName] = repo.split("/");
  return renderTemplate`${renderComponent($$result, "github-card", "github-card", { "class": "not-prose loading astro-fkh43kdv", "data-repo": repo }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`https://github.com/${repo}`, "href")} target="_blank" class="group block flex flex-col gap-y-2 rounded-xl border px-5 py-4 transition-colors hover:bg-muted hover:text-muted-foreground astro-fkh43kdv"> <div class="flex items-center justify-between astro-fkh43kdv"> <div class="flex items-center gap-x-2 text-foreground group-hover:text-primary astro-fkh43kdv"> <div id="gh-avatar" class="gh-text me-2 size-8 bg-cover astro-fkh43kdv" style="border-radius:999px"></div> <span class="text-lg transition-colors astro-fkh43kdv">${owner}</span> <span class="text-muted-foreground astro-fkh43kdv">/</span> <span class="text-lg font-bold transition-colors astro-fkh43kdv">${repoName}</span> </div> <div class="rounded-full bg-primary-foreground p-1 astro-fkh43kdv"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github", "class": "astro-fkh43kdv" })} </div> </div> <p id="gh-description" class="gh-text astro-fkh43kdv">Waiting for api.github.com...</p> <div class="flex items-center justify-between astro-fkh43kdv"> <div class="gh-text flex flex-wrap items-center gap-x-5 astro-fkh43kdv"> <div class="flex items-center gap-x-2 astro-fkh43kdv">  <!-- prettier-ignore --> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="astro-fkh43kdv"><g fill="none" fill-rule="evenodd" class="astro-fkh43kdv"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" class="astro-fkh43kdv"></path><path fill="currentColor" d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176zM12 4.987L9.687 8.959a1.25 1.25 0 0 1-.816.592l-4.492.973l3.062 3.427c.234.262.347.61.312.959l-.463 4.573l4.206-1.854a1.25 1.25 0 0 1 1.008 0l4.206 1.854l-.463-4.573a1.25 1.25 0 0 1 .311-.959l3.063-3.427l-4.492-.973a1.25 1.25 0 0 1-.816-.592z" class="astro-fkh43kdv"></path></g></svg> <span id="gh-stars" class="leading-tight astro-fkh43kdv">???</span> </div> <div class="flex items-center gap-x-2 astro-fkh43kdv">  <!-- prettier-ignore --> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="astro-fkh43kdv"><g fill="none" class="astro-fkh43kdv"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" class="astro-fkh43kdv"></path><path fill="currentColor" d="M18 3a3 3 0 0 1 1 5.83V9a4 4 0 0 1-4 4H9a2 2 0 0 0-2 2v.17a3.001 3.001 0 1 1-2 0V8.83a3.001 3.001 0 1 1 2 0v2.705A4 4 0 0 1 9 11h6a2 2 0 0 0 2-2v-.17A3.001 3.001 0 0 1 18 3M6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2" class="astro-fkh43kdv"></path></g></svg> <span id="gh-forks" class="leading-tight astro-fkh43kdv">???</span> </div> <div class="flex items-center gap-x-2 astro-fkh43kdv">  <!-- prettier-ignore --> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="astro-fkh43kdv"><g fill="none" fill-rule="evenodd" class="astro-fkh43kdv"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" class="astro-fkh43kdv"></path><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v1h.764a2 2 0 0 1 .894.211L16.236 6H20a1 1 0 1 1 0 2h-.382l2.276 4.553c.07.139.106.292.106.447a4 4 0 0 1-8 0c0-.155.036-.308.106-.447L16.382 8h-.146a2 2 0 0 1-.894-.211L13.764 7H13v12h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V7h-.764l-1.578.789A2 2 0 0 1 7.764 8h-.146l2.276 4.553A1 1 0 0 1 10 13a4 4 0 0 1-8 0a1 1 0 0 1 .106-.447L4.382 8H4a1 1 0 0 1 0-2h3.764l1.578-.789A2 2 0 0 1 10.236 5H11V4a1 1 0 0 1 1-1M6 9.236l-1.989 3.977a2 2 0 0 0 3.978 0zm12 0l-1.989 3.977a2 2 0 0 0 3.955.157l.023-.156z" class="astro-fkh43kdv"></path></g></svg> <span id="gh-license" class="leading-tight astro-fkh43kdv">???</span> </div> </div> <span id="gh-language" class="gh-text leading-tight astro-fkh43kdv">?????</span> </div> </a> ` })}  ${renderScript($$result, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/advanced/GithubCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/advanced/GithubCard.astro", void 0);

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value) this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey !== void 0) this.delete(firstKey);
    }
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const formatError = (...lines) => lines.join("\n         ");
makeSafeGetter((res) => res.json());
const safeGetDOM = makeSafeGetter(async (res) => parse.parse(await res.text()));
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
  const cache = new LRU(cacheSize);
  return async function safeGet2(url) {
    try {
      const cached = cache.get(url);
      if (cached) return cached;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          formatError(`Failed to fetch ${url}`, `Error ${response.status}: ${response.statusText}`)
        );
      const result = await handleResponse(response);
      cache.set(url, result);
      return result;
    } catch (e) {
      console.error(formatError(`[error] astro-embed`, e?.message ?? e, `URL: ${url}`));
      return void 0;
    }
  };
}
const getContent = (el) => el?.getAttribute("content");
const urlOrNull = (url) => url?.slice(0, 8) === "https://" ? url : null;
async function parseOpenGraph(pageUrl) {
  const html = await safeGetDOM(pageUrl);
  if (!html) return;
  const getMetaProperty = (prop) => getContent(html.querySelector(`meta[property=${JSON.stringify(prop)}]`));
  const getMetaName = (name) => getContent(html.querySelector(`meta[name=${JSON.stringify(name)}]`));
  const title = getMetaProperty("og:title") || html.querySelector("title")?.textContent;
  const description = getMetaProperty("og:description") || getMetaName("description");
  const image = urlOrNull(
    getMetaProperty("og:image:secure_url") || getMetaProperty("og:image:url") || getMetaProperty("og:image")
  );
  const imageAlt = getMetaProperty("og:image:alt");
  const video = urlOrNull(
    getMetaProperty("og:video:secure_url") || getMetaProperty("og:video:url") || getMetaProperty("og:video")
  );
  const videoType = getMetaProperty("og:video:type");
  const url = urlOrNull(
    getMetaProperty("og:url") || html.querySelector("link[rel='canonical']")?.getAttribute("href")
  ) || pageUrl;
  return { title, description, image, imageAlt, url, video, videoType };
}

const $$Astro$c = createAstro("https://astro-pure.js.org");
const $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$LinkPreview;
  const { href, hideMedia = false, zoomable = true } = Astro2.props;
  const meta = await parseOpenGraph(href);
  const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
  return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead()}<div class="not-prose link-preview-container my-2 flex justify-center sm:my-4 astro-fov3225h"><article${addAttribute([[
    "link-preview flex flex-col overflow-hidden rounded-lg border max-sm:max-w-sm sm:flex-row",
    {
      "link-preview--has-video max-sm:max-w-none sm:flex-col": !hideMedia && meta.video && meta.videoType,
      "link-preview--no-media": hideMedia || !(meta.video && meta.videoType || meta.image)
    }
  ], "astro-fov3225h"], "class:list")}>${hideMedia ? null : meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" class="astro-fov3225h"><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} class="astro-fov3225h"></video>` : meta.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": (cn("m-0 sm:max-w-60", zoomable && "zoomable") ?? "") + " astro-fov3225h", "src": meta.image, "alt": meta.imageAlt || "", "width": "1200", "height": "630" })}` : null}<a class="group font-normal text-muted-foreground no-underline hover:text-muted-foreground astro-fov3225h"${addAttribute(href, "href")} target="_blank"><div class="link-preview__content flex h-full flex-col gap-y-1 px-3 py-2 transition-colors group-hover:bg-muted sm:px-5 sm:py-4 astro-fov3225h"><header class="line-clamp-1 font-medium text-foreground transition-colors group-hover:text-primary astro-fov3225h">${meta.title}</header><p class="link-preview__description line-clamp-2 astro-fov3225h">${meta.description}${" "}${domain && renderTemplate`<small class="link-preview__domain ml-1 astro-fov3225h">(${domain})</small>`}</p></div></a></article></div>` : renderTemplate`<div class="link-preview link-preview--no-metadata astro-fov3225h"><a${addAttribute(href, "href")} target="_blank" class="astro-fov3225h">${href}</a></div>`}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/advanced/LinkPreview.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$b = createAstro("https://astro-pure.js.org");
const $$QRCode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$QRCode;
  const { content, class: className, ...props } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div id="qrcode-container"', "", "></div> <script", "><\/script> <script>(function(){", "\n  const renderContent = content ?? window.location.href\n  // Load qrcode\n  function loadqrcode(qrcodeContainer) {\n    if (!qrcodeContainer) throw new Error('qrcode container not found')\n    if (qrcodeContainer.innerHTML !== '') return\n    new QRCode(qrcodeContainer, renderContent)\n  }\n  const qrcodeContainer = document.getElementById('qrcode-container')\n  if (!qrcodeContainer) throw new Error('qrcode container not found')\n  loadqrcode(qrcodeContainer)\n})();<\/script>"])), maybeRenderHead(), addAttribute(className, "class"), spreadAttributes(props), addAttribute(`${config.npmCDN}/qrcodejs/qrcode.min.js`, "src"), defineScriptVars({ content }));
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/advanced/QRCode.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$a = createAstro("https://astro-pure.js.org");
const $$MediumZoom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MediumZoom;
  const { selector = config.integ.mediumZoom.selector, background = "hsl(var(--background) / 0.8)" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script", "><\/script> <script>(function(){", "\n  mediumZoom(selector, { background })\n})();<\/script> "])), addAttribute(`${config.npmCDN}/medium-zoom/dist/pure/medium-zoom.min.umd.js`, "src"), defineScriptVars({ selector, background }));
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/advanced/MediumZoom.astro", void 0);

const $$Astro$9 = createAstro("https://astro-pure.js.org");
const $$Comment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Comment;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "comment-component", "comment-component", { "class": "astro-ral5i6ka" }, { "default": () => renderTemplate`${maybeRenderHead()}<div id="waline"${addAttribute((cn("not-prose", className) ?? "") + " astro-ral5i6ka", "class")}>
Comment seems to stuck. Try to refresh?✨
</div>` })}`}${renderScript($$result, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/advanced/Comment.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/advanced/Comment.astro", void 0);

const $$Astro$8 = createAstro("https://astro-pure.js.org");
const $$ArticleBottom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ArticleBottom;
  const { id, collections, class: className } = Astro2.props;
  const path = Astro2.url.pathname.split("/").slice(0, -1).join("/");
  const index = collections.findIndex((x) => x.id === id);
  const prev = collections[index - 1];
  const next = collections[index + 1];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("flex max-sm:flex-col sm:justify-between gap-2", className), "class")}> <span class="min-w-0"> ${prev && renderTemplate`<a${addAttribute(`${path}/${prev.id}`, "href")} class="group inline-flex items-center gap-x-2 rounded-xl px-4 py-2 no-underline transition-colors duration-300 hover:bg-muted max-sm:max-w-[80%] sm:flex"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 rotate-180 stroke-muted-foreground transition-colors group-hover:stroke-primary"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"></polyline> </svg> <p class="truncate font-medium transition-colors">${prev.data.title}</p> </a>`} </span> <span class="min-w-0"> ${next && renderTemplate`<a${addAttribute(`${path}/${next.id}`, "href")} class="group inline-flex items-center gap-x-2 rounded-xl px-4 py-2 text-right no-underline transition-colors duration-300 hover:bg-muted max-sm:float-end max-sm:max-w-[80%] sm:flex"> <p class="truncate font-medium transition-colors">${next.data.title}</p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 stroke-muted-foreground transition-colors group-hover:stroke-primary"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"></polyline> </svg> </a>`} </span> </div>`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/ArticleBottom.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://astro-pure.js.org");
const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BackToTop;
  const { header: headerName, content: contentName, needPercent = true } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<button aria-label="Back to Top" class="z-90 group fixed bottom-8 end-4 flex h-10 w-10 translate-y-28 items-center justify-center rounded-full border-2 border-transparent bg-muted text-muted-foreground opacity-0 transition-all duration-300 hover:border-border/75 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 sm:end-8 sm:h-12 sm:w-12" data-show="false" id="to-top-btn"> <div class="absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center transition-opacity group-hover:opacity-0 group-[.ended]:opacity-0"> <span class="text">10</span> <span class="text-xs">%</span> </div> ', " </button> <script>(function(){", "\n  const scrollBtn = document.getElementById('to-top-btn')\n  const scrollPercentEl = scrollBtn.children[0].children[0]\n  const targetHeader = document.getElementById(headerName)\n  const articleElement = document.getElementById(contentName)\n\n  // scroll to top\n  function callback(entries) {\n    entries.forEach((entry) => {\n      // only show the scroll to top button when the heading is out of view\n      scrollBtn.dataset.show = (!entry.isIntersecting).toString()\n    })\n  }\n  scrollBtn.addEventListener('click', () => {\n    document.documentElement.scrollTo({ behavior: 'smooth', top: 0 })\n  })\n  if (targetHeader) {\n    const observer = new IntersectionObserver(callback)\n    observer.observe(targetHeader)\n  } else {\n    console.error(`Element with ID ${headerName} not found.`)\n  }\n\n  if (needPercent) {\n    // scroll percentage\n    const scrollHeight = articleElement.scrollHeight // total height\n    const articleTop = articleElement.offsetTop // article top\n    const clientHeight = document.documentElement.clientHeight // client height\n\n    function calculateScrollPercent() {\n      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop\n      if (scrollTop < articleTop) return\n      return Math.round(((scrollTop - articleTop) / (scrollHeight - clientHeight)) * 100)\n    }\n\n    document.addEventListener('scroll', () => {\n      const scrollPercent = calculateScrollPercent()\n      if (scrollPercent === undefined) return\n      scrollPercentEl.innerText = scrollPercent.toString()\n\n      // If percent is 100, percent won't need to show\n      scrollBtn.classList.toggle('ended', scrollPercent > 100)\n    })\n  } else {\n    scrollBtn.classList.add('ended')\n  }\n})();<\/script>"], ["", '<button aria-label="Back to Top" class="z-90 group fixed bottom-8 end-4 flex h-10 w-10 translate-y-28 items-center justify-center rounded-full border-2 border-transparent bg-muted text-muted-foreground opacity-0 transition-all duration-300 hover:border-border/75 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 sm:end-8 sm:h-12 sm:w-12" data-show="false" id="to-top-btn"> <div class="absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center transition-opacity group-hover:opacity-0 group-[.ended]:opacity-0"> <span class="text">10</span> <span class="text-xs">%</span> </div> ', " </button> <script>(function(){", "\n  const scrollBtn = document.getElementById('to-top-btn')\n  const scrollPercentEl = scrollBtn.children[0].children[0]\n  const targetHeader = document.getElementById(headerName)\n  const articleElement = document.getElementById(contentName)\n\n  // scroll to top\n  function callback(entries) {\n    entries.forEach((entry) => {\n      // only show the scroll to top button when the heading is out of view\n      scrollBtn.dataset.show = (!entry.isIntersecting).toString()\n    })\n  }\n  scrollBtn.addEventListener('click', () => {\n    document.documentElement.scrollTo({ behavior: 'smooth', top: 0 })\n  })\n  if (targetHeader) {\n    const observer = new IntersectionObserver(callback)\n    observer.observe(targetHeader)\n  } else {\n    console.error(\\`Element with ID \\${headerName} not found.\\`)\n  }\n\n  if (needPercent) {\n    // scroll percentage\n    const scrollHeight = articleElement.scrollHeight // total height\n    const articleTop = articleElement.offsetTop // article top\n    const clientHeight = document.documentElement.clientHeight // client height\n\n    function calculateScrollPercent() {\n      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop\n      if (scrollTop < articleTop) return\n      return Math.round(((scrollTop - articleTop) / (scrollHeight - clientHeight)) * 100)\n    }\n\n    document.addEventListener('scroll', () => {\n      const scrollPercent = calculateScrollPercent()\n      if (scrollPercent === undefined) return\n      scrollPercentEl.innerText = scrollPercent.toString()\n\n      // If percent is 100, percent won't need to show\n      scrollBtn.classList.toggle('ended', scrollPercent > 100)\n    })\n  } else {\n    scrollBtn.classList.add('ended')\n  }\n})();<\/script>"])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "up", "class": "opacity-0 transition-opacity group-hover:opacity-100 group-[.ended]:opacity-100" }), defineScriptVars({ headerName, contentName, needPercent }));
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/BackToTop.astro", void 0);

const $$Astro$6 = createAstro("https://astro-pure.js.org");
const $$Copyright = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Copyright;
  const {
    data: { heroImage, title, publishDate },
    class: className
  } = Astro2.props;
  const image = typeof heroImage?.src === "string" ? heroImage?.src : heroImage?.src?.src ?? "";
  const shares = {
    weibo: {
      link: `http://service.weibo.com/share/share.php?url=${Astro2.url}&title=${title}&pic=${image}`
    },
    x: {
      link: `https://x.com/intent/tweet?text='${title}'&url='${Astro2.url}'&via='${config.author}'`
    },
    bluesky: {
      link: `https://bsky.app/intent/compose?text=${title}%0A${Astro2.url}`
    }
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "relative flex flex-col gap-y-2 rounded-xl border px-3 sm:px-4 py-2 sm:py-3",
    className
  ), "class")}> ${renderComponent($$result, "Icon", $$Icon, { "class": "absolute end-4 top-4 size-20 opacity-10", "name": "copyright" })}  <div class="flex flex-col"> <div class="font-medium text-foreground">${title}</div> <div class="text-sm">${Astro2.url}</div> </div>  <div class="flex flex-row flex-wrap justify-start gap-x-5 gap-y-1 sm:gap-x-8"> <div class="flex gap-x-2 sm:flex-col"> <span>Author</span> <span class="text-sm text-foreground max-sm:place-self-center">${config.author}</span> </div> ${publishDate && renderTemplate`<div class="flex gap-x-2 sm:min-w-16 sm:flex-col"> <span>Published at</span> <span class="text-sm text-foreground max-sm:place-self-center"> ${getFormattedDate(publishDate, {
    month: "long"
  })} </span> </div>`} <div class="flex gap-x-2 sm:flex-col"> <span>Copyright</span> <a class="text-sm text-foreground max-sm:place-self-center" href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
CC BY-NC-SA 4.0
</a> </div> </div>  <div class="relative"> <div class="flex flex-row gap-3"> <button id="copy-link" class="group rounded-full bg-muted p-1 text-muted-foreground transition-colors hover:text-primary sm:p-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": "link" })} </button> <button id="get-qrcode" class="group rounded-full bg-muted p-1 text-muted-foreground transition-colors hover:text-primary sm:p-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": "qrcode" })} </button> ${config.content.share.map((share) => renderTemplate`<a${addAttribute(shares[share].link, "href")} target="_blank"${addAttribute(`share-${share}`, "id")} class="group rounded-full bg-muted p-1 text-muted-foreground transition-colors hover:text-primary sm:p-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": share })} </a>`)} </div> ${renderComponent($$result, "QRCode", $$QRCode, { "aria-expanded": "false", "class": "absolute z-10 -mt-2 box-content max-h-0 max-w-44 overflow-hidden rounded-xl border bg-muted p-4 opacity-0 transition-all duration-300 ease-in-out aria-expanded:max-h-44 aria-expanded:translate-y-4 aria-expanded:opacity-100" })} </div> </div> <div class="mx-6 rounded-b-xl border border-t-0 px-3 pb-1.5 pt-1 sm:mx-8 sm:px-4"> <a href="/projects#sponsorship" class="flex items-center justify-between text-muted-foreground no-underline" target="_blank"> <span>Buy me a cup of coffee ☕.</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "box-content size-5 p-1", "name": "receive-money" })} </a> </div> ${renderScript($$result, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/Copyright.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/Copyright.astro", void 0);

const $$Astro$5 = createAstro("https://astro-pure.js.org");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    data: {
      title,
      description,
      draft,
      heroImage,
      publishDate,
      updatedDate,
      comment: enableComment,
      tags,
      language
    },
    remarkPluginFrontmatter
  } = Astro2.props;
  const dateTimeOptions = {
    month: "short"
  };
  return renderTemplate`${heroImage && renderTemplate`${maybeRenderHead()}<div class="hero-image relative mb-6">${renderComponent($$result, "Image", $$Image, { "alt": heroImage.alt || title, "class": "cover-image relative z-10 h-auto w-full max-w-[65ch] rounded-2xl object-contain", "fetchpriority": "high", "loading": "eager", ...heroImage })}${renderComponent($$result, "Image", $$Image, { "alt": "Blur image", "fetchpriority": "high", "loading": "eager", "id": "blurImage", "class": "absolute end-0 top-4 z-0 mt-0 h-full max-w-[65ch] rounded-3xl opacity-60 blur-xl transition-opacity duration-300", ...heroImage })}</div>`}${draft ? renderTemplate`<span class="text-red-500">(Draft)</span>` : null}<div class="article-info max-lg:mx-auto"> <div class="flex flex-wrap gap-x-4 gap-y-2 text-xs leading-6 text-muted-foreground">  <div class="flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "calendar", "class": "size-5" })} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "font-sans", "date": publishDate, "dateTimeOptions": dateTimeOptions })} ${updatedDate && renderTemplate`<div class="flex items-center gap-1"> <span> / </span> <span>
Update
${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "font-sans", "date": updatedDate, "dateTimeOptions": dateTimeOptions })} </span> </div>`} </div>  <div class="flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "time", "class": "size-5" })} ${remarkPluginFrontmatter.minutesRead} </div> ${// Language
  language && renderTemplate`<span class="flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "earth", "class": "size-5" })} ${language} </span>`} ${// Tags
  !!tags?.length && renderTemplate`<span class="flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "hashtag", "class": "size-5" })} ${tags.map((tag, i) => renderTemplate`<div> <a${addAttribute(`View more blogs with the tag ${tag}`, "aria-label")} class="hover:underline hover:underline-offset-4" data-pagefind-filter="tag"${addAttribute(`/tags/${tag}`, "href")}> ${tag} </a> ${i < tags.length - 1 && "/"} </div>`)} </span>`} </div> <h1 class="mt-4 text-2xl font-medium sm:mb-2 sm:mt-6 sm:text-3xl"> ${title} </h1> <div class="mt-3 italic"> <blockquote class="text-sm text-muted-foreground"><q>${description}</q></blockquote> ${!draft && enableComment && renderTemplate`${renderComponent($$result, "PageInfo", $$PageInfo, { "class": "mt-1" })}`} </div> </div>  <div class="mt-4 w-1/2 border-t max-lg:mx-auto sm:mt-6 sm:w-1/3"></div> ${renderScript($$result, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/Hero.astro", void 0);

const $$Astro$4 = createAstro("https://astro-pure.js.org");
const $$PageInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PageInfo;
  const { class: className, hideComment, ...props } = Astro2.props;
  const path = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("text-base text-sm text-muted-foreground", className), "class")}${spreadAttributes(props)}> <span class="waline-pageview-count"${addAttribute(path, "data-path")}></span> views
${!hideComment && renderTemplate`<a href="#waline">
| <span class="waline-comment-count"${addAttribute(path, "data-path")}></span> comments
</a>`} </div>`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/PageInfo.astro", void 0);

const $$Astro$3 = createAstro("https://astro-pure.js.org");
const $$Paginator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { nextUrl, prevUrl } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<nav class="mt-4 flex items-center gap-x-4 sm:mt-6">${prevUrl && renderTemplate`<a class="me-auto py-2" data-astro-prefetch${addAttribute(prevUrl.url, "href")}>${prevUrl.srLabel && renderTemplate`<span class="sr-only">${prevUrl.srLabel}</span>`}${prevUrl.text ? prevUrl.text : "Previous"}</a>`}${nextUrl && renderTemplate`<a class="ms-auto py-2" data-astro-prefetch${addAttribute(nextUrl.url, "href")}>${nextUrl.srLabel && renderTemplate`<span class="sr-only">${nextUrl.srLabel}</span>`}${nextUrl.text ? nextUrl.text : "Next"}</a>`}</nav>`}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/Paginator.astro", void 0);

const $$Astro$2 = createAstro("https://astro-pure.js.org");
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { as: Tag = "div", post, detailed = false, class: className } = Astro2.props;
  const { id, data } = post;
  const { remarkPluginFrontmatter } = await renderEntry(post);
  const postDate = data.updatedDate ?? data.publishDate;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute((cn(
    "post-preview group/card flex flex-col relative rounded-2xl border bg-background transition-colors ease-in-out px-5 py-2.5 hover:bg-muted",
    detailed && "max-sm:px-4 sm:py-5",
    className
  ) ?? "") + " astro-yh2ne4rs", "class")}${addAttribute(detailed && data.heroImage?.color && `--preview-highlight:color-mix(in srgb,${data.heroImage.color} 40%,hsl(var(--foreground)/var(--un-text-opacity,1)));
    --preview-highlight-bg:hsl(from ${data.heroImage.color} h s l/20%)`, "style")}> <a${addAttribute((cn(
    "group/link w-full flex flex-col transition-all hover:text-primary",
    !detailed && "sm:flex-row",
    detailed && data.heroImage && "max-md:pt-24"
  ) ?? "") + " astro-yh2ne4rs", "class")}${addAttribute(`/blog/${id}`, "href")} data-astro-prefetch> ${detailed && data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "alt": data.heroImage.alt || data.title, "class": "cover-image absolute end-0 top-0 z-0 h-2/3 w-full rounded-2xl object-cover opacity-50 transition-opacity duration-300 group-hover/card:opacity-70 md:h-full md:w-3/5 astro-yh2ne4rs", "loading": "eager", ...data.heroImage })}`} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "min-w-[95px] py-1 text-xs astro-yh2ne4rs", "date": postDate })} ${renderComponent($$result, "Tag", Tag, { "class": "z-10 flex-grow astro-yh2ne4rs" }, { "default": async ($$result2) => renderTemplate`<div class="flex justify-between astro-yh2ne4rs"> <div${addAttribute(((detailed && "font-medium") ?? "") + " astro-yh2ne4rs", "class")}> ${data.draft && renderTemplate`<span class="text-red-500 astro-yh2ne4rs">(Draft) </span>`} ${data.title} </div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="preview-redirect my-1 stroke-muted-foreground group-hover/link:stroke-primary astro-yh2ne4rs"><line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover/link:translate-x-1 group-hover/link:scale-x-100 astro-yh2ne4rs"></line><polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover/link:translate-x-1 astro-yh2ne4rs"></polyline></svg> </div> ${detailed && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "class": "astro-yh2ne4rs" }, { "default": async ($$result3) => renderTemplate`<p${addAttribute((cn(
    "line-clamp-2 pt-1 text-sm text-muted-foreground sm:line-clamp-3",
    data.heroImage && "sm:me-24"
  ) ?? "") + " astro-yh2ne4rs", "class")}> ${data.description} </p> <div class="flex items-center gap-2 py-1.5 text-sm italic leading-4 text-muted-foreground sm:py-3 astro-yh2ne4rs">  <span class="flex items-center gap-1 astro-yh2ne4rs"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "time", "class": "size-4 astro-yh2ne4rs" })} ${remarkPluginFrontmatter.minutesRead} </span>  ${data.language && renderTemplate`<span class="flex items-center gap-1 astro-yh2ne4rs"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "earth", "class": "size-4 astro-yh2ne4rs" })} ${data.language} </span>`} </div> ` })}`}` })} </a> <!-- tags --> ${detailed && data.tags && renderTemplate`<ul class="tag-list mt-1 flex flex-wrap gap-2 astro-yh2ne4rs"> ${data.tags.map((tag) => renderTemplate`<li class="astro-yh2ne4rs"> ${renderComponent($$result, "Button", $$Button, { "title": tag, "href": `/tags/${tag}`, "style": "pill", "class": "astro-yh2ne4rs" })} </li>`)} </ul>`} </li> `;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/PostPreview.astro", void 0);

function diveChildren(item, depth) {
  if (depth === 1 || !item.subheadings.length) {
    return item.subheadings;
  } else {
    return diveChildren(item.subheadings[item.subheadings.length - 1], depth - 1);
  }
}
function generateToc(headings) {
  const bodyHeadings = [...headings.filter(({ depth }) => depth > 1)];
  const toc = [];
  bodyHeadings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      const lastItemInToc = toc[toc.length - 1];
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`);
      }
      const gap = heading.depth - lastItemInToc.depth;
      const target = diveChildren(lastItemInToc, gap);
      target.push(heading);
    }
  });
  return toc;
}

const $$Astro$1 = createAstro("https://astro-pure.js.org");
const $$TOCHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TOCHeading;
  const {
    heading: { depth, slug, subheadings, text }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <div class="relative"> <span class="absolute top-[5%] w-[2px] rounded transition-colors duration-300 [&.highlight-bg]:bg-primary [&.readed]:bg-input"></span> <a${addAttribute(`Scroll to section: ${text}`, "aria-label")}${addAttribute(cn(
    "line-clamp-2 px-3 py-1 ms-2 flex-1 text-foreground/75 transition-all hover:text-foreground [&.highlight]:font-medium [&.highlight]:text-primary [&.readed]:text-input [&.highlight-bg-translucent]:bg-muted",
    depth > 2 && "ps-7"
  ), "class")}${addAttribute(`#${slug}`, "href")}>${text}</a> </div> ${!!subheadings.length && renderTemplate`<ul> ${subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/TOCHeading.astro", void 0);

const $$Astro = createAstro("https://astro-pure.js.org");
const $$TOC = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TOC;
  const { headings, class: className, ...props } = Astro2.props;
  const toc = generateToc(headings);
  return renderTemplate`${renderComponent($$result, "toc-heading", "toc-heading", { "class": className, ...props }, { "default": () => renderTemplate` ${maybeRenderHead()}<h2 class="font-semibold">TABLE OF CONTENTS</h2> <ul class="mt-4 text-card-foreground"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TOCHeading", $$TOCHeading, { "heading": heading })}`)} </ul> ` })} ${renderScript($$result, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/TOC.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/TOC.astro", void 0);

const $$PFSearch = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "site-search", "site-search", { "class": "astro-574sfdxb" }, { "default": () => renderTemplate` ${maybeRenderHead()}<aside class="form my-4 astro-574sfdxb"> ${renderTemplate`<div id="site-search" class="astro-574sfdxb"></div>`} </aside> ` })} ${renderScript($$result, "D:/1大学学习/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/PFSearch.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/1大学学习/blog/astro-theme-pure-main/node_modules/astro-pure/components/pages/PFSearch.astro", void 0);

export { $$TOC as $, $$PageInfo as a, $$BackToTop as b, $$PostPreview as c, $$Paginator as d, $$PFSearch as e, $$MediumZoom as f, $$Hero as g, $$Copyright as h, $$ArticleBottom as i, $$Comment as j, $$Quote as k };
