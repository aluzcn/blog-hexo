---
title: "本人所用wordpress插件"
date: 2011-01-29 20:05:22
cid: 362
categories: [Nas]
tags: [插件]
layout: post
---

　　NAS已经基本搞掂了，这段时间在安装几个程序。博客看中的有wordpress和emlog，wp不用说了，用户多、扩展强，但emlog却是轻量级的，方便、灵活、高效，Emlog对资源的消耗几乎可以忽略不计。按理说，群晖D209尽管价格2000元，但硬件不是太强大，只是比家庭用的稍微强一点。
但我喜欢玩，所以最后还是选择了wordpress，今天从网上购买了一款付费的主题，这样就更中意了。快过节，快递公司基本都停了，否则我已经购买Qnap企业级的产品了，价格都在4000元以上，基本看中6000元的。等春节结束准备立即买一个，这样运行wordpress就快多了。
　　下午找了WP的几个插件，<strong>现在本人使用的主要有：</strong>
　　<a href="http://www.01on.com/a/497.html">auto_save_image</a>国人开发的，用于将外部图片自动保存到本站。
　　<a href="http://lesterchan.net/portfolio/programming/php/">PostView</a>文章阅读统计，可在首页等显示热门文章及浏览次数，经过修改（或者再加一个小插件，本站有下载）可以在后台文章列表中显示所有文章的访问次数。
　　<a href="http://wordpress.org/extend/plugins/wp-pagenavi/">WP-PageNavi</a>翻页插件，可以页面中用数字显示所有页面数，可直接进入具体的页面。注意在收费主题中已经自带有这个功能了，所以可禁用这个插件。一般的主题需要开启。
　　<a href="http://myfairland.net/wp-utf8-excerpt/">wp-utf8-excerpt</a>适合中文的WordPress摘要插件。WordPress 自带的摘要功能只支持西方文字，其他摘要插件要么对中文支持得不好，容易出现乱码；要么把原文所有的格式都去掉，只剩光秃秃的文字。本插件是一个适合中文的摘要插件，可设置是否保留文章中的格式标签，如字体、颜色、链接、图片等。“星火”网站的主题都需要这人插件，否则首页文章不会换行，全连在一起了。必备。
　　<a href="http://wordpress.org/extend/plugins/syntaxhighlighter/">SyntaxHighlighter</a>wordpress代码高亮显示插件，下面的代码效果就是这自己插件的。使用方法：在后台新建文章，切换到HTML，输入标记[cshart][/csharp]，在标记之间写代码，就OK。
　　另外正在使用的还有：Configure SMTP（发送注册等邮件），Watermark RELOADED（添加水印），WordPress Database Backup（数据库定时备份到指定邮箱），Clean Archives Reloaded（生成存档页面）。使用介绍可搜索本站，不再一一列举。

　　<strong>以下插件用完后就不启动，但保留未删除。</strong>　
　　<a href="http://wordpress.org/extend/plugins/rss-importer/">RSS Importer</a>导入RSS文件。我就是用它将原来boblog和emlog中通过自带的RSS导出的xml日志文件再导入到worpress的。很好用。boblog的rss导出很好，emlog的rss不能导出分类，官方目前不支持。
　　<a href="http://sinolog.it/?p=1603">Batch Cat</a>批量编辑日志分类。emlog的RSS不能导出分类，只能在wordpress后台通过这个工具来批量修改了。
　　<a href="http://wordpress.org/extend/plugins/statpresscn/">StatPressCN</a>访问统计工具。国人制作，有中文并完整的说明支持。<a href="http://heart5.com/?p=1650">作者网站</a>。本人网站修改后的个性统计代码为：
[csharp]
　　自从 %since%:
&lt;ul&gt;
&lt;li&gt;当前页面共被访问 (%thistotalvisits%)次&lt;/li&gt;
&lt;li&gt;当前共有(%visitorsonline%)位朋友正在访问&lt;br&gt;
　　今天共有(%visits%)位朋友来访 &lt;br&gt;
　　昨天共有(%yesterdayvisits%)位朋友来访 &lt;br&gt;
　　开启统计以来共有(%totalvisits%)位&lt;/li&gt;
&lt;li&gt;今天站内博文共被访问(%pagevisits%) &lt;br&gt;
　　昨天(%yesterdaypagevisits%)次, 总共(%totalpagevisits%)次&lt;/li&gt;
&lt;li&gt;此博共有文章(%blogtotalpost%)篇&lt;br&gt;
　　评论(%blogtotalcomment%), 留言人(%blogtotalcommentor%)&lt;/li&gt;
&lt;li&gt;您来自: %comefrom%,浏览器是%browser% &lt;br&gt;
　　操作系统是%os%&lt;/li&gt;
&lt;/ul&gt;
[/csharp]
　　我用的就这几个插件，感觉已经够用了。
　　至于文章段落空两格，个人认为没有必要再找插件或者修改文件。我喜欢在HTML编辑模式下调整一下就行了。如果需要保存图片（HTML模式不能复制图片）先用可视化将含图片的文章复制后（正常显示图片）再切换到HTML修改一下就可以了。
　　最后：RSS Importer和Batch Cat插件在使用结束后，可以在后台将其停止使用，等下次需要时再启动。












