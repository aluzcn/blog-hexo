---
title: "wordpressw转halo的步骤"
date: 2024-12-08 09:49:06
cid: 1406
categories: [Nas]
tags: [halo]
layout: post
---

<p>一、进入正常运行的wordpress后台：<br />1，工具--导出，下载导出的文件。如果文章比较多，比如超过2000篇，<br />可以选择下面的“文章”，按 “分类” 分几部分导出，再分批次导入halo。<br /><img class="wp-image-5281 aligncenter" src=" /images/2024/12/screenshot-1733576424741.png" alt="wordpressw转halo的步骤" width="452" height="462" /></p>
<p>二、编辑导出的 xml文件：<br />用editplus 或者 Notepad++等等类似软件打开编辑从wp导出的xml文件，<br />查找替换原来 http://old.xxx 域名为你准备新使用的域名。如果你不准备更<br />换域名，这一步可以省略。<br />如果在Nas上安装，需要加上 http://new.xx:77 这样的端口号。</p>
<p>三：在能正常运行的halo上，安装站点迁移插件。</p>
<p><img class="aligncenter wp-image-5283" src=" /images/2024/12/screenshot-1733577109857.png" alt="wordpressw转halo的步骤" width="509" height="240" /></p>
<p>然后上传刚才修改好的xml，再按提示操作就能导入了。</p>
<p>四：再halo中配置导入wordpress的媒体库：<br />这一步有点意思。如果简单地把wp的媒体库wp-content目录<br />复制到halo的attachments目录里，没有用的。具体操作如下：<br />1、找到wordpress安装目录里的wp-contentuploads，复制这个<br />uploads目录。<br />2、进入halo工作目录，找到attachments目录（一般halo2的下一级）<br />3、粘贴uploads目录为attachments子目录，并改名为 migrate-from-wp<br /><img class="aligncenter wp-image-5284" src=" /images/2024/12/screenshot-1733578235485.png" alt="wordpressw转halo的步骤" width="376" height="241" /></p>
<p>上图是1panel的目录结构，下图是nas的目录结构。</p>
<p>五：创建 application.yaml 文件:</p>
<p><a href=" /images/2024/12/2024-12-07-tvelmutg.zip">application.yaml压缩包</a>（application.yaml 压缩文件供下载）<br />1panle在attachments的上一级目录data下创建，群晖Nas在halo2目录里创建。<br />就是跟attachments在同一层级。代码如下：</p>
<pre class="theme:coda-special-board font-size:14 line-height:17 lang:default decode:true">halo:
attachment:
resource-mappings:
- pathPattern: /wp-content/uploads/**
locations:
- migrate-from-wp</pre>
<p>六：重启halo就OK了。<br />注意：重启后可能出现文章名称乱码，可按下图修改设置。等待一段时间<br />生效后就可以了。</p>
<!-- wp:paragraph -->
<p>七：后继换文章中图片等附件的域名<br />用命令来操作比较麻烦。在1Panel中用phpmyadmin就方便多了。<br />从面板的“连接信息”中复制地址，用列表中的用户名和密码（不需要root用户就行）<br />登录phpmyadmin。点选“extensions”，再点选SQL，运行以下代码：</p>
<pre class="theme:feeldesign font-size:16 lang:default decode:true ">UPDATE `extensions` 
SET `data` = REPLACE(`data`, 'https://cyoy.cn', 'http://cyoy.me') 
WHERE `data` LIKE '%https://cyoy.cn%';
</pre>
<!-- /wp:paragraph -->

<!-- wp:image {"id":5299,"width":"617px","height":"auto","sizeSlug":"full"} --><!-- /wp:image -->

<!-- wp:paragraph --><!-- /wp:paragraph -->

<!-- wp:code --><!-- /wp:code -->

<!-- wp:paragraph -->
<p>或者：</p>
<pre class="theme:obsidian-light font-size:16 line-height:18 lang:default decode:true ">UPDATE `extensioUPDATE `extensions` 
SET `data` = REPLACE(`data`, 'https://cyoy.cn', 'http://cyoy.me') 
</pre>
<!-- /wp:paragraph -->

<!-- wp:code --><!-- /wp:code -->

<!-- wp:image {"id":5296,"width":"674px","height":"auto","sizeSlug":"full"} -->
<figure class="wp-block-image size-full is-resized"><br /><img class="wp-image-5296" style="width: 674px; height: auto;" src=" /images/2024/12/screenshot-1733840426454.png" alt="wordpressw转halo的步骤" /></figure>
<!-- /wp:image -->
