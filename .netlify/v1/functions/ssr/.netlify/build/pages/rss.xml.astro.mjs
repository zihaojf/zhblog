import { g as getImage } from '../chunks/_astro_assets_M95deA3r.mjs';
import rss from '@astrojs/rss';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { c as config } from '../chunks/_astro_content_CJKhTKM6.mjs';
import { s as sortMDByDate, g as getBlogCollection } from '../chunks/server_DEPWyd6l.mjs';
export { renderers } from '../renderers.mjs';

const imagesGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/C++期末复习/1.png": () => import('../chunks/1_Cj7Io2wP.mjs'),"/src/content/blog/C++期末复习/2.png": () => import('../chunks/2_PW9QgdkI.mjs'),"/src/content/blog/C++期末复习/3.png": () => import('../chunks/3_68vp9RRA.mjs'),"/src/content/blog/C++期末复习/4.png": () => import('../chunks/4_Ds33Yfe8.mjs'),"/src/content/blog/C++期末复习/5.png": () => import('../chunks/5_CuCsLNmh.mjs'),"/src/content/blog/C++期末复习/6.png": () => import('../chunks/6_B5rti70S.mjs'),"/src/content/blog/C++期末复习/7.png": () => import('../chunks/7_De76IfZa.mjs'),"/src/content/blog/C++期末复习/8.png": () => import('../chunks/8_BNcKsn5l.mjs'),"/src/content/blog/C++期末复习/9.png": () => import('../chunks/9_6dujjhRM.mjs'),"/src/content/blog/Games101/games101pa2-1.png": () => import('../chunks/games101pa2-1_CaP2ugpy.mjs')


});
const renderContent = async (post, site) => {
  function remarkReplaceImageLink() {
    return async function(tree) {
      const promises = [];
      visit(tree, "image", (node) => {
        if (node.url.startsWith("/images")) {
          node.url = `${site}${node.url.replace("/", "")}`;
        } else {
          const imagePathPrefix = `/src/content/blog/${post.id}/${node.url.replace("./", "")}`;
          const promise = imagesGlob[imagePathPrefix]?.().then(async (res) => {
            const imagePath = res?.default;
            if (imagePath) {
              node.url = `${site}${(await getImage({ src: imagePath })).src.replace("/", "")}`;
            }
          });
          if (promise) promises.push(promise);
        }
      });
      await Promise.all(promises);
    };
  }
  const file = await unified().use(remarkParse).use(remarkReplaceImageLink).use(remarkRehype).use(rehypeStringify).process(post.body);
  return String(file);
};
const GET = async (context) => {
  const allPostsByDate = sortMDByDate(await getBlogCollection());
  const siteUrl = context.site ?? new URL("https://astro-pure.js.org");
  return rss({
    // Basic configs
    trailingSlash: false,
    xmlns: { h: "http://www.w3.org/TR/html4/" },
    stylesheet: "/scripts/pretty-feed-v3.xsl",
    // Contents
    title: config.title,
    description: config.description,
    site: "https://astro-pure.js.org",
    items: await Promise.all(
      allPostsByDate.map(async (post) => ({
        pubDate: post.data.publishDate,
        link: `/blog/${post.id}`,
        customData: `<h:img src="${typeof post.data.heroImage?.src === "string" ? post.data.heroImage?.src : post.data.heroImage?.src.src}" />
          <enclosure url="${typeof post.data.heroImage?.src === "string" ? post.data.heroImage?.src : post.data.heroImage?.src.src}" />`,
        content: await renderContent(post, siteUrl),
        ...post.data
      }))
    )
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
