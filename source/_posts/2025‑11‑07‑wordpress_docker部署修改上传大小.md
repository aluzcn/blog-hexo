---
title: "wordpress docker部署修改上传大小"
date: 2025-11-07 21:13:00
cid: 1416
categories: [Nas]
tags: [极空间]
layout: post
---

<a href="https://img.cyoy.cn/hexo/images/2025/11/20251109112551846.jpeg"><img class="aligncenter size-full wp-image-5493" src="https://img.cyoy.cn/hexo/images/2025/11/20251109112551846.jpeg" alt="" width="1663" height="542" /></a>
建议Z4pro+ Docker下载 elestio/wordpress 这个镜像，而不是最多的那个。

<a href="https://blog.51cto.com/u_16099205/13992354">wordpress docker部署修改上传大小_mob6454cc673226的技术博客_51CTO博客</a>

三、解决本地上传插件最大不能超过2M的问题(这个问题的主要原因是
默认php.ini文件中限制最大上传文件为2M，但默认情况下又没有这个问题，
所以解决思路是：新建info.php文件在浏览器中执行》找php.ini存放位置》
新建php.ini文件》写入最大允许限制设置。

1、首先在Docker容器中网站根目录下建一个info.php文件，操作如下：
<em><strong>直接在"Docker 容器"--"elestio/wordpress " 运行 SSH ,默认的/bin/bash? root</strong></em>
cd /var/www/html ,默认应该就是进入这个目录，然后再这个目录中新建info.php文件，
可以通过ls 命令查看有没有建立成功。
touch info.php
echo "&lt;?php echo phpinfo(); ?&gt;" &gt;info.php

打开浏览器运行这个文件，找出php.ini文件存放位置。
<a href="http://192.168.0.***:9000/info.php" target="_blank" rel="noopener">http://192.168.0.***:9000/info.php</a> ? 之前没有这个文件，所以应该打不开的

<a href="https://img.cyoy.cn/hexo/images/2025/11/20251107212414818.webp"><img class="aligncenter wp-image-5484" src="https://img.cyoy.cn/hexo/images/2025/11/20251107212414818.webp" alt="" width="687" height="220" /></a>

2、在运行目录里新建php.ini文件并写入最大上传文件限制为64M。

cd /usr/local/etc/php
touch php.ini
echo "upload_max_filesize = 64M" &gt;php.ini (修改最大上传文件为64M)
echo "post_max_size = 64M" &gt;&gt;php.ini (修改文章最大尺寸为64M)
echo "max_execution_time = 300" &gt;&gt;php.ini (修改最大执行时间为300,即页面等待时间）
exit (退出容器)，忽略错误提示。

在Docker中重启wordpress。

下面是我用putty登录极空间Z4Pro+后的操作记录:
<pre class="lang:default decode:true">cd /var/www/html
root@25115b157ecd:/var/www/html# touch info.php
root@25115b157ecd:/var/www/html# echo "&lt;?php echo phpinfo(); ?&gt;" &gt;info.php
root@25115b157ecd:/var/www/html# cd /usr/local/etc/php
root@25115b157ecd:/usr/local/etc/php# touch php.ini
root@25115b157ecd:/usr/local/etc/php# echo "upload_max_filesize = 64M" &gt;php.ini
root@25115b157ecd:/usr/local/etc/php# echo "post_max_size = 64M" &gt;&gt;php.ini
root@25115b157ecd:/usr/local/etc/php# echo "max_execution_time = 300" &gt;&gt;php.ini
root@25115b157ecd:/usr/local/etc/php# exit</pre>
&nbsp;











