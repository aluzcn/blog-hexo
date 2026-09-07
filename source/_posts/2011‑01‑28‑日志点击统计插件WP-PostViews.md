---
title: "日志点击统计插件WP-PostViews"
date: 2011-01-28 14:41:53
cid: 355
categories: [Nas]
tags: [插件]
layout: post
---

<div>

WordPress自身不带文章浏览统计功能，这可以说是WP的一大遗憾，大家应该都想看到自己的文章点击量，今天为大家推荐一款网上非常流行的WordPress日志点击统计插件 WP-PostViews。

<strong>WP-PostViews插件介绍：</strong>

该插件由 GaMerZ 开发，主要是实现单篇文章阅读数量统计、显示浏览数量最多文章排行、分类下浏览数量最多的文章排行等功能效果。

<strong>WP-PostViews插件安装：</strong>

1.下载WP-PostViews插件，并上传至wp-content/plugins/目录下

2.登陆博客后台，启用该插件，这时设置选项卡下会生成一个PostViews选项和小工具中会生成一个Views工具

<strong>WP-PostViews插件使用一：</strong>

点击设置选项卡下的PostsViews选项进入插件设置界面：

<a href="https://img.cyoy.cn/hexo/images/2011/01/20251126204842671.jpg"><img class="aligncenter size-full wp-image-5522" src="https://img.cyoy.cn/hexo/images/2011/01/20251126204842671.jpg" alt="" width="639" height="396" /></a>
<strong><!--more-->
Count Views From：</strong>设置被统计的用户群

Everyone：所有人

Guests only：仅访客

Registered Users Only：仅注册用户

<strong>Exclude Bot Views：</strong>是否排除机器人的浏览

YES：是

NO：不是

<strong>Views Template：</strong>浏览量的显示格式，默认是：%VIEW_COUNT% views ，博客吧的是“热度%VIEW_COUNT% 度”，随时可点击“Restore Default Template”恢复默认设置。

<strong>Most Viewed Template：</strong>侧边栏 Widget 显示浏览量最多的文章（亦称“最受欢迎文章”）列表时的显示格式。可用%VIEW_COUNT%、 %POST_TITLE%、%POST_EXCERPT%、%POST_CONTENT%、%POST_URL%对其进行参数设置

<strong>Display Options：</strong>显示设置

Home Page（首页）、Singe Posts（文章页）、Pages（页面）、Archive Pages（分类归档页）、Search Pages（搜索页）、Other Pages（其它页面），可进行Display to everyone（所有人）、Display to registered users only（注册用户）、Don’t display on ***（不显示在***）

<strong>方法一</strong>

在当前WordPress博客主题支持widget（小工具）前提下，在可用小工具中把Views小工具放到相应位置即可。

<a href="https://img.cyoy.cn/hexo/images/2011/01/20251126204854939.jpg"><img class="aligncenter size-full wp-image-5523" src="https://img.cyoy.cn/hexo/images/2011/01/20251126204854939.jpg" alt="" width="261" height="502" /></a>

Statistics Type

least viewed：浏览最少的文章

least viewed by category：该分类下浏览最少的文章

most viewed：浏览最多的文章

most viewed by category：该分类下浏览最多的文章

Include Views From

posts &amp; pages：显示文章和页面

posts only：只显示文章

pages only：只显示页面

方法二

在主题文件sidebar.php文件中的相应位位置添加代码

显示阅读次数最多的文章或页面：

&lt;?php if (function_exists('get_most_viewed')): ?&gt;
&lt;?php get_most_viewed(); ?&gt;
&lt;?php endif; ?&gt;

只显示阅读次数最多的文章：

&lt;?php if (function_exists('get_most_viewed')): ?&gt;
&lt;?php get_most_viewed('post'); ?&gt;
&lt;?php endif; ?&gt;

只想显示10篇阅读次数最多的文章：

&lt;?php if (function_exists('get_most_viewed')): ?&gt;&lt;?php get_most_viewed('post',10); ?&gt;
&lt;?php endif; ?&gt;

在get_most_viewed 函数中的参数10决定要显示的篇数

显示显示某类别下的阅读次数最多的文章：

&lt;?php if (function_exists('get_most_viewed_category')): ?&gt;
&lt;?php get_most_viewed_category(the_catagory_ID(false)); ?&gt;
&lt;?php endif; ?&gt;

在get_most_viewed_category函数类别ID决定显示的分类

WP-PostViews插件使用二：

在文章中显示该文章的浏览数量

<a href="https://img.cyoy.cn/hexo/images/2011/01/20251126204909621.jpg"><img class="aligncenter size-full wp-image-5524" src="https://img.cyoy.cn/hexo/images/2011/01/20251126204909621.jpg" alt="" width="254" height="70" /></a>

1.点击外观选项卡下的编辑选项进入主题编辑界面，选择主题文件single.php文件进行编辑

2.在single.php文件相应位置调用显示代码

&lt;?php if(function_exists('the_views')) { the_views(); } ?&gt;

3.提交更新文件即可。

</div>












