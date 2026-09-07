---
title: "vista配置php+mysql(XAMPP)"
date: 2008-02-08 14:56:34
cid: 129
categories: [网络]
layout: post
---

　　 
	<p>　　本地计算机必须安装配置好IIS,php,mysql，以便能运行F2blog,Pjblog等程序，这也是用这次指定买联想机时操作系统必须是VISTA　P版本的原因（Basic版本不能安装IIS）。<br /> 　　经过春节的研究基本解决了，配置IIS可参考上一文章。这篇主要是安装PHP＋MYSQL。我采用的　XAMPP集成软件，比较方便，特别只是自己调试程序用足够了。<br /> 　　XAMPP的主页的Vista下载： <a href="http://www.apachefriends.org/zh_cn/xampp-windows.html#1787">http://www.apachefriends.org/zh_cn/xampp-windows.html#1787</a>。版本是1.6.5。直接下载网址：<br /> <a href="http://www.apachefriends.org/download.php?xampp-win32-1.6.5-installer.exe">http://www.apachefriends.org/download.php?xampp-win32-1.6.5-installer.exe</a>　（是37M的install安装包）。<br /> 　　安装很简单，记得先把IIS停止运行再安装。其他都是自动。<br /> 　　错误解决及有关注意：<br /> 　　1、vista系统，建议将xampp安装在c:下，而不是c:program files下，因为后一个的权限要求更高。<br /> 　　2、安装结束能运行，但点击打开&ldquo;WinMySQLadmin&rdquo;时，出现以下错误：<br /> XAMPP下WinMySqlAdmin的Access violation at address 10002593 in module &#39;LIBMYSQL.dll&#39;. Read of address 00000000.<br /> 　　解决方法











