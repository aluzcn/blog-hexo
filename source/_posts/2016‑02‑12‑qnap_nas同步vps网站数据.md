---
title: "qnap nas同步vps网站数据"
date: 2016-02-12 18:41:19
cid: 617
categories: [Nas]
layout: post
---

<p>　　<span style="color:#B22222;">参考：</span><a href="https://cyoy.cn/?p=2151"><span style="color:#B22222;">https://cyoy.cn/?p=2151</span></a><span style="color:#B22222;">&nbsp;qnap nas同步指定子文件夹</span></p>

<p>　　在实际过程中使用上面这篇文章的方法，只能将　wordpress　里面wp-content目录里面的<br />
	plugins/uploads/themes等目录同步到Nas的web目录下，而不能同步到nas/web/wp-content目录<br />
	下，也就是说同步只能跟web这个大目录而不能跟它下面的子目录来同步。在nas后台管理里面也<br />
	只能添加根目录web和public、usb等一级目录作为nas端的同步目录，不能选择它下面的目录，<br />
	看来这是nas固件的原因了。</p>

<p>　　想想干脆在nas再建立一个专门用来备份的目录吧。</p>

<p>　　1、先登陆nas后台，找到File Station文件总管，选择&ldquo;磁盘区1&rdquo;右边的+号建立一个目录，比如&ldquo;web整体备份&rdquo;</p>

<p>　　2、进入<script src="../common.js" type="text/javascript"></script><script src="../langs/lang_SCH.js" type="text/javascript"></script><!--StartFragment-->Qsync Central Station，勾选刚刚建立的&ldquo;web整体备份&rdquo;目录同步再选择你想同步的其他目录，比public等<!--EndFragment--></p>

<p>　　3、远程登陆vps，在电脑上Qsync图标上点&ldquo;偏好设定&rdquo;。如下图。</p>

<p>&nbsp;&nbsp;<img alt="75341734" class="alignnone size-full wp-image-2162" height="501" src="https://img.cyoy.cn/hexo/images/2016/02/75341734.jpg" style="" title="" width="608" /></p>

<p>　　这样vps网站的所有数据都传到nas上了，以后需要时只要把相关如图片文件复制到nas/web/wp-contont<br />
	目录中覆盖就行了。这样干脆彻底地备份数据了。</p>

<p>　　总结，qnap的同步软件所能够同步的目录必须是在第2步中能事先选择设定好的。对nas来说只能是根目<br />
	录，不能是子目录，而电脑端是可以任何一个目录。</p>












