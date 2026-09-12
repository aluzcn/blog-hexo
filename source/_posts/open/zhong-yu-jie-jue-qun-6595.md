---
title: "终于解决群晖web配置问题"
date: 2020-03-01 15:17:05
cid: 1339
categories: [Nas]
layout: post
---

一，<strong>http用户组权限</strong>：
后果仅仅只读，那在boblog f2blog等程序刷新缓存、更换主题等等都会提示错误。

<a href="https://img.cyoy.cn/hexo/images/2020/03/mao2020-03-01-07-13-37-635.png" rel="attachment wp-att-3591">
<img class="alignnone" src="https://img.cyoy.cn/hexo/images/2020/03/mao2020-03-01-07-13-37-635.png" alt="" width="446" height="172" /></a>

二，<strong>有关webstation和数据库等</strong>：
1，photostation 和 phpmyadmin一个是系统内部自带的，一个是通过套件安装的，默认的端口内部都是80.
2，如果photostation设置里启用博客并设置端口为66，这是指外部的端口。路由器端口转发外部66到内部80就行了。外网<a dir="ltr" href="https://cyoy.cn:66/blog" target="_blank" rel="noopener noreferrer">https://cyoy.cn:66/blog</a>?和内网 <a dir="ltr" href="http://192.168.0.111/blog" target="_blank" rel="noopener noreferrer">http://192.168.0.111/blog</a> （后面的80被自动省略了） 是一样的。
3，通过web station的虚拟主机绑定的端口是指Nas的内部端口。如果webstaion设置某一目录基于端口为88，那首先路由器必须设置端口转发外部88到内部88一样的端口号。
之后所有的已经解析到nas的域名后面加88的访问都是指向这个子目录，这个子目录就像是某个端口的根目录一样。比如
我在ftp根目录专门建立的88www.. 子目录，可以理解为<a dir="ltr" href="https://cyoy.cn:88/" target="_blank" rel="noopener noreferrer">aluz.cn:88</a>?，<a dir="ltr" href="http://yocn.me:88/" target="_blank" rel="noopener noreferrer">yocn.me:88</a> 等等所有域名的访问的根目录。88wwwroot/ablog目录就是<a dir="ltr" href="https://cyoy.cn:88/zblog" target="_blank" rel="noopener noreferrer">aluz.cn:88/ablog</a>? 目录

三，“<strong>not allowed to use restricted net</strong>”
boblog和f2blog最好是使用php5.2，群晖最低是php5.6。试了一下能感觉运行(php 7.0以上肯定不行)。
专门指定55端口配置到phpoldwww目录成功，但第一次是想指定77端口，出现not allowed to use restricted net错误，意思是群晖77端口被限制了，换其他就行了。

四，<strong>boblog安装不了解决办法</strong>：
通过boblog安装目录install下的install.php来安装程序时，最后一步提示建立数据库表有问题。当时没有截图，大概意思是
your MariaDB server version for the right syntax to use near 'TYPE=MyISA 关键是TYPE=MyISA 。这个命令在php5.6以上高版本中已经被禁用了。
解决办法是通过phpmyadmin手动创建boblog数据库，之后把在qnap当时备份的sql文件导入进去就行了。
boblog的安装能正确创建配置文件，就是不要通过install来安装，直接强行建立含有数据的数据库就能用了。

五，<strong>Maria DB5和Maria DB10</strong>
我好像只能连接Maria DB5 数据库，root/h.....8.....? localhost 。
可惜Maria DB10一直不行，有空再试。
localhost
localhost:3307
127.0.0.1 以及后面加3307端口
localhost:/run/mysqld/mysqld10.sock
localhost:/run/mysqld/mysqld.sock? 都没有连接Maria DB10成功。
注意：如果安装了Maria DB5和Maria DB10两个套件。在通过phpmyadmin登陆时就必须选择是Maria DB10不是Maria DB5，两个的密码是不同的，是两个完全分开的数据库。

<span style="color: #ff0000;"><strong>? 2021年春节的时候这个问题解决了
<span style="color: #000000;">估计是调整www配置时，卸载再重新安装mdb5和mdb10等调试时恢复正常的。
目前我的wordpress是安装在mdb10上的，数据库主机是 127.0.0.1:3307
注意的是mdb10的root密码比较复杂，需要大小写字母数字和特殊符号。</span></strong></span>

<img src="https://img.cyoy.cn/hexo/images/2021/02/mao2021-02-22-14-03-51-514.png" />













