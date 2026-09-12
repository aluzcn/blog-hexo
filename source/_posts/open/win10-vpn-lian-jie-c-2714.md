---
title: "Win10 vpn连接错误809怎么解决"
date: 2017-07-26 14:57:40
cid: 694
categories: [网络]
layout: post
---

<p>&nbsp; 家里的路由器是电信的，一直很好。买了一个包月的VPN，奇怪的是在单位用win电脑和iphome6s都正常，</p>

<p>但回家后，手机连接上路由器的无线网络上再连接VPN正常，但家里的win10台式机却怎么也不行，登陆不了。</p>

<p>提示：无法建立与VPN服务器之间的连接，俗称809错误。关闭了卡巴斯基也不行，更改vpn的网络协议也不行。</p>

<p>最后上网查找终于解决。</p>

<p><strong>1、打开运行窗口输入&ldquo;regedit&rdquo;，打开注册表编辑器；</strong></p>

<p><strong>2、删除 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\RasMan\Parameters 下的 ProhibitIpSec 键值</strong></p>

<p><strong>&nbsp; </strong>记得要重新启动一下才生效，Vpn的配置还是预设密钥的L2TP/IPsec</p>














