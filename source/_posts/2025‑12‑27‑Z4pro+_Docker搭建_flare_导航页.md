---
title: "Z4pro+ Docker搭建 flare 导航页"
date: 2025-12-27 20:27:00
cid: 1513
categories: [Nas]
tags: [极空间]
layout: post
---

<p>极空间Docker搜索 soulteary/flare，下载latest 。<br />在Docker安装目录下新建 flare目录，其他配置如图：</p>
<p>flare的装载路径为 /app</p>
<p><img src="/usr/uploads/2025/12/3619240268.webp" alt="" width="558" height="303" /></p>
<p>环境变量在默认的最上面两条下，添加以下4条：</p>
<p>FLARE_DISABLE_LOGIN=0<br />FLARE_USER=cyoy<br />FLARE_PASS=homecyj<br />FLARE_VISIBILITY=0</p>
<p>每一条意思如下图：</p>
<p><img src="/usr/uploads/2025/12/1346635786.webp" alt="" width="547" height="361" /></p>
<p><img src="/usr/uploads/2025/12/2047672836.webp" alt="" width="540" height="537" /></p>
<p>之后，进入配置必须输入用户名和密码。<br />进入&nbsp; IP/editor 也需要密码</p>
