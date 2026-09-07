---
title: "Z4pro+ Docker搭建 flare 导航页"
date: 2025-12-27 20:27:00
cid: 1513
categories: [Nas]
tags: [极空间]
layout: post
---

极空间Docker搜索 soulteary/flare，下载latest 。
在Docker安装目录下新建 flare目录，其他配置如图：
![3619240268.webp](https://img.cyoy.cn/hexo/images/2025/12/3619240268.webp)
flare的装载路径为 /app

环境变量在默认的最上面两条下，添加以下4条：
FLARE_DISABLE_LOGIN=0
FLARE_USER=cyoy
FLARE_PASS=homecyj
FLARE_VISIBILITY=0

每一条意思如下图：
![1346635786.webp](https://img.cyoy.cn/hexo/images/2025/12/1346635786.webp)

![2047672836.webp](https://img.cyoy.cn/hexo/images/2025/12/2047672836.webp)












