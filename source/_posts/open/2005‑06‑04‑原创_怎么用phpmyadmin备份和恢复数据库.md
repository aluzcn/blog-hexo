---
title: "原创:怎么用phpmyadmin备份和恢复数据库"
date: 2005-06-04 11:27:44
cid: 317
categories: [网络]
layout: post
---

&nbsp;
<div class="textbox-content"><span style="color: red;">如何备份</span>

我用的是 phpMyAdmin 2.2.6.
当采用PHP+MySql的结构来安装使用论坛,或者
其他整合网站的程序后,备份和恢复MySql 数据库
就是一个必修课了.
一.如何备份:
见下图,可以用shift来快速选择多个文件,之后
再选择备份的类型就行了<a href="https://img.cyoy.cn/hexo/images/2005/06/20251127104825913.jpg"><img class="aligncenter size-full wp-image-5585" src="https://img.cyoy.cn/hexo/images/2005/06/20251127104825913.jpg" alt="" width="439" height="369" /></a>

<span style="color: red;">如何恢复</span>

见下图,通过"浏览"选择备份到本地的扩展名为
sql的文件就行了.
另外,如何你的备份数据库超过8M,那就必须再
修改 php.ini 中有关上传的设置才行的

<a href="https://img.cyoy.cn/hexo/images/2005/06/20251127104837424.jpg"><img class="aligncenter size-full wp-image-5587" src="https://img.cyoy.cn/hexo/images/2005/06/20251127104837424.jpg" alt="" width="389" height="359" /></a>

</div>













