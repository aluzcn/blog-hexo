---
title: "威联通xdove"
date: 2011-03-10 10:28:00
cid: 408
categories: [Nas]
tags: [配置]
layout: post
---

　　群晖的mail station比较简单，安装后绑定域名就可以通过web页面或者foxmail等软件进行登陆管理了。它好像就提供这个程序
　　威联通的比较复杂一点，功能确实也强大，但安装调试等都比较麻烦。简要记录一下备查。
　　1、到后台QPKG安装xdove包，并启动它。
　　2、设定好路由器端口转发，以下服务对内和对外的通讯端口（<del datetime="2011-03-13T02:25:05+00:00">这一步最重要，不能DMZ主机，在xdove的快速安装中第一步也是这个提示</del>）。
Port from　 Port to　　Services
6017　　　 　6017　 　　(XMail remote control access)
25　　　　　50025　　　(ESMTP)
110　　　　 50110　　　(POP3)
143　　　　 143　　　　(IMAP)
79　　　　　50079　　　(FINGER)
　　最麻烦是对内和对外口不一样，我当时就是没注意这点走了很多弯路。结束后就OK了。
　　3、登陆Xmail管理：https://cyoy.cn/phpxmail/
　　管理的用户名和密码可以另外设置（我已经设置成和NAS登陆一样admin/.....），你也可以用新建的邮箱用户来登陆，不过没有管理权限。
　　如果想新添用户或者对已有用户进行修改（如密码），则在server domain点List of all the served domains下面的yocn.net前的配置按钮。
　
![请输入图片描述][1]
　　4、建议通过roundcube登陆管理自己的邮箱：
　　https://cyoy.cn/roundcube/index.php　用username@yocn.net形式登陆。这种方式最好，没有乱码。需要注意的是登陆后默认状态下除收件箱外没有其他文件夹。

![请输入图片描述][2]
　　所以你必须自己在“邮箱设置”里的“邮件夹”中建立相应的文件夹，然后再在“偏好设置”中“指定邮件夹”来一一对应好。只有这样你才能够正常使用删除移动等功能，每个用户都必须自己操作一次。
　　所以买威联通就是麻烦。
　　其他的慢慢试吧。
==================================
　　一直以为要想用这个程序就不能DMZ，因为它的内外口映射不同。今天又试了试，确信是可以的。所以上面第2条中关于DMZ的部分有错误。现在我的配置仍然是DMZ+外到内端口的映射。


  [1]: https://img.cyoy.cn/hexo/images/2011/03/Snap1-1.jpg
  [2]: https://img.cyoy.cn/hexo/images/2011/03/Snap22.jpg













