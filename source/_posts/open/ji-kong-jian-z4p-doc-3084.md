---
title: "极空间Z4P+ Docker部署MariaDB+phpmyadmin"
date: 2025-12-13 11:14:00
cid: 1486
categories: [Nas]
tags: [极空间]
layout: post
---

一：Docker 安装MariaDB:
　　仓库查找 mariadB，选择linuxserver/mariadb，下载latest版本。
![linuxservermariadb.jpeg][2]
　　在极空间硬盘docker的安装目录下新建mariadb 目录，配置如下:

![mariadblj.jpeg][3]
　　其实docker／mariadb下的data目录也可不要建立，默认的config不能改。
　　在环境变量中增加一行 MYSQL_ROOT_PASSWORD = 123456

![mbbl.jpeg][4]
　　本地端口 随便填比如23306（这是外网访问用的，Nas不建议外网）
　　容器端口保持不变，3306就行。
　　启动就行了。

二：Docker 安装PhpMyadmin:
　　phpmyadmin是管理mb 数据库的程序。安装如下：
　　docker仓库就搜索 phpmyadmin,还是下载latest,
　　本地端口自定，比如8081。容器端口 80 不变，
环境变量必须增加一条　PMA_ARBITRARY =1 ,允许手动输入MySQL的IP地址

  ![phpmy.jpeg][5]

三：phpmyadmin管理 mariadb数据库：
　　在Docker容器 中选择 linuxservermariadb项目，点屏幕右上角3个小点图标，
再“详情” -- “网络”，得到一个 IP 地址，记下这个地址。

![phpmy02.jpeg][6]

   点 phpmyadmin项目的远程访问链接，就进入管理界面了。
比如 http://nas_ip:8081/  8081就是填写的本地端口号。

![madbdz.jpeg][1]

*注意：极空间系统以及Docker重启后，这个172.17.0.7地址会改变，需要及时更新。如果在这个mariadb中建立了网站，也需要修改网站的配置文件。这一点不如直接安装宝塔面板更方便。*


  [1]: https://img.cyoy.cn/hexo/images/2025/12/507009601.jpeg
  [2]: https://img.cyoy.cn/hexo/images/2025/12/1452278139.jpeg
  [3]: https://img.cyoy.cn/hexo/images/2025/12/2503496822.jpeg
  [4]: https://img.cyoy.cn/hexo/images/2025/12/24914223.jpeg
  [5]: https://img.cyoy.cn/hexo/images/2025/12/322349812.jpeg
  [6]: https://img.cyoy.cn/hexo/images/2025/12/284220734.jpeg
  













