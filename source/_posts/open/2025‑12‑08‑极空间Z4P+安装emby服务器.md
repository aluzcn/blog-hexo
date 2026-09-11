---
title: "极空间Z4P+安装emby服务器"
date: 2025-12-08 11:17:00
cid: 1427
categories: [Nas]
tags: [极空间]
layout: post
---

https://www.zspace.cn/help/?articleId=100120
*可参考极空间官网的安装说明。*

====== ** 补记 补记 补记 补记 ** =====
原来只有音乐文件，后来准备添加新的视频文件夹到媒体库，
但找不到选项。最后搞明白了，必须要先在docker配置的文
件夹路径中添加需要加载的媒体目录。之后就出来可以添加
的目录了。
直接编辑在极空间已经运行的docker的emby容器，选“编辑后
新建”，但只添加目录路径不改动其他的选项，也能无损新建的。
![bjrq.webp][1]

我的目录修改后的配置
![tjlj.webp][2]
装载路径中的 /mnt/share1和 /mnt/sahre2 都可以随意填写的。
======= **补记结束 补记结束**  =========

Docker搜索 emby/embyserver 选择下载 latest
配置如下：

![emby01.jpeg][3]


![emby02.jpeg][4]

![emby03.jpeg][5]


  [1]: https://img.cyoy.cn/hexo/images/2026/01/1563738071.webp
  [2]: https://img.cyoy.cn/hexo/images/2026/01/2164986744.webp
  [3]: https://img.cyoy.cn/hexo/images/2025/12/6945693.jpeg
  [4]: https://img.cyoy.cn/hexo/images/2025/12/3933810778.jpeg
  [5]: https://img.cyoy.cn/hexo/images/2025/12/979409706.jpeg













