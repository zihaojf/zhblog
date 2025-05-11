import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "cloud"
  },
  cloud: {
    project: "xxxxx/xxxxx"
    //这里去keystatic cloud新建项目，复制项目里面的内容，作用：身份验证才能发布文章
  },
  ui: {
    brand: {
      name: "XingLuo' Dash Board"
      // BrandMark: 'https://pic.en.icu/Xingluo.webp',
    },
    navigation: [
      "---",
      "posts_pic",
      "posts_nopic"
    ]
  },
  collections: {
    posts_pic: collection({
      label: "含首图Posts",
      slugField: "title",
      entryLayout: "content",
      path: "src/content/post/*/",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "标题" },
          slug: {
            label: "对 SEO 友好的 slug",
            description: "这将定义此条目的文件/文件夹名称"
          }
        }),
        description: fields.text({
          label: "描述",
          description: "15个字以上"
        }),
        publishDate: fields.date({
          label: "发布时间",
          description: "The publishDate of the event"
        }),
        tags: fields.array(
          fields.text({ label: "类目" }),
          {
            label: "标签",
            itemLabel: (props) => props.value
          }
        ),
        coverImage: fields.object({
          src: fields.text({ label: "头图" }),
          color: fields.text({ label: "主题颜色 #xxxxxx 可以在该网站查询https://www.codeeeee.com/color/picker.html" })
          //   color: fields.text({ label: 'Image Color' }),
        }),
        language: fields.text({
          label: "语言",
          description: "languages"
        }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
          options: {
            image: {
              directory: "src/content/postimg",
              // Use the @assets path alias
              publicPath: "src/content/postimg/"
            }
          }
        })
      }
    }),
    posts_nopic: collection({
      label: "无首图Posts",
      slugField: "title",
      entryLayout: "content",
      path: "src/content/post/*/",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "标题" },
          slug: {
            label: "对 SEO 友好的 slug",
            description: "这将定义此条目的文件/文件夹名称"
          }
        }),
        description: fields.text({
          label: "描述",
          description: "15个字以上"
        }),
        publishDate: fields.date({
          label: "发布时间",
          description: "The publishDate of the event"
        }),
        tags: fields.array(
          fields.text({ label: "类目" }),
          {
            label: "标签",
            itemLabel: (props) => props.value
          }
        ),
        language: fields.text({
          label: "Languages",
          description: "languages"
        }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
          options: {
            image: {
              directory: "src/content/postimg",
              // Use the @assets path alias
              publicPath: "src/content/postimg/"
            }
          }
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
