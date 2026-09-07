---
title: "NexusPHP架设PT服务"
date: 2011-03-11 12:33:00
cid: 409
categories: [网络]
tags: [软件]
layout: post
---

<strong>说明：本人参照以下办法在windows7+AMPServ526下搭建成功，但在NAS上不行。很简单，因为NAS目前不支持memcache。</strong>

![请输入图片描述][1]
以下是摘录的内容+自己的修改
PT是什么？简单点说就是只下载不上传就会让踢掉的BT下载服务，是一个小圈子内部使用的。
特别说明一下的是搭建NexusPHP需要memcache支持，相关教程可以自己搜索一下，我这里采用的AMPserv在本机搭建（运行的时候勾选上扩展功能里面的Memcached）
首先从NexusPHP官网下载源码程序http://sourceforge.net/projects/nexusphp/，下载后解压出来放到网站根目录；
然后导入数据库文件，（根目录_db下的dbstructure.sql文件）导入完毕后修改配置文件，在config文件下下面有一个allconfig.php 的文件，修改下面的内容：
‘SITENAME’ =&gt; ‘站点名称’,
‘BASEURL’ =&gt; ‘网站URL’,
‘announce_url’ =&gt; ‘localhost/announce.php’,（announce的url地址）
‘mysql_host’ =&gt; ‘MySQL主机’,
‘mysql_user’ =&gt; ‘数据库用户名’,
‘mysql_pass’ =&gt; ‘数据库密码’,
‘mysql_db’ =&gt; ‘数据库名’,
注意编辑保存时要用utf-8，否则站名名称是中文的话就会乱码。

另外：那里说的（修改’classes\class_cache.php’中的localhost为127.0.0.1）好像是为了避免出现下面这个错误的：
Warning: Memcache::connect() [memcache.connect]: Can’t connect to localhost:11211, 由于连接方在一段时间后没有正确答复或连接的主机没有反应，连接尝试失败。 (10060) in E:\APMServ5.2.6\www\htdocs\classes\class_cache.php on line 19
不过我没有遇到这个问题。
接下来是设置管理员
首先自己访问网站然后注册一个用户名，接着进入数据库管理（phpMyAdmin），在users表里面找到你注册的用户，编辑它的class属性为16
还可以通过下面的方法设置：
1.使用正常方式在网站注册一个新用户，假设用户名为admin。
2.输入以下命令进入MySQL命令行管理工具： mysql -u root -p nexusrocks -h localhost 注意：将’root’，’nexusrocks’，’localhost’分别替换成你的MySQL用户名、密码、主机地址。
3.在MySQL命令行管理工具输入以下命令： USE nexus; UPDATE users SET class=’16′ WHERE username=’admin’; 注意：将以上命令中的’nexus’替换成你的数据库名，将’admin’替换成你注册的用户名。
4.退出MySQL命令行管理工具:
到这里PT基本上就架设完毕了，现在只需要利用管理员帐号对站点进行设置和调整就可以了。


  [1]: https://img.cyoy.cn/hexo/images/2011/03/Snap21.jpg











