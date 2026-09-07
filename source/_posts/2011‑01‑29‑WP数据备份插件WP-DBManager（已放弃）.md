---
title: "WP数据备份插件WP-DBManager（已放弃）"
date: 2011-01-29 16:39:45
cid: 361
categories: [Nas]
layout: post
---

　　<blockquote>今天又更新一个插件WP-DBManager，用来实现数据备份，以前用的是WordPress Database Backup，很方便，但是只有备份，没有导入功能！所以就改成了既能备份又能导入的WP-DBManager。

　　WP-DBManager介绍：
　　WP-DBManager是wordpress的数据备份插件，目前已经更新到2.50。用途是对WordPress 的数据库进行管理，从而省去了用户必须使用类似phpMyadmin登录数据库进行备份、修复、导入等操作，并且可以前台执行 SQL 语句。该备份插件功能强大，能自动备份数据库文件，只要你设置了自动备份时间，到时间后该系统会自动备份你的wordpress数据；备份数据库的下载、删除、恢复，包括把数据库发送到指定的邮箱；优化、修复、清空、删除数据库表；执行SQL查询等，总之该有的功能应该都有了。</blockquote>
　　WP-DBManager插件安装：后台-插件-添加新插件-搜索”WP-DBManager”-安装-激活-设置
　　设置就是最下面的”DATABASE”，界面是英文的，对照一下：
<ul>
	<li>
<blockquote>
<ul>
	<li>Database 用户 WP 数据库以及数据表的基本信息</li>
	<li>Backup DB 备份数据库操作</li>
	<li>Manage Backup DB 可以选择对已备份的数据库文件进行下载、恢复、删除等操作</li>
	<li>Optimize DB 优化数据库</li>
	<li>Repair DB 修复数据表</li>
	<li>Empty/Drop Tables 清空/删除某个数据表</li>
	<li>Run SQL Query 执行 SQL 命令语句</li>
	<li>DB Options 设置数据库的路径（可向空间商询问）以及自动备份的时间</li>
	<li>Uninstall WP-DBManager 卸载该插件</li>
</ul>
</blockquote>
</li>
</ul>
　　在旧站备份后上传到新站的/wp-content/backup-db 目录下，然后登陆控制板Database -&gt; Manage  Backup DB -&gt; Restore 即可，还需要登陆phpadmin将wp_options 表中的 siteurl  修改为新站地址，还有后台常规选项中的URL更改为新站地址。（如果域名是同一个，只是迁移数据就不用修改了。）












