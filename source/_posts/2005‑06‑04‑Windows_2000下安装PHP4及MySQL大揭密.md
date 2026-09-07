---
title: "Windows 2000下安装PHP4及MySQL大揭密"
date: 2005-06-04 11:30:18
cid: 316
categories: [网络]
layout: post
---

<a href="https://img.cyoy.cn/hexo/images/2005/06/20251127104535496.gif"><img class="aligncenter size-full wp-image-5582" src="https://img.cyoy.cn/hexo/images/2005/06/20251127104535496.gif" alt="" width="630" height="70" /></a>

我的php4和mysql的软件包是php-4.0.1pl2-Win32.zip、mysql-3.23.19-beta-win.zip。

先安装mysql，用winzip8.0打开软件包进行完全安装，默认安装路径为:c:mysql；
安装完成后，打开“开始”按钮中的“运行”，输入命令：C:mysql inmysqld-nt.exe --install，并执行；
打开“开始”按钮下的“程序”=》“管理工具”=》“服务”，找到“mysql”服务，启动它；
至此，mysql安装完成，重启win2000adanced server。您还可以打开C:mysql inwinmysqladmin.exe，在第一次用它时，需要建立管理员名及密码，我分别设置为root和（yourpassword）。关闭它后，程序自动在状态行下建立一个“红绿灯”的小图标。
现在开始安装php4，将软件包先用winzip解压到c:php4下，再将目录下的所有dll文件拷到c;winntsystem32下，不要覆盖已有的dll文件；接着将目录下的php.exe和php.ini-dist两个文件拷到c:winnt下；
将c:winntphp.ini-dist改名为php.ini,并打开它,找到;Windows Extensions,将extension=php_calendar.dll、extension=php_zlib.dll、extension=php_ldap.dll前的“；”去掉，关闭该文件。
打开“开始”按钮下的“程序”=》“管理工具”=》“internet服务管理器”，选中“默认web站点”，打开它的“属性”窗口。在“web站点”页下，改变“IP地址”：“全部未分配”为“（您机子的ip地址，例如：202.195.243.131）”；“TCP端口”为“80”。
接着，选中“主目录”页，单击“应用程序设置”下的“配置”按钮后，在新窗口下单击“添加”按钮；在“可执行文件”中输入“C:WINNTphp.exe %s %s”，在“扩展名”中输入“.php”，点击“确定”。
接着，选中“ISAPI筛选器”页，单击“添加”按钮；在“筛选器名称”中输入“php”，在“可执行文件”中输入“C:WINNTsystem32php4isapi.dll”，点击“确定”。
接着，选中“文档”页，单击“添加”按钮；在“默认文档名”中输入“index.php”，点击“确定”，并将其提高到最高级。您还可以添加常用的php文件名，如：“default.phtml”、“index.php3”等。
关闭所有窗口，重启系统后，可打开IE浏览器进行测试。












