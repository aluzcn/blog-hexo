---
title: "本地nas导入wordpress数据库"
date: 2016-01-27 15:10:28
cid: 595
categories: [Nas]
layout: post
---

<p>　　Qnap的Nas现在不能在后台自动更新插件和主题了，能下载但不能安装提示错误。目前只能手动。</p>

<p><span style="color:#008000;">　　今天晚上固件升级到4.2.0后，用360安全浏览器在wordpress后台尝试两次后终于自动升级成功。<br />
	估计是和Nas的固件有关，所以不行就再等等，反正这也不是关键部分。</span></p>

<p>　　重装wp其实只需要删除根目录的wp-config.php文件，此文件保存有wordpress相关的数据库用户名<br />
	和密码等数据，是网站基本参数的文件。</p>

<p>　　然后进入MySql管理(phpmy....)，删除数据库里面的所有表，或者干脆新建立一个相同名称的空数据库。</p>

<p>再导入完整的数据库。<span style="color:#FF0000;">nas支持gzip</span>。</p>

<p>　　这时如果直接输入http://aluz.33......:88/　可能打不开网站，以为错误了，经常再删除重装陷入循环。<br />
	其实这时只要直接输入 ..88/wp-admin　，强行进入后台调整就行了。</p>

<p>　　或者<span style="color:#FF0000;">在wp_options表单下，修改siteurl文件（序列号一般为1）为自己nas:88&nbsp;域名，再修改home这个文件<br />
	（序列号大约在30-40不等）为自己nas:88</span>&nbsp;域名就ok了。</p>

<p>　　这时再参考 wordpress完美更换域名帖子的办法，选择数据库后通过sql命令：</p>

<p>UPDATE wp_posts SET post_content = replace( post_content, &#39;老域名&#39;,&#39;新域名&#39;) ;</p>

<p>UPDATE wp_comments SET comment_author_url = replace(comment_author_url, &#39;老域名&#39;, &#39;新域名&#39;) ;</p>

<p>　　则帖子里面所有图片的网址也更改过来，good.</p>

<p><span style="color:#FF0000;">UPDATE wp_posts SET post_content = replace( post_content, &#39;yocn.net&#39;,&#39;aluz.3322.org:88&#39;) ;</span></p>

<p><span style="color:#FF0000;">UPDATE wp_comments SET comment_author_url = replace(comment_author_url, &#39;yocn.net&#39;, &#39;aluz.3322.org:88&#39;) ;</span></p>












