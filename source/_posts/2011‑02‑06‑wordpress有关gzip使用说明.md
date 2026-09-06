---
title: "wordpress有关gzip使用说明"
date: 2011-02-06 13:22:00
cid: 371
categories: [网络]
layout: post
---

　　老版本的WordPress在后台的“设置-阅读”中原来有是否开始gzip的选项，可从 2.5版本开始取消了 gzip 选项，现在是否启用 gzip 压缩，直接服务器决定。如果服务器使用的是 Apache 2，服务器能采用 mod_deflate 模块来实现 gzip。
　　不过WordPress官方记录了两种启动Gzip压缩的方式，一是通过PHP函式，另一种是通过修改.htaccess。如果你不想使用插件来启动，建议你用语法：
　　方法很简单，编辑wordpress安装根目录下的index.php，在「<?php」之后加入以下语法，然后上传覆盖即可。注意，不是编辑主题风格中的index.php，而是WordPress安装根目录下的index.php。 语法是　ob_start('ob_gzhandler');　另外要注意编辑器。

![请输入图片描述][1]
　　这是截图，其中分开的第3行就是的。
　　现在情况好像复杂了，如果服务器已经启动了gzip压缩功能，建议你就不需要再做修改了。否则服务器和程序两方都做修改，很可能造成冲突。
　　检测服务器是否开启的办法如下：
　　到　http://gzip.zzbaike.com/　中输入你的网址，检测如果已经开启就不要修改了，否则可以按上面的方法修改，当然你也可以在网上搜索.htaccess的方法。
　
![请输入图片描述][2]

　　这是本站的结果，说明服务器已经开启gzip压缩了，不需要再修改。压缩率也高达72.9%。
　


  [1]:  /images/2011/02/Snap1.jpg
  [2]:  /images/2011/02/Snap11.jpg
