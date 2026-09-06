---
title: "Tinymce-For-Typecho插件"
date: 2025-12-14 22:15:00
cid: 1501
categories: [网络]
tags: [插件]
layout: post
---

<p><a href="https://typecho.work/archives/Tinymce.html">Tinymce是一款适用于Typecho的富文本编辑器插件&nbsp;</a></p>
<p>基于<code>Tinymce5.10.0</code>开发，适用于<code>typecho1.2.1</code>版本</p>
<p><a href="https://github.com/jrotty/Tinymce">GitHub - jrotty/Tinymce: Tinymce for Typecho</a></p>
<p><img src="/usr/uploads/2025/12/633678099.webp" alt="" width="503" height="496" /></p>
<p>下面为测试代码输入功能：</p>
<pre class="language-php"><code>UPDATE typecho_contents SET text = REPLACE(text, 'http://typecho.cyoy.cn/usr/', 'https://aluz.cn/usr/');</code></pre>
