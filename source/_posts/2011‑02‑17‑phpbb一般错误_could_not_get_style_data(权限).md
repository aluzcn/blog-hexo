---
title: "phpbb一般错误 could not get style data(权限)"
date: 2011-02-17 18:26:11
cid: 386
categories: [Nas]
tags: [程序]
layout: post
---

　　将NAS从群晖移动到威联通看来不是很简单的事，本来前面的帖子说过只要整站下载WEB目录下的文件和用phpmyadmin备份整个数据库就行了，实际不是这么简单。
　　接连出现不少小问题，基本都是文件和文件目录属性不对造成的。
　　在新的NAS上解压缩文件后，形成的目录和文件基本都是755属性，而有的程序要求cache/uploads/files等等为可写，所以出现问题。麻烦的是不知道哪些程序下哪些目录和文件需要修改属性。
　　准备等新硬盘到手后，还是老老实实重新安装程序比较好，省得麻烦。
　　phpbb出现“一般错误 could not get style data”后，只要把cache文件夹里所有文件都清掉并设置cache目录和777就行了。
　　wordpress的数据库定时备份插件也有一个目录要修改成777












