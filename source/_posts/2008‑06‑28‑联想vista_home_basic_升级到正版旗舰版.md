---
title: "联想vista home basic 升级到正版旗舰版"
date: 2008-06-28 20:41:58
cid: 118
categories: [网络]
layout: post
---

　　 
	　　经过好几次的反复实践，终于成功了。步骤如下：<br/>　　1、按F2进入原机的联想拯救系统，恢复出厂设置。这里所有的联想应用软件都存在并安装好。<br/>　　2、[color=#DC143C]卸载一键恢复5.0软件[/color]。一定要卸载这个软件，否则升级时就会出现蓝屏，我就是在这个问题上吃了苦头。同时也可以卸载pc-clint杀毒软件。<br/>　　3、在没有安装声卡驱动的前提下，用联想vista HP安装盘升级到U版。升级时不要输入序列号，手动选择U版安装。<br/>　　4、其他可以参考下文。<br/><br/>[url=http://itbbs.pconline.com.cn/topic.jsp?tid=8529292]http://itbbs.pconline.com.cn/topic.jsp?tid=8529292[/url]<br/><br/>[url=http://hi.baidu.com/sea1216/blog/item/1eedda24f1b61b368644f90e.html]http://hi.baidu.com/sea1216/blog/item/1eedda24f1b61b368644f90e.html[/url]<br/><br/>[url=http://bbs.yuanyang.ha.cn/dispbbs.asp?boardID=33&ID=8755&page=1]http://bbs.yuanyang.ha.cn/dispbbs.asp?boardID=33&ID=8755&page=1[/url]<br/>　　<br/>　　安装前我先把安装光盘全部复制到硬盘F根目录下，并手动把 F:\SOURCES\INF\SETUP.CFG　用记事本打开修改最后一行将　[DefaultImageSelection]　下面的<br/>Value=YFKBB-PQJJV-G996G-VWGXY-2V3X8　修改成<br/>Value=6F2D7-2PCG6-YQQTB-FWK9V-932CC　也不知没有影响。<br/><br/>　　第一次安装时没有出现序列号，结果在重新启动后出现蓝屏。当时有两种选择，一是继续安装，一是启动原来的，如果选择第一种又是蓝屏，只能通过电源键来启动。所以重新启动第二选择到原来的系统，进入后提示新版本的windows不兼容。这时如果通过点“计算机”的右键来查看属性的话，可能看到windows激活状态为不可用。<br/>　　这时我关闭江民杀毒软件的启动前扫描功能后，再次运行硬盘上的安装文件setup.exe，选择升级，则出现了提示输入序列号的界面，现在正在安装升级过程中......<br/>　　估计第一次安装不成功但清除了原来的序列号和激活等数据，所以第二次又能安装了。等结束后再看吧......<br/><br/>　　我用的序列号是下面第一行的旗舰版：<br/>　　联想旗舰版密匙：6F2D7-2PCG6-YQQTB-FWK9V-932CC<br/>　　　　　　　　　　24J6Q-YJJBG-V4K4Q-2J8HY-8HBQQ<br/>　　家庭高级版密匙：8XPM9-7F9HD-4JJQP-TP64Y-RPFFV<br/>　　商业版密匙：72PFD-BCBK8-R7X4H-6F2XJ-VVMP9<br/><br/>============================================<br/>　　能成功安装旗舰版，但不能激活，后来在网上下载了一个激活软件就OK了。<br/><br/>＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝<br/>　　最终方法　：今天2008年7月3日中午，中午在家还是采取网上有人说过的方法再次更好地成功安装了。<br/>　　1、首先按F2进入联想拯救系统，恢复“出厂设置”的最初机器出厂时的安装系统。恢复后是Vista 家庭高级版（HP），同时系统中已经安装有所有的联想应用软件（一键恢复、成长引擎、通信中心等）。<br/>　　2、再次将联系系统恢复光盘放入光驱并运行，点安装，之后不要输入任何序列号（不要钩选联机激活），之后点下一步将进入一个可以选择安装几种版本Vista的菜单，选择旗舰版（U），点“升级”安装。这样就自动升级到U版了。<br/>　　3、升级结束后，将不能激活。这时填写24J6Q-YJJBG-V4K4Q-2J8HY-8HBQQ这个序列号就能自动激活了（注意不能事先填写，只能到这步再填写）。同时系统中将有所有的联系应用包，省得再次安装了。<br/>　　4、升级在键恢复到5.1版本，再安装声卡等驱动程序。<br/><br/>=============================================<br/>之后再用这种方法升级总是出现蓝屏，参考：<br/>http://blog.pcbeta.com/html/45/t-289545.html











