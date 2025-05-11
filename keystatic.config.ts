// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'xxxxx/xxxxx',//这里去keystatic cloud新建项目，复制项目里面的内容，作用：身份验证才能发布文章
  },

  ui: {
    brand: { 
      name: 'XingLuo\' Dash Board' ,
      // BrandMark: 'https://pic.en.icu/Xingluo.webp',
    },
    navigation: [
      '---',
      'posts_pic',
      'posts_nopic',
    ],

  },
  collections: {
    posts_pic: collection({
      label: '含首图Posts',
      slugField: 'title',
      entryLayout: "content",
      path: 'src/content/post/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { label: '标题' },
          slug: {
            label: '对 SEO 友好的 slug',
            description: '这将定义此条目的文件/文件夹名称'
          }
        }),
        description: fields.text({
          label: '描述',
          description: '15个字以上',
        }),
        publishDate: fields.date({
          label: '发布时间',
          description: 'The publishDate of the event'
        }),
        tags: fields.array(
          fields.text({ label: '类目' }),
          {
            label: '标签',
            itemLabel: props => props.value,
          }
        ),
        coverImage: fields.object({
          src: fields.text({ label: '头图' }),
          color: fields.text({ label: '主题颜色 #xxxxxx 可以在该网站查询https://www.codeeeee.com/color/picker.html' })
          //   color: fields.text({ label: 'Image Color' }),
        }),

        language: fields.text({
          label: '语言',
          description: 'languages',
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'src/content/postimg',

              // Use the @assets path alias
              publicPath: 'src/content/postimg/'

            }
          }
        })
      },
    }),




    posts_nopic: collection({
      label: '无首图Posts',
      slugField: 'title',
      entryLayout: "content",
      path: 'src/content/post/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { label: '标题' },
          slug: {
            label: '对 SEO 友好的 slug',
            description: '这将定义此条目的文件/文件夹名称'
          }
        }),
        description: fields.text({
          label: '描述',
          description: '15个字以上',
        }),
        publishDate: fields.date({
          label: '发布时间',
          description: 'The publishDate of the event'
        }),
        tags: fields.array(
          fields.text({ label: '类目' }),
          {
            label: '标签',
            itemLabel: props => props.value,
          }
        ),
        language: fields.text({
          label: 'Languages',
          description: 'languages',
        }),
        
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'src/content/postimg',

              // Use the @assets path alias
              publicPath: 'src/content/postimg/'

            }
          },
        })
      },
    }),
  },
});
