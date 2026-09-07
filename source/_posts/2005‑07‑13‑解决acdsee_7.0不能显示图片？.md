---
title: "解决acdsee 7.0不能显示图片？"
date: 2005-07-13 11:21:53
cid: 281
categories: [网络]
layout: post
---

　　 
	<span style="color:Red">以下内容请务必参考此帖的评论</span><br />关于ACD不能显示图象 空白的解决方案  <br />  ACD不能显示图象原因很多 解决方法也比较多 以下是通用的 适合很多不是非常了解计算机的朋友 看到这里这么多朋友不知道如何解决 特奉上小弟的一点点经验 在这里抛砖引玉了<br /><br />　　首先完全卸载掉ACDSEE。<br />　　方法最先是在控制面板里的添加删除程序里把ACD卸掉 然后执行以上的删除任务 <br />1（主要包括 ACD Systems[在C盘的program files]里 和 Program Files<br />Common Files 中的 ACD Systems 两个目录）删除，<br />2同时建议删除注册表中的 <br />HKEY_CURRENT_USERSoftwareACD Systems 和 HKEY_LOCAL_MACHINESOFTWAREACD Systems连同文件夹都删除<br />2还有一个不容易注意到：就是C盘下的windowssystem32下的 ACDSee.scr 这是个屏幕保护程序 如果有其他有关ACDSEE的文件 也都一并删除 达到完美卸载 这是个通用的方法 如果以后遇到卸载不完全的程序也可以用上诉方法卸载<br /><br />4重新安装任何版本英文版再进行汉化。<br /><br />提示数据库改变   不管它  关闭ACD 再重新运行ACD 搞定！ 如果不行 呵呵留帖子联系我：）













