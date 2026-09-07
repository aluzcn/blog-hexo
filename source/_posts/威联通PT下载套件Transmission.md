---
title: 威联通PT下载套件Transmission
date: 2011-04-26 14:58
tags: []
categories: []
---

　群晖的NAS内置的下载程序能直接下载PT，威联通的则需要另外安装Transmission套件。
以前安装比较麻烦，现在方便多了。
　　到威联通的后台取得QPKG，里面已经有Transmission了。下载安装它。
 https://img.cyoy.cn/hexo/images/2011/04/transmission.png

  　　安装完成后，到它的选项中进入https://cyoy.cn:80/transmission/
编辑Settings.json文件

https://img.cyoy.cn/hexo/images/2011/04/Snap111.jpg

“rpc-password”: “aaaaaa”,
“rpc-port”: 9091,
“rpc-url”: “/transmission/“,
“rpc-username”: “admin”,
　　第一行是密码，第二行是端口，第三行是用户名。修改后点上面的Save保存。
　　之后就可以用　https://cyoy.cn:9091
来登陆了（以上均假设域名是yocn.net），登陆用户名和密码就是你刚才修改的。
　　注意：transmission的登陆名和密码和你的NAS后台管理登陆用户名和密码
是两回事。当然你也可以修改成一样，不过对下载程序来说还是简单一点好。出于
安全考虑不要在网站上频繁使用后台的管理密码，那是你的最高权限。
　　另外：建议安装transmission-remote这个专门的软件来管理（添加、删除、
设置等）PT下载。这个transmission-remote是安装在电脑上供操作
NAS的transmission套件的，它本身不是transmission下载套件。不要搞混了哟。
　　下载地址：http://code.google.com/p/transmission-remote-dotnet/
　　这是我放在快盘供下载的链接：　http://www.kuaipan.cn/file/id_2334211646161921.html


作者: 瑶Ba
链接: https://cyoy.cn/posts/2011/04/26/07/44/00/?highlight=%E7%99%BB%E9%99%86%E7%94%A8%E6%88%B7%E5%90%8D
来源: 瑶Ba 笔记
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。