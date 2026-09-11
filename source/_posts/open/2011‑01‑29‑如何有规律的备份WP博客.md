---
title: "如何有规律的备份WP博客"
date: 2011-01-29 16:15:12
cid: 360
categories: [Nas]
layout: post
---

我们都知道备份 WordPress 博客应该是规律性的操作，但是事实上往往我们都会因为其它的事情的介入而忘记了。
没有备份博客所产生的后果是非常严重的，假如你的服务器因为某种原因宕掉了，或者网站被黑，而你恰恰又没有备份你的博客，这时候你将使你无法恢复你的博客或者丢失很多重要数据，你除了哭之外，真的没有别的办法了！
下面我们来简单说一下如何快捷备份 WordPress 博客。
<ol>
 	<li>使用 FTP 工具将你的 BLOG 文件全部下载到本地；</li>
 	<li>登录 phpMyAdmin，选择你自己的 WordPress 数据库；</li>
 	<li>确认所有的 WordPress 表以后选择 Export；</li>
 	<li>在 Structure 部分，选择 <em>Add Drop Tables</em>，<em>Add AUTO_INCREMENT</em> 和 <em>Enclose table and field names with backquotes</em>；</li>
 	<li>在 Data 部分将所有选项留空；</li>
 	<li>选择 <em>Save as file</em> 开始下载数据库(如果你的数据库非常大的话你可以选择压缩)。</li>
</ol>
<h3><a name="toc-2"></a>使用 WordPress Database Backup 自动备份数据库</h3>
如果你没有权限登录 phpMyAdmin，那么我推荐你使用插件 WordPress Database Backup。

下面介绍一下 WordPress Database Backup 这个插件的使用。
<ol>
 	<li>下载并激活插件(就不说了，大家应该都知道)；</li>
 	<li>在 WordPress 后台 &gt; 工具会生成一个 Backup 的选项，选择它；</li>
 	<li>在 Table 区域你可以看到默认的备份表，旁边还有一些可选的表（有插件产生的）；<a href="https://img.cyoy.cn/hexo/images/2011/01/20251126202044578.jpg"><img class="aligncenter size-full wp-image-5515" src="https://img.cyoy.cn/hexo/images/2011/01/20251126202044578.jpg" alt="" width="778" height="338" /></a></li>
 	<li>在备份的控制选项中，我们可以选择三种备份方式；一般选择备份到邮箱。<a href="https://img.cyoy.cn/hexo/images/2011/01/20251126202055983.jpg"><img class="aligncenter size-full wp-image-5517" src="https://img.cyoy.cn/hexo/images/2011/01/20251126202055983.jpg" alt="" width="310" height="129" /></a></li>
 	<li>点击右边的备份按钮就可以开始备份，备份成功后文件会自动提示你保存在本地，如果没有提示也可以自己选择保存；</li>
 	<li>另外，该插件还有定时备份功能，备份文件会发送到你自己指定的邮箱中。<a href="https://img.cyoy.cn/hexo/images/2011/01/20251126202107685.jpg"><img class="aligncenter size-full wp-image-5518" src="https://img.cyoy.cn/hexo/images/2011/01/20251126202107685.jpg" alt="" width="722" height="333" /></a></li>
</ol>
<ins><ins id="google_ads_frame2_anchor">?</ins></ins>













