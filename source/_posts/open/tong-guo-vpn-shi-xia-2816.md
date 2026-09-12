---
title: "通过VPN实现外网远程连接iscsi（一）--基础篇"
date: 2011-06-16 16:28:04
cid: 464
categories: [Nas]
tags: [iscsi]
layout: post
---

<p>　　如果你对iscsi是什么，或者在局域网内也不知道如何设置访问iscsi，那先阅读下面两篇文章：</p>
<p>　　1、winxp如何配置访问iscsi　 https://cyoy.cn/nas/695.html　</p>
<p>　　2、win7如何配置访问iscsi　　https://cyoy.cn/nas/702.html</p>
<p>　　两者的差别就是win7和win vista内置了iscsi的连接发起程序（有中文），而winxp则需要另外安装专门的英文软件（只有英文，不需要再找中文版本了）。</p>
<p>　　本人所用<span class="Apple-style-span" style="color: rgb(0, 0, 0); font-size: 13px; line-height: 24px; ">的NAS是威联通的TS259Pro+（硬件配置比较高），IP地址设置成192.168.0.111，Nas后面的Lan接口是千兆；</span></p>
<p><span class="Apple-style-span" style="color: rgb(0, 0, 0); font-size: 13px; line-height: 24px; ">　　路由器是ipTIME N5004，其有线Lan口也是千兆（与Nas相匹配，有线环境下提供千兆连接），无线信号连接的速率是300M，路由器地址是192.168.0.1。NAS和路由器通过有线连接。路由器支持VPN功能，在路由器的后台设置中有相应的选项。</span></p>
<p>　　在局域网内，只要连接上路由器的信号（无线、有线均可）你就可以直接用iscsi的发起程序来连接到Nas的iscsi上并开始使用。但你如果外出时或者想从办公室等远离局域网的地方还想远程访问到家里或者单位的局域网，只能通过VPN方式。</p>
<p>　　VPN是什么呢？<span class="Apple-style-span" style="color: rgb(0, 0, 0); font-size: 14px; line-height: 25px; ">VPN英文全称是&ldquo;Virtual Private Network&rdquo;，翻译过来就是&ldquo;<a href="http://baike.baidu.com/view/480950.htm" style="text-decoration: underline; color: rgb(19, 110, 194); " target="_blank">虚拟专用网络</a>&rdquo;。vpn被定义为通过一个公用网络（通常是因特网）建立一个临时的、安全的连接，是一条穿过混乱的公用网络的安全、稳定隧道。</span></p>
<p><span class="Apple-style-span" style="color: rgb(0, 0, 0); font-size: 14px; line-height: 25px; "><span class="Apple-style-span" style="line-height: normal; font-size: 12px; color: rgb(34, 34, 34); ">　　用非专业的话说就是在已经连接上互联网的前提下，VPN能提供一个专门的通道，虚拟出一个局域网。只有知道密码并成功登陆的用户，才能通过VPN节点（路由器）访问到与叫路由器相连的局域网。</span></span></p>
<p><span class="Apple-style-span" style="color: rgb(0, 0, 0); font-size: 14px; line-height: 25px; "><span class="Apple-style-span" style="line-height: normal; font-size: 12px; color: rgb(34, 34, 34); ">　　实际情况就是你首先在办公室等外网能通过internet访问到家里的Nas服务器，然后外网中的电脑通过设置好用户名和密码的VPN连接登陆到家里路由器上。这时家里的路由器会把办公室等远程中的电脑看成是与之相连的局域网中的设备，形成一个虚拟的扩大的局域网。这时再用办公室电脑的Iscsi发起程序就能访问到家里的ISCSI了。</span></span></p>
<p>　　本人知识和能力有限，说了这么多，不知道大家明白吗。</p>














