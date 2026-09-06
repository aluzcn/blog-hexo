---
title: "极空间Docker搭建emby高级版"
date: 2026-01-23 11:03:00
cid: 1519
categories: [Nas]
tags: [极空间]
layout: post
---

极空间帮助文本中有Docker安装Emby免费版的教程。但Emby的高级版:除了包含免费版
的所有功能外，还提供高级转码、更快的速度、更多编解码器支持和更详细的元数据管理。
特别是高级版还能在播放音乐时直接显示内置的歌词。
一：Docker下载Emby高级版镜像：
我的Nas是Z4pro+，Docker里面搜索 embyserver，如下图。找到amilys/embyserver。
这是网友破解制作的，里面的QQ群也不错，可以交流。
![embydocker.webp][1]

二：安装配置如下：
1、挂载目录：
第一行是本镜像的配置目录，自己在Nas的docker目录下创建一个。
其他都是你自己Nas上的音乐和视频存放目录，强烈建议音乐和视频类型的分开存放，便于
以后管理。可以挂载多个目录的，装载路径的名称自己随意填写，安装成功后在emby的媒
体库里添加目录时就是现在的名称。
![embyml.webp][2]
2、端口配置：
其中8096最重要，这是以后登录emby server的端口。
![embydk.webp][3]
3、调用核心显卡：
建议勾选这个选项，在线转码等功能时需要。
![embyxk.webp][4]
4、Dokcer的 “通用” 选项里面的性能限制，根据你自己想要选择吧。

Docker搭建免费版emby参考此贴
https://aluz.cn/nas/1427.html

  [1]:  /images/2026/01/2516145394.webp
  [2]:  /images/2026/01/586913168.webp
  [3]:  /images/2026/01/1110717534.webp
  [4]:  /images/2026/01/359422014.webp
