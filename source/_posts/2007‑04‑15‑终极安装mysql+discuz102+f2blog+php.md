---
title: "终极安装mysql+discuz102+f2blog+php"
date: 2007-04-15 15:52:08
cid: 159
categories: [网络]
layout: post
---

　　 
	　　昨天突然不能在本地机器配置安装Discuz102了，很是麻烦。所以又干脆把有关资料重新整理安装一次。<br /> 　　我最后采用的mysql　版本是 4.1.20；Discuz102是从它的论坛上找的原版；　php版本没关系，都行。主要是mysql的数据库安装非常麻烦，版本多，难安装。<br /> 　　一、删除：<br /> 　　首先要到控制面板中去删除已经安装的mysql，看看控制面板中的&ldquo;管理工具&rdquo;－&ldquo;服务&rdquo;中&ldquo;mysql&rdquo;的服务有没有停止。<br /> 　　建议可以删除 c:/mysql　（这是老版本安装的目录）和 c:/program files/mysql　（这是高版本安装的目录）中的内容。<br /> 　　二、安装mysql 4.1.20：<br /> 　　文件在我的硬盘&ldquo;本人装机软件&rdquo;中，名称是&ldquo;mysql-4.1.20-win32本人使用.zip&rdquo;，当时网友可以从网上下载。<br /> 　　1、解压安装时一直默认，只到出现 skin sign-up，意思是跳过注册。<br /> <img src="../attachments/1165698042.jpg" alt="open_img(&#39;attachments/1165698042.jpg&#39;)" width="400" height="284" align="middle" /><br /> 　　2、然后再进入第二阶段来配置有关变量。这时选择&ldquo;standard configuration&rdquo;<br /> <img src="../attachments/0528530826.jpg" alt="open_img(&#39;attachments/0528530826.jpg&#39;)" width="400" height="284" align="middle" /><br /> 　　如果在以后的使用出现字符集方面的错误时，可以通过再次运行配置程序通过这里选择上面的选项来设定utf8，但我是在本地调试，要求不高，所以就选择标准简单了<br /> <br /> 　　3、下面记得一定要选上命令行模式，以方便以后在命令下管理MySQL。后面修改密码就需要。<br /> <img src="../attachments/6046860553.jpg" alt="open_img(&#39;attachments/6046860553.jpg&#39;)" width="400" height="342" align="middle" /><br /> <br /> 　　4、接下来是设置密码，记得设复杂一点，以策安全<br /> <img src="../attachments/3753216403.jpg" alt="open_img(&#39;attachments/3753216403.jpg&#39;)" width="400" height="290" align="middle" /><br /> <br /> 　　5、出现以下提示就安装OK了。<br /> <img src="../attachments/9751800065.jpg" alt="open_img(&#39;attachments/9751800065.jpg&#39;)" width="400" height="284" align="middle" /><br /> <br /> 　　最后进入最麻烦的第三阶段：重新设定密码。<br /> 　　尽管到此安装结束了，这时如果你就直接安装Discuz等php+mysql的程序，肯定提示出现以下问题：<br /> 　　<em>Client does not support authentication protocol　在</em>mysql4.1以上版本连接时基本都出现这种错误，好象原因是在安装mysql配置时输入的密码不能正确保存等问题。官方给出的问题解决办法是通过命令行的方式来解决，也不知道mysql　的软件是怎么设计的。我安装5.0以上的高版本，仍然存在这个问题。下面是官方的提示：<br /> <em>shell> mysql<br /> Client does not support authentication protocol requested<br /> by server; consider upgrading MySQL client<br /> </em><br /> 　　<strong>我们实际操作中请使用以下方法解决：（我是mysql 4.1.20的版本）</strong><br /> 　　首先通过&ldquo;附件&rdquo;进入DOS命令状态。再通过cd/program files/mysql进入Mysql的安装目录。然后再进入MYSQL安装目录下的Bin子目录，mysql命令都要在这个目录下运行才行。<br /> <br /> 　　<strong>连接MySQL的命令格式为：　</strong>mysql -h 主机名











