---
title: "NAS安装transmission支持PT及控制软件下载(详)"
date: 2011-01-12 22:14:42
cid: 12
categories: [Nas]
layout: post
---

　　我把更详细的安装截图放在论坛上了，<strong>https://cyoy.cn/bbs/forumdisplay.php?fid=30</strong>
　　<strong>http://www.transmissionbt.com/</strong>　这也是软件的大本营。
　　我的NAS是群晖D209。今天在家里用高清播放机成功使用PT下载了，账号是从淘宝上购得的。但一直想在NAS上也能成功使用PT来下载，这符合DIY精神。
　　1、到https://github.com/sarav/syno-packager/downloads　下载相应的套件。注意要选择 88f6281的，否则跟CPU不符将不能安装。
　　　<strong>这里有群晖产品的选择目录：http://forum.synology.com/enu/viewtopic.php?f=38&t=14773</strong>
　　2、进入“DSM→系統→套件管理→安裝套件”　网络服务→终端机→SSH开启。补充：要先开启家目录，方法：
　　　　DSM→权限管理→使用者账号→家目录→启动家目录服务，启动后，文件会存在homes/admin/transmission下
　　3、下载PieTTY　http://www.csie.ntu.edu.tw/~piaip/pietty/
　　4、执行PieTTY (IP：NAS ip→连线)
　　　　login as：root　　password：admin的密码
　　　　下指令：transmission-adduser
　　　：准备使用transmission程式的账号（不同的账号分别开启不同的目录）
　　　：9091(默认)
　　　：账号的密码
　　　(以上命令不用加括号和冒号)，执行时你会看到系统的变化
　　5、DSM→系統→套件管理→启动
　　　到此就一切OK了。
　　你可以输入 http://nsa IP:9091　来添加PT并进行简单的管理。
　　建议：在pc端安裝<strong>Transmission Remote</strong>软件来管理PT下载，功能更完整。包括下载速率、时间安排（不同的时间段提供不同的下载带宽）。
　　这是它的网站：http://code.google.com/p/transmission-remote-dotnet　进入后点Downloads进入下载列表，再点Search，选择All downloads就可以看到最新的版本了。高版本在安装时可以选择中文语言包。注意：如果出现不能初始化等，请先安装Microsoft .NET Framework 系统编程框架。
　　我的NAS喜欢白天下载速率控制在50K/s，晚上12点之后就在300K/s，这样兼顾NAS的网页访问功能和下载功能。我的ADSL是4M带宽，最高下载速率能达到400K/s，同时开启下载任务数建议是2，最多不超过3，否则会占用NAS的资源，导致反映迟缓。
　　注意：运行的指令是：transmission-adduser　（是一个整体，中间没有空格）。












