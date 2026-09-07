---
title: "TypeCho换Nas域名"
date: 2025-12-08 11:06:00
cid: 1424
categories: [网络]
layout: post
---

参考：
https://xiamp.net/archives/typecho-change-siteurl.html

第一条：

    UPDATE typecho_contents SET text = REPLACE(text,'https://cyoy.cn/','http://9nas.cn:7000/');
另外一条
  
    UPDATE typecho_contents SET text = REPLACE(text,'http://cyoy.cn/','http://9nas.cn:7000/');
非代码形式是这样的

UPDATE typecho_contents SET text = REPLACE(text,'https://cyoy.cn/','http://9nas.cn:7000/');

UPDATE typecho_contents SET text = REPLACE(text,'http://cyoy.cn/','http://9nas.cn:7000/');

建议两条都要执行。
====================

  UPDATE typecho_contents SET text = REPLACE(text, 'http://typecho.cyoy.cn/usr/',  'https://cyoy.cn/usr/');












