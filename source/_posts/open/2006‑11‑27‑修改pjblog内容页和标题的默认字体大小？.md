---
title: "修改pjblog内容页和标题的默认字体大小？"
date: 2006-11-27 11:11:44
cid: 212
categories: [网络]
layout: post
---

　　 
	<strong>修改日志内容字体大小：</strong><br /> global.css里面找到 font-size:12px; 改到14px左右应该就可以了。<br /> 另外字体设置也为修改成：font-family: Verdana, Arial, Tahoma, sans-serif;<br /> <strong><br /> 修改日志标题字体大小：</strong><br /> layout.css里面找到<br /> /*---日志标题框--*/<br /> .Content-top .ContentTitle{padding:8px 4px 4px 2px;font-size:13px;display:inline;}<br /> ContentTitle　==就是内容标题的意思，<br /> 其中修改font-size:13px就行了。<br /> <br /> .Content-top .ContentAuthor是控制日志作者等内容。<br /> ++++++++++++++++++++++<br /> <br /> 我刚才又搜索了一下，发现有两种不同的方法，不知该用哪一个：<br /> 1、把layout.css打开，找到下面这句：<br /> /*---日志内容框--*/<br /> .Content-body {}<br /> 根据你的需要更改，比如.Content-body {font-size: 14px;}<br /> 2、在皮肤的 global.css 里，有个：font-size:12px; 把其数值改大<br /> <br /> +++++++++++++++++++++<br /> global.css 里是全局的，只要在其它css没有详细定义的文字都会以这里为标准。<br /> 日志内容框就只是日志部分的，如果这里定义了，global.css的就会在这里被忽略。<br /> <br /> ++++++++++++++++++++++<br /> margin不是字体大小，是调整模块位置的。<br /> 把 font-size: 11px; 加入到那个大括号里就好了。<br /> <br /> ++++++++++++++++++++++<br /> 改成这样<br /> .Content-body{font-size: 14px;margin:8px auto;overflow:hidden;text-align:left;width:96%;line-height:150%}<br /> <br /> =============================<br /> 注意有的css项目定义不全，会造成不好修改。这是简蓝的 layout.css.<br /> <br /> /*---日志标题框--*/<br /> .Content-top{height:18px;background:#FFFFFF;color:#366AB3;text-align:left;overflow:hidden;padding-top:2px;border-top:0px solid #FFFFFF;border-bottom:0px solid #FFFFFF}<br /> .Content-top .ContentLeft{width:8px;height:30px;background:#FFFFFF;float:left;margin-top:-7px}<br /> .Content-top .ContentRight{width:8px;height:30px;background:#FFFFFF;float:right;margin-top:-7px}<br /> .Content-top .ContentTitle{padding:8px 4px 4px 2px;font-size:14px;display:inline;}<br /> .Content-top .ContentAuthor{font-size:14px;padding-top:4px;padding-left:3px;font-size:12px;border-top:1px dotted #076AA6;margin:0px;font-weight:100;display:inline;}<br /> <br /> 其中最好一句 .Content-top .ContentAuthor　中的第一个字体大小14px是定义日志标题的，后面的12px是定义日志作者等内容的。另外上面还有一些是定义标题栏的高度的。可以多试试。<br /> <br /> ==========================<br /> <br /> 　再比如MilesBlog风格中：<br /> .Content-top .ContentTitle{display:inline;margin:0px 0px 0px 0px;font-size:22px;color:#acc414;padding:0px 4px 0px 1px;}<br /> 中的22px就是定义日志标题整个表格框架高度的。<br /> <br /> ================================<br /> <strong>请问如何更改文章标题的字体颜色与大小?</strong><br /> 预览模式: 普通 的时候。感觉文章标题字体大了，颜色也想换一下。请问应该更改该皮肤的哪个文件，如何更改？<br /> 答：皮肤目录文件里的link.css<br /> <br /> <span class="bold"><strong>請問要怎么調整行距?<br /> </strong>　　打开此Skin下的layout.css下找到 <div id="code0" class="msgborder"><strong>













