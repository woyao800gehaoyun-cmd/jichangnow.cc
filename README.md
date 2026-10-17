# 星链测评站

一个无需构建工具的静态中文博客，包含：

- 四家机场的首页对比与独立测评文章
- 光年梯、云图、瞬云的优惠码展示
- 四家机场的推广注册链接
- 79 款 AI 工具导航、分类筛选与搜索
- 梯子推荐与四篇独立测评
- 客户端教程与官方下载入口
- 流媒体测速、IP、DNS 和 WebRTC 检测工具
- 苹果 ID 安全使用指南
- 免费节点风险说明与低成本替代方案
- 关于我们和本地信息整理联系表单
- 桌面端与移动端响应式布局

## 本地预览

在项目目录启动任意静态文件服务器，例如：

```powershell
python -m http.server 4173
```

然后打开 `http://127.0.0.1:4173/`。

## 部署

整个目录可直接部署到 GitHub Pages、Cloudflare Pages、Vercel、Netlify 或普通静态主机，不需要安装依赖或执行构建命令。

如绑定正式域名，可再生成包含完整绝对网址的 `sitemap.xml`，并在 `robots.txt` 中添加对应地址。

## 发布新文章

博客首页、文章列表、分类、标签和月份归档都由 `posts.js` 自动生成。

发布新文章时，在 `window.BLOG_POSTS` 数组顶部新增一项：

```js
{
  slug: 'article-slug',
  title: '文章标题',
  category: '文章分类',
  date: '2026-10-16',
  displayDate: '2026年10月16日',
  readingTime: '6 分钟',
  excerpt: '文章摘要',
  tags: ['标签一', '标签二'],
  cover: 'cover-guide',
  mark: 'NEW',
  content: `<p>正文内容</p>`
}
```

如果文章已有独立 HTML 页面，可以不写 `content`，改为填写：

```js
href: 'reviews/example.html'
```

保存后，文章会自动按日期排序，无需手动修改首页。
