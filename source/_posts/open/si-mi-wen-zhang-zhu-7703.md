---
title: 私密文章注意事项
tags: []
categories: []
date: 2026-09-10 22:15:50
updated: 2026-09-10 22:15:50
---

我问： hexo new "公开文章标题" ，.md 生成在 source/_posts/ 要不要移动到 _post/public


答：**不是必须移动，但建议统一归类，方便管理。**
`hexo new "公开文章标题"` 默认生成：`source/_posts/标题.md`
Hexo **不管 md 放在 `_posts`根目录，还是 `_posts/public`子文件夹，都能正常识别渲染**，公开文章两种位置都可以正常展示。

## 方案 A（推荐，统一归类，公私分开）

先手动新建文件夹 `source/_posts/public`

- ✅ 公开文章：放到 `source/_posts/public/`
- ✅ 私密文章：放到 `source/_posts/private/`

> 
> 新建公开文章直接用这条命令，一步到位直接生成到 public 目录，不用手动移动：

```
hexo new --path public/文章标题 "文章标题"
```

> 
> 生成的 md 在 `source/_posts/public/文章标题.md`，**不需要写 hidden:true、不要加 private 标签**

## 方案 B（省事，不移动）

继续直接用

```
hexo new "标题"
```

md 留在 `source/_posts/` 根目录，**不移动到 public**，完全可以正常使用。

> 
> 缺点：时间久了，公开、私密 md 混在一起，不好分辨，上千篇文章找起来麻烦。

## 区分规则（重点！）

- 只要文章**没有 `hidden:true`，没有 `tags: [private]`** → 公开文章，首页、全部 页面都会显示，**不会加密**
- 只要文章带 `hidden:true` + `tags: [private]` → 私密文章，首页隐藏，all 页面带🔒，自动加密

## 建议

以后新建文章，直接区分两条命令：

1. 👉 **公开文章**：

```
hexo new --path public/标题 "标题"
```

2. 👉 **私密文章**：

```
hexo new --path private/标题 "标题"
```

这样自动分到两个文件夹，**不用手动剪切移动 md，目录干干净净**。

> 
> 补充：子文件夹 `public` 只是单纯用来**给你人工分类**，hexo 不会因为放在 public 文件夹自动判定公开，**判断公开 / 私密，只看文章 front-matter 的 `hidden:true` 和 `tags`**！ 
<br>

<div align="center"><img src="https://img.cyoy.cn/hexo/images/2026/09/1789050581716-01tey9vc.webp" alt="10hy" width="65%"></div>

