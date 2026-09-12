---
title: "统一phpmyadmin版本"
date: 2011-03-06 21:06:00
cid: 407
categories: [Nas]
tags: [软件]
layout: post
---

　　群晖的phpmyadmin版本是 3.2.5，威联通的phpmyadmin版本是 3.2.0-beta1。
　　威联通的版本太低了，为了统一以后的使用（数据库转换），今天特意统一以群晖的3.2.5为标准，把群晖、威联通以及本地计算机搭建的平台，全部统一起来。
　　在安装过程中：
　　1、如果没有config.inc.php，可以复制config.sample.inc.php为config.inc.php
　　2、如果提示权限之类的错误，那需要把config.inc.php修改成755，

![请输入图片描述][1]
　　3、如果出现“”phpmyadmin中配置文件现在需要绝密的短语密码”，那就编辑config.inc.php ，查找
<?php 
$cfg['Servers'][$i]['auth_type'] = 'cookie'; 
$cfg['blowfish_secret'] = 'aluzcn';　　　
?> 

　　其中的"aluzcn"为任意短语 


  [1]: https://img.cyoy.cn/hexo/images/2011/03/Snap1.jpg













