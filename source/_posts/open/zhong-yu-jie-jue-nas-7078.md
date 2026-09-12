---
title: "终于解决nas运行wordpress伪静态"
date: 2016-03-09 10:34:32
cid: 648
categories: [Nas]
layout: post
---

<p>　　自从购买qnap nas后一直没能解决伪静态问题，试了网上很多办法都不行。</p>

<p>　　今年开始尝试购买使用vps服务器，安装upupw程序直接运行相关程序，省得调试。<br />
	在过程中无意发现upupw能自动生成.htaccess文件，立即传到在网上另外先前购买的<br />
	90qh虚拟主机空间(win系列)，也能支持运行伪静态了(先前不行，我请空间商的技术人<br />
	员帮忙测试了几个文件都没能解决)。　固定链接为　/%category%/%post_id%.html</p>

<p>　　需要注意<span style="color:#FF0000;">这个.htaccess只能通过ftp(我用的是flashfxp)来下载和上传</span>，其他如nas自<br />
	带的文件管理器或者\\这种方式都不行。上传到虚拟主机后文件大小是235字节，但在<br />
	计算机本地察看显示为1K。如果强行用EditPlusg打开它，内容为：<br />
	# BEGIN WordPress<br />
	&lt;IfModule mod_rewrite.c&gt;<br />
	RewriteEngine On<br />
	RewriteBase /<br />
	RewriteRule ^index\.php$ - [L]<br />
	RewriteCond %{REQUEST_FILENAME} !-f<br />
	RewriteCond %{REQUEST_FILENAME} !-d<br />
	RewriteRule . /index.php [L]<br />
	&lt;/IfModule&gt;</p>

<p># END WordPress</p>

<p>　　</p>














