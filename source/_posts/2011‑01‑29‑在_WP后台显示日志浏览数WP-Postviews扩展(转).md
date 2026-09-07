---
title: "在 WP后台显示日志浏览数WP-Postviews扩展(转)"
date: 2011-01-29 15:55:21
cid: 359
categories: [Nas]
tags: [插件]
layout: post
---

<a href="https://img.cyoy.cn/hexo/images/2011/01/postviews-for-admin.zip">下载postviews-for-admin插件</a>
除了使用 <strong>Google Analytics</strong> 统计整个博客的流量之外，我还使用 <strong>WP-Postviews</strong> 这个 WordPress 插件对每篇日志的点击数进行统计，通过对每篇日志的统计，这样我就可以知道哪些日志受读者欢迎，并且可以实现博客日志流量 Top 10 等功能，非常方便和强大。但是 PostViews 这个插件有点不好的地方就是不能在后台日志列表页面显示点击数，今天我查了下 WordPress 的 Hook，通过以下代码实现了这个功能：
<pre>add_filter('manage_posts_columns', 'postviews_admin_add_column');
function postviews_admin_add_column($columns){
?? ?$columns['views'] = __('Views');
?? ?return $columns;
}
add_action('manage_posts_custom_column','postviews_admin_show',10,2);
function postviews_admin_show($column_name,$id){
?? ?if ($column_name != 'views')
?? ? ? ?return;? ?
?? ?$post_views = get_post_meta($id, "views",true);
?? ?echo $post_views;
}
</pre>
你只需将上面的代码复制到你的 PostViews 插件的原文件或者主题的 <strong>function.php</strong> 中即可，如果你不知道怎么做，也可以下载下面这个文件 PostViews for Admin，上传到你博客的插件目录，激活即可。最终效果让你可以在 WordPress 后台日志列表页面查看每篇日志的点击数，如下图所示：

<a href="https://img.cyoy.cn/hexo/images/2011/01/20251126203834930.jpg"><img class="aligncenter size-full wp-image-5520" src="https://img.cyoy.cn/hexo/images/2011/01/20251126203834930.jpg" alt="" width="414" height="336" /></a>
在 WordPress 后台日志列表页面查看每篇日志的点击数












