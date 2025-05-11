/* empty css                                                   */
import { a as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_ZtizFFe6.mjs';
import 'kleur/colors';
import { $ as $$IndividualPage } from '../../chunks/IndividualPage_CCNWWXgb.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<p>It may be recommended to generate policies from <a href=\"https://policymaker.io\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">PolicyMaker.io<span> ↗</span></a>.</p>";

				const frontmatter = {"layout":"@/layouts/IndividualPage.astro","title":"Copyright","description":"Effective date: 2024-11-26","language":"En","back":"/terms/list","minutesRead":"1 min read","words":8};
				const file = "D:/1大学学习/blog/astro-theme-pure-main/src/pages/terms/copyright.md";
				const url = "/terms/copyright";
				function rawContent() {
					return "   \n                                        \n\n                  \n                                         \n              \n                   \n   \n\nIt may be recommended to generate policies from [PolicyMaker.io](https://policymaker.io).\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$IndividualPage, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
