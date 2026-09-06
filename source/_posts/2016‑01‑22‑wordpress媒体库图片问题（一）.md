---
title: "wordpress媒体库图片问题（一）"
date: 2016-01-22 10:31:02
cid: 587
categories: [Nas]
layout: post
---

<p>　　wp在上传图片后默认生成几种规格的图片（缩略图,中,大,完整）,比较复杂但也有用，但图片数量会很多，占用空间。<br />
	　　我的博客图片不是太多，只想用原始的一张图，但在帖子中要控制好，否则就大小撑破页面了。下面是我的设置方法：<br />
	　　1、后台仪表盘&ldquo;设置--多媒体&rdquo;中可设定各种图片参数，如果不想生成其中的某种则填写0　。<br />
	　　<img alt="20160122102500" class="alignnone size-full wp-image-1992" height="317" src=" /images/2016/01/20160122102500.jpg" style="" title="" width="502" /><br />
	　　这种方法设置后，所有以后上传的图片都是原始大小。<br />
	　　上传成功并插入帖子后，可以<span style="color:#FF0000;">在帖子里再点击图片，出现下图，之后可以修改%，在advanced settings中更可以<br />
	看到参数，之后点最下面的update。这样发表的帖子图片就被限制显示的大小了，再拖动图片则会以完整大小来显示<br />
	　　</span><img alt="2851" class="alignnone size-full wp-image-1993" height="417" src=" /images/2016/01/2851.jpg" style="" title="" width="482" /><br />
	　　<span style="color:#B22222;">这样设置后，在帖子中以设定长宽后的大小来显示原始图片，再拖动到新窗口图片则完整显示了。</span></p>

