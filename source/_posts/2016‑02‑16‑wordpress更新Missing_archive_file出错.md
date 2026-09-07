---
title: "wordpress更新Missing archive file出错"
date: 2016-02-16 19:56:36
cid: 624
categories: [Nas]
layout: post
---

<p>　　在讯飞的vps上更新wordpress时出现PCLZIP_ERR_MISSING_FILE (-4) : Missing archive file &lsquo;C:\Windows\TEMP/&hellip;<br />
	明显是windows下temp的目录权限不够。</p>

<p>　　网上很多是通过在wordpress的config中添加指定temp来解决，但我用的是vps，不能这么做。</p>

<p>　　远程登陆vps，进入temp目录，点安全，选择user用户，分配除&ldquo;完全控制&rdquo;和&ldquo;特殊的权限&rdquo;<br />
	外的权限就行了。</p>













