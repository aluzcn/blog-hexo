---
title: "群晖Transmission出现403"
date: 2011-03-12 17:54:00
cid: 411
categories: [Nas]
tags: [群晖,配置]
layout: post
---

　　维护NAS确定比较烦人。前天晚上为了更快地看广电的点播节目，把连接在广电路由器上的群晖DS209　NAS关闭了。今天也重新安装了win系统。
　　在安装Transmission remote后，连接群晖的内网就出现“服务器返回403”错误。直接用http://192.168.0.108:9091　则出现如下提示：
<em>403: Forbidden
Unauthorized IP Address.
Either disable the IP address whitelist or add your address to it.
If you're editing settings.json, see the 'rpc-whitelist' and 'rpc-whitelist-enabled' entries.
If you're still using ACLs, use a whitelist instead. See the transmission-daemon manpage for details.</em>
　　到网上搜索了一下，建议采用如下办法：
<em>您好。TR的设置参数（参数配置文件settings.json）请先参考此贴：http://www.hdpfans.com/thread-154-1-1.html
TR我所知有两种登录认证方式：
1.白名单whitelist：设置可以访问的IP地址区间。要启用此项，对应参数 rpc-whitelist-enabled，要设置成true。 然后在rpc-whitelist中设置具体的IP地址。
2.账户登录rpc-authentication-required：即输入账户、密码访问。这个方法用的比较多，推荐。下面详细叙述：
telnet 上高清机
killall transmission-daemon #将TR任务杀掉，以便修改参数
vi /opt/etc/transmission/settings.json #编辑TR的参数文件
按i进入编辑模式，并做以下修改（#后内容为注释，不需要输入）：
     "rpc-authentication-required": true,  #启用账户登录模式
    "rpc-bind-address": "0.0.0.0", 
    "rpc-enabled": true,  
    "rpc-password": "{c8c083168db9fff40b5136b6d0f3f4a864110a78\/oH51JaE", 
    "rpc-port": 9091, 
    "rpc-username": "root", 
    "rpc-whitelist": "127.0.0.1", 
    "rpc-whitelist-enabled": false, #关闭白名单模式
按 :wq  （冒号+w+q）后存盘退出
reboot #重启机器
推荐用非IE核心的浏览器，如opera、Firefox等连接 ip地址:9091 ，按用户名root，密码toor登陆。</em>
　　考虑到群晖是用套件的形式安装的，所以还是采用停用此套件来看看，结束还是不行。
　　刚才又一次在停用之后直接卸载套件，再重新安装套件（没有启动NAS）并再一次通过pitty启动后出现以下提示（不卸载的时候是提示已经运行）。之后就好了。当时想如果还不行就把aluz这个帐户删除再试（关键是删除账号的话，它已经下载的资料也没有了）
　
![请输入图片描述][1]


  [1]:  /images/2011/03/Snap11.jpg
