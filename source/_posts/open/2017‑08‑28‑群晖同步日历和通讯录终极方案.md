---
title: "群晖同步日历和通讯录终极方案"
date: 2017-08-28 20:08:00
cid: 1444
categories: [Nas]
tags: [群晖]
layout: post
---

iCal Import/Export CalDAV 这个软件尽管收费但是英文的，不方便。
又在google商店中找到一个 收费但支持中文的DAVdroid，
 DAVdroid - CalDAV/CardDAV Synchronization 群晖Nas的日历管
理很方便，在https://calendar.aluz.cn中已经有一个默认的
My Calendar日历，你可以 新建一个来使用。
 1. 先建只能同步日历的帐户 http://aluz.synology.me:9009/caldav.php/ 
(后面必须有一个 / )，下面填写用户名 per_hunter和密码，OK。
 2. 创建帐户 per_hunter@local.host 这个也可以只保留前面的per_hunter，
随便吧，默认也行,我最后选的是per_hunter@calendar,另一个选@address，以示区别。

![请输入图片描述][1]

之后就可以显示两栏CarDAV目录，一个是通讯录，一个是日历（如果你有新建的日历也能显示列表）。

![请输入图片描述][2]

至此同步日历没有问题了，但第一栏的通讯录下面列表中是空的，说明没有建立通讯录。这时尽管可以在 手机的设置--帐户
中同步，但实际上只同步了日历而通讯录则是空的。可以打开联系人，选择帐户查看，它 里面一个记录也没有。
   3. 网上查以半天，发现 http://192.168.1.111:8008/addressbooks/users/per_hunter/addressbook/ 可以打开 并发现前几天从
套件CardDAV Server中导入的google通讯录 。想了半天，估计是群晖没有把这通讯录功能 完全开发出来。
   4. 再次启动手机上的DAVdroid，重新再建一个专门同步通讯录的帐户。http://aluz.synology.me:8008/addressbooks/users/

![请输入图片描述][3]

![请输入图片描述][4]

勾选一下通讯录就开始同步了。另手机产生两个帐号，但一切ok

  [1]: https://img.cyoy.cn/hexo/images/2017/08/214600.png
  [2]: https://img.cyoy.cn/hexo/images/2017/08/214949.png
  [3]: https://img.cyoy.cn/hexo/images/2017/08/221412.png
  [4]: https://img.cyoy.cn/hexo/images/2017/08/wp-image-1517325347.png













