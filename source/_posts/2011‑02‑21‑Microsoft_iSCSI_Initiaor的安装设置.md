---
title: "Microsoft iSCSI Initiaor的安装设置"
date: 2011-02-21 16:28:35
cid: 392
categories: [Nas]
tags: [iscsi]
layout: post
---

<p>　　winxp自身没有iscsi程序，必须安装后才能使用。vista和win7就能直接使用了。</p>
<p>&nbsp;</p>
<table border="0" cellpadding="0" cellspacing="0" width="100%">
	<tbody>
		<tr>
			<td>一、 安装</td>
		</tr>
		<tr>
			<td>
				<table border="0" cellpadding="0" cellspacing="5" width="100%">
					<tbody>
						<tr>
							<td valign="top">执行i-SCSIClient.exe程序，按默认设置安装完成。</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<tr>
			<td>
				<p>二、 设置</p>
				<p>&nbsp;</p>
			</td>
		</tr>
		<tr>
			<td>
				<table border="0" cellpadding="0" cellspacing="5" width="100%">
					<tbody>
						<tr>
							<td colspan="2">
								<p>a) 双击桌面上的&ldquo;Microsoft iSCSI Initiaor&rdquo;快捷图标 b) 选择Discovery页面</p>
								<p><img alt="" height="354" src="https://img.cyoy.cn/hexo/images/auto_save_image/2011/02/0828354hI.jpg" width="300" /> </p>
								<p>c) 点击Targer Portals中的Add</p>
								<p><img alt="" height="156" src="https://img.cyoy.cn/hexo/images/auto_save_image/2011/02/082836xHY.jpg" width="300" /> </p>
								<p>d) 填写Linux虚拟磁盘服务器IP,点击OK e) 再选择Targets</p>
								<p><img alt="" height="352" src="https://img.cyoy.cn/hexo/images/auto_save_image/2011/02/082836OMz.jpg" width="300" /></p>
								<p>f) 选中刚添加的IP点&ldquo;Log On&hellip;&rdquo;按钮</p>
								<p><img alt="" height="161" src="https://img.cyoy.cn/hexo/images/auto_save_image/2011/02/082836PkR.jpg" width="300" /> </p>
								<p>g) 启用Automatically restore this connection when the system boots(服务端操作，客户机无需操作) 设置完成后在我的电脑中显示多增加的磁盘即为映射出来的虚拟磁盘。</p>
								<p><img alt="" height="193" src="https://img.cyoy.cn/hexo/images/auto_save_image/2011/02/082837VL1.jpg" width="500" /></p>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>











