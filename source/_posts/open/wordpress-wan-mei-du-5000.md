---
title: "wordpress完美段首空两格"
date: 2011-01-26 12:49:11
cid: 349
categories: [Nas]
layout: post
---

　修改style.css
　l加入如下代码

   1. p {text-indent:2em;}

　　不过这会影响其他的排版，最好的办法是只限定文章区域的 p 才空两格吗：

  #content .post .post-content p {  text-indent:2em; }














