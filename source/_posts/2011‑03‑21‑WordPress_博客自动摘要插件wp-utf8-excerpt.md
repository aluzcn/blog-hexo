---
title: "WordPress 博客自动摘要插件wp-utf8-excerpt"
date: 2011-03-21 11:17:51
cid: 418
categories: [Nas]
tags: [插件]
layout: post
---

WordPress博客默认首页、列表页文章全文显示，要想显示摘要需要手动选择添加摘要内容，每次都要进行手动操作非常麻烦。WordPress博客爱好者开发了不少WordPress博客文章自动摘要插件，本次<a title="博客吧" href="http://www.boke8.net/" target="_blank" rel="noopener">博客吧</a>要介绍的是由国人开发的一款适用中文自动摘要的博客插件wp-utf8-excerpt。
<strong>博客插件wp-utf8-excerpt介绍：</strong>
本插件是一个适合中文的摘要插件，可设置是否保留文章中的格式标签，如字体、颜色、链接、图片等；支持多字节语言（如中文），不会产生乱码；首页每篇文章显示300字，存档页面每篇文章显示150字（字数可设置），字数是真正文字的有效字数，不包括各种 HTML 标签的字数。
<strong>wp-utf8-excerpt插件安装使用：</strong>
下载博客插件wp-utf8-excerpt，并将插件上传至wp-content/plugins/目录下登陆博客后台，在已安装插件列表中启用该插件启用插件后，在后台设置选项卡下会生成Excerpt选项，在这里可以设置摘要显示的文字数量等

<a href="https://img.cyoy.cn/hexo/images/2011/03/20251125203746766.jpg"><img class="aligncenter size-full wp-image-5511" src="https://img.cyoy.cn/hexo/images/2011/03/20251125203746766.jpg" alt="" width="649" height="301" /></a>
点击后台外观选项下的“编辑”选项进入主题编辑页面，选择index.php文件，把[csharp]&lt;?php the_content(); ?&gt;[/csharp] 　改成：
[csharp]&lt;?php
if (is_single() or is_page()) {
the_content();
} else {
the_excerpt();
}
?&gt;[/csharp]
注意：有些主题在the_content()中还有一些字，比如the_content(’Continue Reading ?’)，这种要把整句话换掉。有些主题用了其他文件来控制存档页面，如category.php、archive.php等，如有必要，请对这些文件也做修改。
这一步是对首页的文章进行摘要显示，如果需要对列表页、分类页文章摘要显示，可对archive.php文件进行同样的操作













