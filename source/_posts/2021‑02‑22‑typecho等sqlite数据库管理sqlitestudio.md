---
title: "typecho等sqlite数据库管理sqlitestudio"
date: 2021-02-22 22:20:00
cid: 1350
categories: [Nas]
layout: post
---

2021年2月春节时又试了typecho，选择的是sqlite数据库。
管理数据库的软件建议用sqlitestudio。我选择的是sqlitestudio 3.0.6 绿色版，下载地址：
https://www.pcsoft.com.cn/soft/34498.html 。主要使用方法：

一、添加数据库：
菜单“数据库”--“add a database” ,或者ctrl+o 。找到本在的sqlite数据库文件即可。
<img src="https://img.cyoy.cn/hexo/images/2021/02/mao2021-02-22-14-34-41-253.png" />

二、修改新的域名：
和wordpress一样，如果能进typecho的后台就在设置里直接更换新域名。否则就要用这个sqlite studio了。
左侧找到typecho_options表，右边切换到Data。siteUrl 中的https://cyoy.cn/tp 修改成新的域名。我的是https://cyoy.cn
然后一定要点上面小菜单第4个那个小勾来保存。不放心的话可以先remove the database再重新加载来查看是否真正保存。
<img src="https://img.cyoy.cn/hexo/images/2021/02/mao2021-02-22-14-45-02-511.png" />

三、查找替换文章中的内容：

正常情况下，只要是修改好了数据库配置，域名就已经更换过来了。

<span style="color: #993300;"><strong>如果需要更换文章里面的网址</strong></span>。如下图，先找到typecho_contents表。然后“工具”
“打开SQL编辑器”，在Query中执行下面的语句。
<div class="table-wrapper">UPDATE `typecho_contents` SET `text` = REPLACE(`text`,'旧域名地址','新域名地址');</div>
<img src="https://img.cyoy.cn/hexo/images/2021/02/mao2021-02-22-14-48-50-430.png" />

执行键就是Query上面的那个绿色向右的小箭头，快捷键是F9

最后来说typecho确实轻便，数据库可以选择sqlite也方便，手机后台发帖也方便。
这点zblog php的后台不行，只适合网页。不过它的扩展功能不如老牌的wordpress，
比如图片大小控制等等。













