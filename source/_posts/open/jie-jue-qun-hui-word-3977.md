---
title: "解决群晖WordPress只能通过FTP升级"
date: 2024-04-28 22:08:20
cid: 1381
categories: [Nas]
layout: post
---

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">群晖DSM升级到7.2后，下面插入三段代码的方法不行，提示网站出现致命错误。改用这个办法OK。只要最上面的第一行。<br /><mark class="has-inline-color has-vivid-red-color" style="background-color: rgba(0, 0, 0, 0);"><kbd><strong>在服务器根目录里找到wp-config.php文件，在底部添加以下代码：<br /></strong></kbd></mark></p>
<pre class="lang:default decode:true ">define('FS_METHOD','direct');</pre>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} --><!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><mark class="has-inline-color has-cyan-bluish-gray-color" style="background-color: rgba(0, 0, 0, 0);"><strong>简介WordPress需要访问您网页服务器的权限。 请输入您的FTP登录凭据以继续。 如果您忘记了您的登录凭据（如用户名、密码），请联系您的主机提供商。”奇怪了，怎么需要输入FTP才能升级啊</strong>？</mark><br /><br />　　安装在阿里云服务器上的wordpress更新主题、插件等都正常，但在群晖Nas上用webstation安装的wordpress每次更新都<br />提示只能用Ftp来更新。<br />　　每次都要启动Ftp才行，很是麻烦。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":4900,"width":"638px","height":"auto","sizeSlug":"full"} -->
<figure class="wp-block-image size-full is-resized"><a href="https://img.cyoy.cn/hexo/images/2024/04/image-5.png"><img class="aligncenter wp-image-4900 size-full" style="width: 638px; height: auto;" src="https://img.cyoy.cn/hexo/images/2024/04/image-5.png" alt="" width="855" height="426" /></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>　　网上提示是wp安装目录的权限不够，设置成777和http用户后依然不行。<br /><br />　　解决办法就是编辑网站根目录下的?<strong>wp-config.php?</strong>文件，添加以下脚本信息：</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<pre class="lang:default decode:true ">define("FS_METHOD", "direct");
define("FS_CHMOD_DIR", 0777);
define("FS_CHMOD_FILE", 0777);</pre>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>　　上述脚本添加到文件的最后面就可以。</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<pre class="lang:default decode:true">define(“FS_METHOD”,”direct”);
define(“FS_CHMOD_DIR”, 0777);
define(“FS_CHMOD_FILE”, 0777);</pre>
<p>&nbsp;</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->













