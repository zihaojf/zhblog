/* empty css                                                */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderSlot, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_M95deA3r.mjs';
import { c as $$PostPreview, k as $$Quote } from '../chunks/PFSearch_CQVHJdVn.mjs';
import { g as getBlogCollection, s as sortMDByDate } from '../chunks/server_DEPWyd6l.mjs';
import { c as cn, a as $$Button, $ as $$BaseLayout, d as config, h as $$Label, b as $$Icon, j as $$Card } from '../chunks/BaseLayout_7RIAZE-k.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://astro-pure.js.org");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("flex flex-col gap-y-5 md:flex-row md:gap-y-0", className), "class")}> <div class="text-xl font-semibold md:min-w-36"> <h2>${title}</h2> </div> <div class="flex flex-1 flex-col gap-y-3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/components/home/Section.astro", void 0);

const $$Astro = createAstro("https://astro-pure.js.org");
const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"> <h3 class="w-1/5 font-medium">${title}</h3> <div class="flex flex-row flex-wrap gap-x-4 gap-y-2 md:w-4/5"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "style": "pill" })}`)} </div> </div>`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/components/home/SkillLayout.astro", void 0);

const avatar = new Proxy({"src":"/_astro/avatar.CEnwjGH8.png","width":2400,"height":2400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1大学学习/blog/astro-theme-pure-main/src/assets/avatar.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const language = ["C", "C++", "Python", "Html", "JavaScript", "CSS"];
  const tools = ["Linux", "Vim", "VsCode", "Git"];
  const design = ["Photoshop", "Premiere Pro"];
  const other = ["Markdown", "LaTeX"];
  const MAX_POSTS = 10;
  const allPosts = await getBlogCollection();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" }, "highlightColor": "#659EB9" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex w-full flex-col items-center"> <section class="animate mb-10 flex flex-col items-center gap-y-7" id="content-header"> ${renderComponent($$result2, "Image", $$Image, { "src": avatar, "alt": "profile", "class": "h-28 w-auto rounded-full border p-1", "loading": "eager" })} <div class="flex flex-col items-center gap-y-4"> <h1 class="text-3xl font-bold">${config.author}</h1> <div class="flex flex-wrap justify-center gap-x-7 gap-y-3"> ${renderComponent($$result2, "Label", $$Label, { "title": "China/Wuhan" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "location", "class": "size-5", "slot": "icon" })}` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Github", "as": "a", "href": "https://github.com/zihaojf", "target": "_blank" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "github", "class": "size-5", "slot": "icon" })}` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Bilibili", "as": "a", "href": "https://space.bilibili.com/88163630", "target": "_blank" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "bilibili", "class": "size-5", "slot": "icon" })}` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Steam", "as": "a", "href": "https://steamcommunity.com/profiles/76561198335050921/", "target": "_blank" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "steam", "class": "size-5", "slot": "icon" })}` })}</div> </div> <!-- {/* Get template */}
      <a
        href='https://github.com/cworld1/astro-theme-pure'
        target='_blank'
        class='flex flex-row items-center gap-x-3 rounded-full border bg-background px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md'
      >
        <span class='relative flex items-center justify-center'>
          <span
            class='absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75'
          ></span>
          <span class='size-2 rounded-full bg-green-400'></span>
        </span>
        <p class='font-medium text-muted-foreground'>Get Template</p>
      </a>
    </section> --> <div id="content" class="animate flex flex-col gap-y-10 md:w-4/5 lg:w-5/6"> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": async ($$result3) => renderTemplate` <p class="text-muted-foreground">Developer / Designer</p> <p class="text-muted-foreground">
🎓 计算机大类在读｜🚀 算法小菜鸡<del>努力升级中</del>｜
          🧠 虽然还在学习算法，但热爱思考与挑战｜
          🎮 欧卡2（Euro Truck Simulator 2）10年老司机｜
          📚 目标：写出优雅代码，跑赢TLE，冲击AC！
</p> ${renderComponent($$result3, "Button", $$Button, { "title": "More about me", "class": "w-fit self-end", "href": "/about", "style": "ahead" })} ` })} ${allPostsByDate.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "Posts" }, { "default": async ($$result3) => renderTemplate` <ul class="flex flex-col gap-y-1.5 sm:gap-y-2"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> ${renderComponent($$result3, "Button", $$Button, { "title": "More posts", "class": "w-fit self-end", "href": "/blog", "style": "ahead" })} ` })}`}  ${renderComponent($$result2, "Section", $$Section, { "title": "Education" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "as": "a", "heading": "\u6B66\u6C49\u5927\u5B66", "subheading": "\u8BA1\u7B97\u673A\u7C7B", "date": "August 2024 - Present", "href": "https://www.whu.edu.cn/", "srcpath": "images/whu.svg" }, {})} ` })} <!-- <Section title='Website List'>
        <div class='grid grid-cols-1 gap-3 sm:grid-cols-2'>
          <ProjectCard
            href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            heading='Lorem ipsum'
            subheading='dolor sit amet, oratio ornatus explicari pro ex'
            imagePath='/src/assets/projects/alex-tyson-2BAXJ7ha74s-unsplash.jpg'
          />
          <ProjectCard
            href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            heading='Lorem ipsum'
            subheading='dolor sit amet, oratio ornatus explicari pro ex'
            imagePath='/src/assets/projects/angelica-teran-Bk9hpaXHK4o-unsplash.jpg'
          />
          <ProjectCard
            href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            heading='Lorem ipsum'
            subheading='dolor sit amet, oratio ornatus explicari pro ex'
            imagePath='/src/assets/projects/kseniia-zapiatkina-yATU3rg8tNI-unsplash.jpg'
          />
          <ProjectCard
            href='/projects'
            heading='More projects'
            subheading='Check out more projects'
            imagePath='/src/assets/projects/wen-qiao-g_w8I64FiO0-unsplash.jpg'
          />
        </div>
      </Section> --> <!-- <Section title='Certifications'>
        <Card
          as='a'
          heading='Lorem ipsum'
          subheading='Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel, at eum oratio possit voluptatum. Dicat ceteros cu vim. Impetus fuisset ullamcorper pri cu, his posse iisque ad, aliquam honestatis usu id.'
          date='July 2024'
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        />
      </Section> --> ${renderComponent($$result2, "Section", $$Section, { "title": "Skills" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Language", "skills": language })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Tools", "skills": tools })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Design", "skills": design })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Other", "skills": other })} ` })} </div> ${renderComponent($$result2, "Quote", $$Quote, { "class": "mt-12" })} </section></main> ` })}`;
}, "D:/1\u5927\u5B66\u5B66\u4E60/blog/astro-theme-pure-main/src/pages/index.astro", void 0);

const $$file = "D:/1大学学习/blog/astro-theme-pure-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
