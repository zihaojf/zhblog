/* empty css                                                */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate, s as spreadAttributes } from '../chunks/astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { j as $$Comment } from '../chunks/PFSearch_CQVHJdVn.mjs';
import { b as $$Icon, c as cn, f as $$Svg, g as $$Timeline } from '../chunks/BaseLayout_7RIAZE-k.mjs';
import { $ as $$CommonPage } from '../chunks/CommonPage_ib1AuREx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://astro-pure.js.org");
const $$Substats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Substats;
  const { stats } = Astro2.props;
  async function fetchCount(item) {
    if (!item.api) return;
    try {
      const response = await fetch(`https://api.swo.moe/stats/${item.api}`);
      const data = await response.json();
      if (data.failed) {
        throw new Error(data.message);
      } else {
        item.count = data.count;
      }
    } catch (error) {
      console.error("Error in Substatus fetching: " + error);
    }
  }
  await Promise.all(stats.map(fetchCount));
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-3 rounded-xl border p-2 sm:grid-cols-2 sm:p-3"> ${stats.map(({ link, platform, icon, color, count, text }) => renderTemplate`<a class="group text-muted-foreground no-underline"${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer"> <div class="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 transition-all hover:border-border hover:bg-muted"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "color": color })}`} <div class="flex-1 text-foreground transition-colors group-hover:text-primary"> ${platform} </div> ${count ? renderTemplate`<div class="flex items-center gap-1.5"> <samp>${count}</samp> <span class="text-sm font-normal">${text}</span> </div>` : "null"} </div> </a>`)} </div> <div class="mt-2 text-right text-sm">
Display real-time; powered by <a class="text-muted-foreground" href="http://github.com/spencerwooo/substats" target="_blank" rel="noopener noreferrer">Substats</a> </div>`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/components/about/Substats.astro", void 0);

const $$Astro$1 = createAstro("https://astro-pure.js.org");
const $$ToolSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ToolSection;
  const { class: className, title, tools, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("not-prose flex flex-col rounded-xl border py-3 px-3 gap-y-3 sm:gap-y-4", className), "class")}${spreadAttributes(props)}> <div class="m-0 px-2 text-lg font-medium">${title}</div> <div class="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2"> ${tools.map((tool) => renderTemplate`<a class="group relative text-sm leading-normal no-underline"${addAttribute(tool.href, "href")}${addAttribute(tool.name, "id")} target="_blank"> <div class="flex items-center gap-x-3 rounded-lg border border-transparent px-1.5 py-1 transition-colors hover:border-border hover:bg-muted"> ${renderComponent($$result, "Svg", $$Svg, { "src": tool.icon, "class": "size-10 rounded-lg bg-primary-foreground fill-foreground p-2" })} <div class="z-20 flex flex-col"> <div class="font-medium text-foreground">${tool.name}</div> <div class="font-normal">${tool.description}</div> </div> </div> </a>`)} </div> </div>`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/components/about/ToolSection.astro", void 0);

