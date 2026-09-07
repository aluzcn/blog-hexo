---
title: "wordpress完美更换域名"
date: 2016-01-26 09:26:51
cid: 594
categories: [Nas]
layout: post
---

<p>　　昨天晚上晚上上海宾馆里用易名中国的手机客户端购买了 yocn.net顶级新域名，添加访问博客。<br />
	　　百度看了下关于wordpress更换域名的教程，这篇文章图文教程不错，收录备用!</p>

<p>　　http://www.admin5.com/article/20150402/592234.shtml<br />
	　<strong>　那么直接进入主题</strong>:</p>

<p>　　1.首先我们进入网站后台,找到设置-常规，把站点地址(URL)和WordPress地址(URL)这俩个选项填写成你的新域名,然后保存!</p>

<p>　　以上只是更换了网站的url链接地址,但是网站的附件的链接却还是老域名的链接,所以我们要进行第二步。</p>

<p>　　2.然后我们需要打开服务器的phpmyadmin地址,进入wordpress数据库执行以下命令</p>

<p>　　UPDATE wp_posts SET post_content = replace( post_content, &#39;老域名&#39;,&#39;新域名&#39;) ;</p>

<p>　　UPDATE wp_comments SET comment_author_url = replace(comment_author_url, &#39;老域名&#39;, &#39;新域名&#39;) ;</p>

<p>　　如图:</p>

<p>&nbsp;</p>

<center><img alt="1427986959759" class="alignnone size-full wp-image-2033" height="277" src="https://img.cyoy.cn/hexo/images/2016/01/1427986959759.png" width="620" /></center>

<p>&nbsp;</p>

<p>　　至此,你去访问你的新域名，是不是发现,已经全部替换过来了呢!替换域名就简单的俩步,非常简单。</p>

<p>　　顺便说个小常识,如果执行SQL命令的时候,提示表单内缺少值的话,只需要换成IE登录PHPMYADMIN去执行命令即可!</p>

<p>&nbsp;</p>

<center><img alt="14275" class="alignnone size-full wp-image-2034" height="217" src="https://img.cyoy.cn/hexo/images/2016/01/14275.png" width="620" /></center>

<p>&nbsp;</p>














