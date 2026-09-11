---
title: "阿里云宝塔和群晖Docker不能pull"
date: 2024-12-14 21:54:31
cid: 1408
categories: [Nas,网络]
tags: [群晖]
layout: post
---

<a href="https://www.bt.cn/bbs/thread-134771-1-1.html" target="_blank" rel="noopener">【教程贴】如何在宝塔面板更换Docker加速站 - Linux面板 - 宝塔面板论坛</a>
https://www.bt.cn/bbs/thread-134771-1-1.html

出现错误提示：
Get https://registry-1.docker.io/v2/: net/http: TLS handshake timeout
（Docker镜像拉取错误）

解决办法：
进入宝塔的Docker设置，“打开配置文件”，添加以下代码：
https://6kx4zyno.mirror.aliyuncs.com 或者
https://docker.1ms.run

记得需要重启Docker

<img class="" src="https://img.cyoy.cn/hexo/images/2024/12/7NpEOI20241128090515.jpg" alt="阿里云宝塔和群晖Docker不能pull" width="537" height="285" />
群晖需要进入“container Manage" -- "注册表" ，编辑“Docker Hub(V1)”，
勾选“启用注册表镜像”，并填写一些可用的地址（网上查找）。
建立项目后，拉取过程可能很缓慢，只要不报错就行，睡一觉起来就OK了。

<img class="" src="https://img.cyoy.cn/hexo/images/2024/12/202412092133017NEHQU.jpg" alt="阿里云宝塔和群晖Docker不能pull" width="494" height="288" />

<a href="https://imnks.com/8302.html#google_vignette" target="_blank" rel="noopener">关于Docker官方镜像仓库被墙的一些解决办法 - 我不是矿神</a>
<a href="https://blog.csdn.net/A2902/article/details/141187006?spm=1001.2101.3001.6650.2&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ECtr-2-141187006-blog-141603885.235%5Ev43%5Epc_blog_bottom_relevance_base6&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ECtr-2-141187006-blog-141603885.235%5Ev43%5Epc_blog_bottom_relevance_base6&amp;utm_relevant_index=5" target="_blank" rel="noopener">群晖7.2的docker镜像仓库被墙，解决方法（实测有用）/docker下载失败怎么办？</a>













