---
title: "群晖启用 DNSPod DDNS"
date: 2024-12-14 21:41:40
cid: 1407
categories: [Nas]
layout: post
---

<a href="https://cloud.tencent.com/document/practice/302/79809" target="_blank" rel="noopener">https://cloud.tencent.com/document/practice/302/79809</a>?参考这篇文章。

一、腾讯云购买的域名添加 A 记录，数字可以先随意填。比如8.8.8.8

二：在群晖的“外部访问” DDNS里，填写域名的SecretId和SecretKey
这两个数值在?<a href="https://console.dnspod.cn/account/token/apikey" target="_blank" rel="noopener">https://console.dnspod.cn/account/token/apikey</a>?里，
创建后必须当时记下，之后就不能查看key了。

<img class="" src="https://img.cyoy.cn/hexo/images/2024/12/7NB20e20241128200453.jpg" alt="群晖启用 DNSPod DDNS" width="552" height="295" />
<div class="tse-level-1 tse-markdown-ul" data-slate-node="element"><span data-slate-string="true">主机名称：填写您购买的域名。</span></div>
<div class="tse-level-1 tse-markdown-ul" data-slate-node="element"><span data-slate-string="true">用户名/电子邮箱：填写您获取到的 DNSPod 的 Token ID。</span></div>
<div class="tse-level-1 tse-markdown-ul" data-slate-node="element"><span data-slate-string="true">密码/密钥：填写您获取到的 DNSPod 的 Token。</span></div>
<div class="tse-level-1 tse-markdown-ul" data-slate-node="element"><img alt="群晖启用 DNSPod DDNS" class="" src="https://img.cyoy.cn/hexo/images/2024/12/7N8SbS20241128200320.jpg" width="560" height="349" /></div>











