---
title: "安装transmission体会(手动启动)"
date: 2011-02-23 15:58:57
cid: 395
categories: [Nas]
layout: post
---

　　威联通的NAS确实不如群晖的好用，安装transmission一上午还是没搞定自动启动。好在手动启动也不难。
　　登陆前注意威联通后台“网络服务”中“Telnet / SSH”设置允许的联想方式和端口，然后在pietty等软件中配对填写好才能登陆成功
　　第一步，用putty或者PieTTY以NAS的管理用户员和密码登陆NAS。出现[~] #
　　第二步，ipkg update
　　第三步，ipkg install transmission
　　第四步，transmission-daemon -p 9091 -f -T -a *.*.*.* -w /share/HDA_DATA/download/ -g /share/HDA_DATA/download/config/
　　这样就可以通过9091口或者用transmission远程控制软件来下载了，以后每次重新启动NS后只要执行第四步就可以正常下载了，没有[~] #，直接关闭putty就行了。（可以复制第四步代码填写到[~] #后面并回车执行）
　　如果要停止transmission可以在[~] #下执行killall transmission-daemon命令，或者在执行第四步后的屏幕中执行ctrl C退到[~] #也能停止。
