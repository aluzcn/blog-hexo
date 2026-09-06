---
title: "群晖套件wordpress固定链接问题"
date: 2018-08-05 18:18:00
cid: 1481
categories: [Nas]
tags: [群晖]
layout: post
---

　　通过群晖后台的套件来安装wordpress，可以选择原来的数据库，
但只能安装在wordpress目录。成功后不能用自定义的链接打开文章，
必须到后台改成“朴素”等形式。
　　解决办法：登陆后台设置好自己希望的固定链接 /%category%/%post_id%.html
　　之后用EditPlus等类似软件打开Nas目录wordpress下的.htaccess文件。
　　上半部分是群晖原来的，下半部分是在wordpress设置固定链接时提示的内定，两
者合并起来就行了。

   # Synology PHP
AddHandler default-handler .htm .html .shtml
AddHandler php-fastcgi .php
AddType text/html .php
Action php-fastcgi /php56-fpm-handler.fcgi
# Synology PHP

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /wordpress/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /wordpress/index.php [L]
</IfModule>

