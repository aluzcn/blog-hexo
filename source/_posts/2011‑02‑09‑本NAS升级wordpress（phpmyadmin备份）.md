---
title: "本NAS升级wordpress（phpmyadmin备份）"
date: 2011-02-09 10:05:00
cid: 374
categories: [Nas]
layout: post
---

　　<strong>如果不怕出错，你可以直接把新版本的程序在服务器解压并覆盖原来的相同目录和文件就行了，之后升级一下数据库结构（如有变动）。就这么简单。
　　所谓的自动升级也就是在后台下载新的安装程序包，再解压到相同目录中并替换覆盖的过程。</strong>
　　但建议还是安全稳妥一点，本人升级wordpress的方法如下（安装在根目录，而非wordpress目录）：
　　掌握原则：<strong>上传解压新程序、使用老版本中的wp-content替换、升级数据库结构（在需要时）</strong>。其他都非必须，只是保险。
　　<strong>一、复原：</strong>停用所有插件，恢复使用默认主题
　　<strong>二、移动：</strong>将原来使用的老程序全部移动到一个临时目录。比如LS，不要使用默认的wordpress名。
　　<strong>三、上传：</strong>上传新程序到服务器相应目录，本人是直接解压到根目录。下载的安装包默认是解压到wordpress目录，所以在服务器上解压后，还需要再移动到根目录。
　　<strong>四、复制：</strong>将移动到临时目录的老程序中的wp-content目录和wp-config.ph文件复制到相应刚解压的程序目录中，wp-config.php放在根目录。
　　<strong>五、激活：</strong>登陆后台，如提示需要升级数据库就执行，并选择主题和启用相应插件。
　　注意：<strong>根目录下的missing.html，404.jpg为我自己编辑的404错误文件和图片</strong>，其他均可移入临时目录中。根目录下的.htaccess可以通过后台设置固定链接来重新生成。

　　以下是比较详细的安装步骤说明。
　　1、先登陆NAS的后台，压缩并下载wp-content整个目录和wp-config.php，这是插件、主题、上传的图片、配置等。当然也可下载整个web目录。
　　2、备份数据库，可用phpmyadmin，或者WordPress Database Backup插件已经发送了邮箱也行。
　　　　phpmyadmin备份数据库时的结构参考图:
　
![请输入图片描述][1]
　　3、根目录下建立临时子目录比如ls目录，将所有老版本的文件目录移动到此。当然此步可以省略，因为已经下载了wp-content，但再来一次更保险。
　　4、下载最新版程序，并解压到本地相应目录（默认解压应该是wordpress下，但本人NAS却是根目录，所以后面要修改）。
　　5、将wp-config.php加入到本地刚解压的目录中（注意这个文件在新版本中有没有变动过，否则就要手动修改wp-config-sample.php并将有关配置内容填写到其中再改名为wp-config.php。一般不需要。）
　　6、将从NAS上备份下载的wp-content替换掉本地的相同目录（可直接将本地的wp-content删除后再粘贴过来）。
　　7、重新在本地用winrar打包成根目录的结构。
　　8、登陆到NAS服务器，上传并解压到根目录下。
　　9、运行 wp-admin/upgrade.php，升级数据库（也可先登陆后台，如需要会自动提醒），重新选择主题和启动插件。应该就可以了。
　　建议出于安装考虑，删除wp-admin/install.php和wp-admin/upgrade.php文件
　　如果出现“正在执行例行维护，请一分钟后回来”，直接将根目录下的.maintenance 文件删了就立即好了。
　　<strong>切记不要忘记wp-content/uploads，这里都是上传的图片哟。！！！等新安装使用正常一段时间再删除临时的目录。</strong>
　　参考此帖：http://sofree.cc/save-money-wordpress-upgrade/

　　插件升级办法：
　　自动升级总是失败，下载--解压--检验这三步都正常，接下来就报错解压失败。估计是已有相同目录存在后，升级包还要尝试建立同名目录，但不能建立所以出错。
　　我在后台升级插件时，只能先把提示需要升级的插件目录名称改掉，比如Akismet的目录改成Akismet2，然后再点按自动升级，程序就会自动在插件目录在创立Akismet目录并成功安装，之后再把Akismet2目录删除就行了。


  [1]:  /images/2011/02/backup4-1.png
