---
title: "wordpress安装ssl证书"
date: 2018-09-29 14:27:21
cid: 1310
categories: [Nas]
layout: post
---

<!-- wp:paragraph -->
<p>安装SSL证书<br>
当我们成功申请SSL证书之后，下载证书文件解压，分别是Apache、IIS、Nginx服务器的证书文件，腾讯云官方给我们提供了4类服务器证书安装方法的示例，教程很详细我们可以参考一下，【SSL证书安装指引】。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>wordpress网站配置<br>
1、进入WP后台，进入设置-常规 将WordPress地址（URL）、站点地址（URL）两项修改为：https。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>2、登录和后台强制开启SSL。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>3、为了保证WordPress站点之前添加的各个链接或者多媒体文件把http协议改成https协议，我们还需要通过数据库SQL查询执行一条替换命令，代码如下：（使用时请按照自己数据库表名（wp_posts）和网站域名修改后在执行即可。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>UPDATE wp_posts SET post_content = replace( post_content, ‘https://cyoy.cn’, ‘https://cyoy.cn’ )</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>以后如果不需要了，可以返回</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>UPDATE wp_posts SET post_content = replace( post_content, ‘https://cyoy.cn’, ‘https://cyoy.cn’ )</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>4、大功告成，我们下面要做的就是把外部链接改到新的https地址，同时访问一下https版本页面，包括首页、栏目页、内页、sitemap，查一下源代码，看看还有没有http地址的存在。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>比如：小寨No.7的主题中logo的地址。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>5、在wordpress的安装目录下创建或者修改.htaccess，内容为：</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>
RewriteEngine on
RewriteCond %{HTTPS} off
RewriteRule (.<em>) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
RewriteCond %{HTTP_HOST} ^guozhuanwang.com [NC]
RewriteRule ^(.</em>)$ https://cyoy.cn/$1 [L,R=301]
</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1>BEGIN WordPress</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1>END WordPress</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>记得用Editplus编辑。</p>
<!-- /wp:paragraph -->