const $$Astro = createAstro("https://astro-pure.js.org");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const headings = [
    { depth: 2, slug: "hobbies", text: "Hobbies" },
    { depth: 2, slug: "tools", text: "Tools" },
    { depth: 2, slug: "social-networks", text: "Social Networks" },
    // { depth: 2, slug: 'gossips', text: 'Gossips' },
    { depth: 2, slug: "about-blog", text: "About Blog" }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$CommonPage, { "title": "About", "headings": headings, "info": "/about" }, { "bottom": ($$result2) => renderTemplate`${renderComponent($$result2, "Comment", $$Comment, { "slot": "bottom" })}`, "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Developer / Designer</p> <p>
🎓 计算机大类在读｜🚀 算法小菜鸡<del>努力升级中</del>｜
    🧠 虽然还在学习算法，但热爱思考与挑战｜
    🎮 欧卡2（Euro Truck Simulator 2）10年老司机｜
    📚 目标：写出优雅代码，跑赢TLE，冲击AC！
</p>    <h2 id="tools">Tools</h2> <p>下面是我正在使用的工具:</p> ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Productivity", "tools": [
    {
      name: "Edge",
      description: "Broswer",
      href: "https://www.microsoft.com/zh-cn/edge",
      icon: import('../chunks/edge_H8n9i0lq.mjs')
    },
    {
      name: "Typora",
      description: "Markdown Editor",
      href: "https://typora.io/",
      icon: import('../chunks/typora_rznx-4TN.mjs')
    },
    {
      name: "Obsidian",
      description: "Note Taking",
      href: "https://obsidian.md/",
      icon: import('../chunks/obsidian_DTLpFTH3.mjs')
    },
    {
      name: "OneNote",
      description: "Note Taking",
      href: "https://www.onenote.com/",
      icon: import('../chunks/onenote_DHKYbc91.mjs')
    }
  ] })} ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Development", "tools": [
    {
      name: "VS Code",
      description: "IDE",
      href: "https://code.visualstudio.com/",
      icon: import('../chunks/vscode_RrzjPKQS.mjs')
    },
    {
      name: "Sublime Text",
      description: "IDE",
      href: "https://www.sublimetext.com/",
      icon: import('../chunks/sublime_C_2FzY6q.mjs')
    },
    {
      name: "Pycharm",
      description: "IDE",
      href: "https://www.jetbrains.com.cn/pycharm/",
      icon: import('../chunks/pycharm_CSP68C7E.mjs')
    },
    {
      name: "ChatGPT",
      description: "AI",
      href: "https://chatgpt.com/",
      icon: import('../chunks/chatgpt_r_JZcElK.mjs')
    }
  ] })} ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Design", "tools": [
    {
      name: "Photoshop",
      description: "Picture Editing",
      href: "https://www.adobe.com/products/photoshop",
      icon: import('../chunks/photoshop_BlMUeF9e.mjs')
    },
    {
      name: "Audition",
      description: "Sound Processing",
      href: "https://www.adobe.com/products/audition",
      icon: import('../chunks/audition_BH4n3nmN.mjs')
    },
    {
      name: "After Effects",
      description: "Motion Graphics",
      href: "https://www.adobe.com/products/aftereffects",
      icon: import('../chunks/aftereffects_Cvu-_GFX.mjs')
    },
    {
      name: "Premiere Pro",
      description: "Video Editing",
      href: "https://www.adobe.com/products/premiere",
      icon: import('../chunks/premiere_BUHLHv1x.mjs')
    }
  ] })} ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Environment", "tools": [
    {
      name: "Ubuntu 24.04 LTS",
      description: "WSL - Linux Distribution",
      href: "https://ubuntu.com/",
      icon: import('../chunks/ubuntu_iMPWn6HF.mjs')
    },
    {
      name: "Windows 11",
      description: "\u5929\u90095pro",
      href: "https://news.microsoft.com/windows11-general-availability/",
      icon: import('../chunks/windows11_CCF29cKn.mjs')
    }
  ] })} <h2 id="social-networks">Social Networks</h2> <p>
你可以在下面的平台找到我：
</p> ${renderComponent($$result2, "Substats", $$Substats, { "stats": [
    {
      platform: "GitHub",
      icon: "github",
      link: "https://github.com/zihaojf",
      text: "followers",
      api: "github/zihaojf"
    },
    {
      platform: "Bilibili",
      icon: "bilibili",
      color: "#2ca5e0",
      link: "https://space.bilibili.com/88163630",
      text: "followers",
      api: "bilibili/88163630"
    },
    {
      platform: "Steam",
      icon: "steam",
      color: "#50769d",
      link: "https://steamcommunity.com/profiles/76561198335050921/",
      text: "games",
      api: "steamgames/76561198335050921"
    }
  ] })}  <h2 id="about-blog">About Blog</h2> <p>Website history:</p> ${renderComponent($$result2, "Timeline", $$Timeline, { "events": [
    {
      date: "2025-05-11",
      content: "\u535A\u5BA2\u67B6\u6784\u8F6C\u4E3AAstro"
    },
    {
      date: "2025-02-17",
      content: "\u535A\u5BA2\u4E0A\u7EBF"
    }
  ] })} <p>
网站服务支持：
</p> <ul> <li>域名: <a href="#" target="_blank">Vercel</a></li> <li>
框架 & 主题: <a href="https://astro.build/" target="_blank">Astro</a> + <a href="https://github.com/cworld1/astro-theme-pure" target="_blank">Astro Theme Pure</a> </li> <li>评论系统: <a href="https://waline.js.org" target="_blank">Waline</a></li> <li>
访问次数: <a href="https://supabase.com/" target="_blank">Supabase</a> +
<a href="https://waline.js.org/" target="_blank">Waline</a> </li> <li>
粉丝数统计: <a href="https://github.com/spencerwooo/substats" target="_blank">Substats</a> </li> </ul>  ` })}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/pages/about/index.astro", void 0);

const $$file = "D:/1大学学习/blog/astro-theme-pure-main/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
