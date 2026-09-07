---
title: "nas图片共享外链并wordpress调用"
date: 2020-03-10 23:10:58
cid: 1342
categories: [Nas]
tags: [wordpress]
layout: post
---

1.　nas群晖 photo station的图片一般只能内部查看，如果想外链就是共享。
2.? ? 在photo station选择某一照片，编辑后如下图：

<img src="https://img.cyoy.cn/hexo/images/2020/03/mao2020-03-10-15-05-00-743.png" />

这就是这张选定图片的用途了。“分享至”是将外链提供给指定的用户；“公开共享”是单独这张照片外链给所有人；“添加到共享相册”就是放入到photo statio你事先建立的共享目录。

注意的是单一分享的照片只能单一查看。如果添加到共享相册，别人就能通过链接到的共享相册来查看里面全部的共享照片。

下面这张nas上的照片就是单一公开共享。wordpress默认是不允许直接显示外链图片的，必须再点一次url。这个功能是<a href="https://blog.csdn.net/zzxiang1985/article/details/72864333">External Media without Import</a>　插件来实现的。

注意在媒体库中添加外链时，必须找到nas中图片的另一个链接，用鼠标把photo station共享图片再拖到新窗口就找到了。这样才能添加进媒体库。比如下面这张图片获取的共享外链是　<a href="https://cyoy.cn:66/photo/share/wp85afic/photo_30383236e99988e99fb5e791b632303139e5b9b42f32303139e5b9b438e69c8832342d3235e697a5e585a8e5aeb6e697a0e994a1e9bc8be5a4b4e6b89a_4d59584a5f32303139303832353038303934395f666173742e6a7067">https://cyoy.cn:66/photo/share/wp85afic/photo_30383236e99988e99fb5e791b632303139e5b9b42f32303139e5b9b438e69c8832342d3235e697a5e585a8e5aeb6e697a0e994a1e9bc8be5a4b4e6b89a_4d59584a5f32303139303832353038303934395f666173742e6a7067</a>
但你添加不了媒体库，图片是嵌在station中的，必须再用鼠标拖一次，把它在新窗口打开，找到这个链接才行。

<a href="https://cyoy.cn:66/photo/webapi/thumb.php?api=SYNO.PhotoStation.Thumb&amp;method=get&amp;version=1&amp;size=large&amp;public_share_id=wp85afic&amp;id=photo_30383236e99988e99fb5e791b632303139e5b9b42f32303139e5b9b438e69c8832342d3235e697a5e585a8e5aeb6e697a0e994a1e9bc8be5a4b4e6b89a_4d59584a5f32303139303832353038303934395f666173742e6a7067&amp;rotate_version=0&amp;mtime=1582741152&amp;SynoToken=7l6vqdsj2kh8gofc6baro0odv6">https://cyoy.cn:66/photo/webapi/thumb.php?api=SYNO.PhotoStation.Thumb&amp;method=get&amp;version=1&amp;size=large&amp;public_share_id=wp85afic&amp;id=photo_30383236e99988e99fb5e791b632303139e5b9b42f32303139e5b9b438e69c8832342d3235e697a5e585a8e5aeb6e697a0e994a1e9bc8be5a4b4e6b89a_4d59584a5f32303139303832353038303934395f666173742e6a7067&amp;rotate_version=0&amp;mtime=1582741152&amp;SynoToken=7l6vqdsj2kh8gofc6baro0odv6</a>

&nbsp;

[caption id="attachment_3958" align="alignnone" width="926"]<img class="size-full wp-image-3958" src="https://cyoy.cn:66/photo/webapi/thumb.php?api=SYNO.PhotoStation.Thumb&amp;method=get&amp;version=1&amp;size=large&amp;public_share_id=wp85afic&amp;id=photo_30383236e99988e99fb5e791b632303139e5b9b42f32303139e5b9b438e69c8832342d3235e697a5e585a8e5aeb6e697a0e994a1e9bc8be5a4b4e6b89a_4d59584a5f32303139303832353038303934395f666173742e6a7067&amp;rotate_version=0&amp;mtime=1582741152&amp;SynoToken=7l6vqdsj2kh8gofc6baro0odv6" alt="nas图片" width="926" height="1920" /> 瑶瑶吃饭[/caption]











