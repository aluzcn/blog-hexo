---
title: 测试allmd
date: 2026-09-11 12:27
tags:
- hexo
categories: []
---

这个 all.md 不需要通过某个文件调用吗

不需要额外配置调用，Hexo 自带这套规则，我简单讲清楚原理：

### 1. source/all.md 是独立页面

只要你在 `source/` 下面放 `all.md`，frontmatter 写了 `layout: page`，Hexo**自动生成 `/all` 页面**，不需要别的文件引入、调用。

```
---
title: 全部文章
layout: page
---
内容写在这里
```

访问路径就是 `/all`。

> 
> Hexo 生成逻辑：`source/xxx.md` → 网站 `/xxx`。

### 2. 为什么会覆盖你原来旧的 /all？

Hexo 优先级：**source 目录的页面 > 主题自带归档页面**
当你新建 `source/all.md`，访问 `/all` 就**优先渲染这个 md 里写的代码**，不再调用主题自带的归档模板，原来那个会被直接屏蔽，刚好解决重复列表的问题。

### 3. 模板变量 `site.posts` 怎么来的？

```
{% for post in site.posts %}
```

`site.posts` 是 Hexo 全局内置变量，**不需要额外引入**，在 page 页面里可以直接使用，只要主题支持 nunjucks 语法（绝大多数 Hexo 主题都支持）。

## ⚠️唯一小坑

极少数极简主题会**禁用页面内直接渲染 nunjucks 代码**，如果出现：页面直接原样显示`{% for post...%}`代码文本，而不是渲染成文章列表。
👉 解决：需要在主题配置开启 `page.nunjucks` 或者开启页面内模板渲染。