---
title: "Windows Vista中IIS7的安装及配置ASP+Access环境"
date: 2008-02-08 10:03:03
cid: 130
categories: [网络]
layout: post
---

过年了，我刚买了联想的扬天A6000V电脑，配置的是windows vista home P版。
为了安装调试pjblog等程序，上网查找了很多，到现在基本配置asp+access成功。
一、这是主要的一篇参考文章。
原文：http://www.xujiwei.cn/blog/?id=633
装上了Windows Vista，然后知道了里面带了IIS，还是7的，就想耍耍，从安装到配置感觉比Windows 2003下面的IIS6多了许多需要注意的地方。
IIS7的安装
windows Vista中IIS7是默认不安装的，所以在安装完Windows Vista之后如果需要安装IIS7的话，就要自己动手了。安装的步骤为：开始》控制面板》程序》打开或关闭Windows功能》Internet信息服 务。IIS7安装时需要注意的是，如果需要ASP、ASP.NET等的支持，是需要把功能模块给装上的，默认是不安装的。
控制面板中“程序”的位置
<a href="https://img.cyoy.cn/hexo/images/2008/02/20251127100039388.jpg"><img class="aligncenter size-full wp-image-5552" src="https://img.cyoy.cn/hexo/images/2008/02/20251127100039388.jpg" alt="" width="576" height="432" /></a>

“程序”中“打开或关闭Windows功能”的位置<a href="https://img.cyoy.cn/hexo/images/2008/02/20251127100050667.jpg"><img class="aligncenter size-full wp-image-5553" src="https://img.cyoy.cn/hexo/images/2008/02/20251127100050667.jpg" alt="" width="576" height="432" /></a>

如图，安装IIS7时需要选择要使用的功能模块<a href="https://img.cyoy.cn/hexo/images/2008/02/20251127100100427.jpg"><img class="aligncenter size-full wp-image-5554" src="https://img.cyoy.cn/hexo/images/2008/02/20251127100100427.jpg" alt="" width="576" height="432" /></a>

IIS7安装完成之后可以在开始菜单的所有程序中看到“管理工具”，其中有一个“Internet信息服务管理器”，如果没有可以按以下步骤添加：开 始》右击属性》“开始”菜单选项卡》自定义》把“系统管理工具”设置为“在所有程序菜单显示”或者“在所有程序菜单和开始菜单上显示”。<a href="https://img.cyoy.cn/hexo/images/2008/02/20251127100118361.jpg"><img class="aligncenter size-full wp-image-5555" src="https://img.cyoy.cn/hexo/images/2008/02/20251127100118361.jpg" alt="" width="576" height="432" /></a>

打开Internet信息服务管理器就可以看到IIS7的主页了<a href="https://img.cyoy.cn/hexo/images/2008/02/20251127100130851.jpg"><img class="aligncenter size-full wp-image-5556" src="https://img.cyoy.cn/hexo/images/2008/02/20251127100130851.jpg" alt="" width="576" height="432" /></a>

IIS7配置ASP+Access使用环境

默认装完IIS7之后，使用ASP程序会发现提示数据库连接失败，在网上找了找，说是因为MS Jet引擎改变了临时目录的位置，但是又没有对临时的存取权限，导致数据库使用失败。
先要设置应用程序池(Application Pool)为Classic .NET AppPool，而不是默认的Default AppPool，可以在网站目录里对每个站点设置，也可以在站点进行单独设置。选择好要设置的站点之后，点右边的“基本设置”即可调出应用程序池设置对话 框。
<a href="https://img.cyoy.cn/hexo/images/2008/02/20251127100142572.jpg"><img class="aligncenter size-full wp-image-5557" src="https://img.cyoy.cn/hexo/images/2008/02/20251127100142572.jpg" alt="" width="576" height="432" /></a>

<a href="https://img.cyoy.cn/hexo/images/2008/02/20251127100152442.jpg"><img class="aligncenter size-full wp-image-5558" src="https://img.cyoy.cn/hexo/images/2008/02/20251127100152442.jpg" alt="" width="576" height="432" /></a>

然后再给“系统盘:WindowsServiceProfilesNetworkServiceAppDataLocalTemp”目录添加一个 “Authenticated Users”的用户，其中AppData目录是隐藏的，在进入的时候可以直接在地址栏输入路径，或者在文件夹选项里显示隐藏文件。
设置权限步 骤：右击Temp文件夹，选择“属性”》选择“安全”选项卡》单击“编辑”》出来“Temp 的权限”对话框，单击“添加”，在下面的“输入对象名称来选择”中输入Authenticated Users，确定》返回到“Temp 的权限”，将Authenticated Users的权限中的完全控制给勾上，确定》确定。
<a href="https://img.cyoy.cn/hexo/images/2008/02/20251127100203465.jpg"><img class="aligncenter size-full wp-image-5559" src="https://img.cyoy.cn/hexo/images/2008/02/20251127100203465.jpg" alt="" width="576" height="432" /></a>

启用父路径支持
在站点主页上选择“ASP”，然后在“行为”组中将“启用父路径”设置为True即可。

至此，完成了Windows Vista中IIS7的安装及使用ASP+Access的配置。

二、到此时，我基本已经能成功运行有关程序了。但在安装Pjblog等时，出现数据库联接错误的提示，找了很多办法也不成功。换用低版本的pjblog 的 conn.asp，有时能成功，但登陆后明明已经进入，却又退出来了。后来经过多次尝试，才发现还需要再对网站中程序安装目录的权限作进一步设置才行 （NTFS分区格式）。
原文：　http://www.zhccc.cn/iis-install-asp.html

针对上面文章中的文件夹权限设置问题，表达的方法还不全面，需要再作以下设置（如果硬盘的分区是NTFS。我就是这个问题导致不能成功的。）
如果网站的程序是IIS的，而磁盘格式是NTFS。首先在选择IIS 7左侧框架中的默认的网站图标，在右侧的菜单中，选择“基本设置”，定义到网站程序所在的磁盘位置。打开“我的电脑”，到网站程序所在的文件夹，点击鼠标 左键，选择“安全”选项卡，把“只读”属性去掉，然后添加 “Authenticated Users”并赋予所有权限。

“Authenticated Users”用户，将Authenticated Users的权限中的完全控制打开。 这里需要注意的是AppData目录是隐藏的，还需要选择“工具”-&gt;“文件夹选项”-&gt;“查看”-&gt;“显示隐藏的文件和文件夹”才 行。 因为MS Jet引擎改变了临时目录的位置，但是又没有对临时的存取权限，导致数据库使用失败。











