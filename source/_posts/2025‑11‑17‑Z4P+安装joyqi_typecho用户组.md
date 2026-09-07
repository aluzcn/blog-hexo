---
title: "Z4P+安装joyqi_typecho用户组"
date: 2025-11-17 10:27:00
cid: 1417
categories: [Nas]
tags: [极空间]
layout: post
---

Docker安装成功后，过一段时间会莫名其妙地自己修改用户组和权限。
下面的操作只是学习和尝试操作修改目录和里面的文件：
<img class="aligncenter size-full wp-image-5498" src="https://img.cyoy.cn/hexo/images/2025/11/20251117102607544.jpeg" alt="" width="959" height="319" />
以/bin/bash root登录
修改var目录为www-data 默认的
chown -R www-data:www-data var

修改目录app以及所有它里面包括子目录和文件（默认的程序目录）为root
先进入app的上一级目录也就是根目录，然后执行
chown -R root:root /app
恢复到默认的www-data
chown -R www-data:www-data /app

<strong>下面是容器根目录的默认配置</strong>

<a href="https://img.cyoy.cn/hexo/images/2025/11/20251117102606511.jpeg"><img class="aligncenter size-full wp-image-5497" src="https://img.cyoy.cn/hexo/images/2025/11/20251117102606511.jpeg" alt="" width="1048" height="910" /></a> <a href="https://img.cyoy.cn/hexo/images/2025/11/20251117102607544.jpeg"><img class="aligncenter size-medium wp-image-5498" src="https://img.cyoy.cn/hexo/images/2025/11/20251117102607544.jpeg" alt="" width="959" height="319" /></a>











