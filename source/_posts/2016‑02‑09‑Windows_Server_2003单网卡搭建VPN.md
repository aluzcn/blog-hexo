---
title: "Windows Server 2003单网卡搭建VPN"
date: 2016-02-09 20:01:10
cid: 614
categories: [网络]
layout: post
---

<p>http://www.xfisp.com/style/info/shownews.asp?id=3</p>

<p>注意：</p>

<p>1、添加静态ip地址时，起始192.168.10.0，数目为64，这样结束的ip就自动出来了。</p>

<p>2.第22步，在90qh的vps上没有&ldquo;云主机安全策略&rdquo;选项，只有上面的3项。省略这步设置，不影响使用。</p>

<p>记得在讯飞vps设置vpn时，有一步出错。要在服务中启动workstation服务才行。</p>

<p>===========================================================================</p>

<p>1、【开始】---&gt;【程序】---&gt;【管理工具】---&gt;【路由和远程访问】、如下图所示；</p>

<p><img alt="201410191911308498" class="alignnone size-full wp-image-2120" height="314" src="https://img.cyoy.cn/hexo/images/2016/02/201410191911308498.jpg" width="445" /></p>

<p>2、选中&ldquo;本地&rdquo;右键&ldquo;配置并启用路由和远程访问&rdquo;、如下图所示；需要先在&quot;服务&quot;中关闭&quot;Windows Firewall&quot;并&ldquo;禁用&rdquo;。</p>

<p><img alt="2014101919114589" class="alignnone size-full wp-image-2121" height="314" src="https://img.cyoy.cn/hexo/images/2016/02/2014101919114589.jpg" width="445" /></p>

<p>3、出现如下界面，点击&ldquo;下一步&rdquo;、如下图所示；</p>

<p><img alt="201410191912001841" class="alignnone size-full wp-image-2122" height="305" src="https://img.cyoy.cn/hexo/images/2016/02/201410191912001841.jpg" width="352" /></p>

<p>4、选择&ldquo;自定义配置&rdquo;，下一步、如下图所示；</p>

<p><img alt="201410191912128649" class="alignnone size-full wp-image-2123" height="305" src="https://img.cyoy.cn/hexo/images/2016/02/201410191912128649.jpg" width="352" /></p>

<p>5、勾选&ldquo;VPN访问&rdquo;、&ldquo;NAT和基本防火墙&rdquo;下一步如下图所示；</p>

<p><img alt="201410191912216604" class="alignnone size-full wp-image-2124" height="304" src="https://img.cyoy.cn/hexo/images/2016/02/201410191912216604.jpg" width="351" /></p>

<p>6、点击&ldquo;完成&rdquo;如下图所示；</p>

<p><img alt="201410191912327540" class="alignnone size-full wp-image-2125" height="304" src="https://img.cyoy.cn/hexo/images/2016/02/201410191912327540.jpg" width="351" /></p>

<p>7、提示是否启用服务，点击&ldquo;是&rdquo;，如下图所示；</p>

<p><img alt="201410191912419171" class="alignnone size-full wp-image-2127" height="78" src="https://img.cyoy.cn/hexo/images/2016/02/201410191912419171.jpg" width="240" /></p>

<p>8、请稍等1-2分钟初始化服务；如下图所示；</p>

<p><img alt="201410191912533091" class="alignnone size-full wp-image-2126" height="81" src="https://img.cyoy.cn/hexo/images/2016/02/201410191912533091.jpg" width="230" /></p>

<p>9、安装完成后开始配置，右键&ldquo;点击&rdquo;，&ldquo;CLOUD(本地)&rdquo;选择属性、如下图所示；</p>

<p><img alt="201410191913052158" class="alignnone size-full wp-image-2129" height="315" src="https://img.cyoy.cn/hexo/images/2016/02/201410191913052158.jpg" width="446" /></p>

<p>10、首先选择&ldquo;IP选项&rdquo;、&ldquo;静态地址池&rdquo;，然后&ldquo;添加&rdquo;如下图所示；</p>

<p><img alt="201410191913181786" class="alignnone size-full wp-image-2130" height="310" src="https://img.cyoy.cn/hexo/images/2016/02/201410191913181786.jpg" width="283" /></p>

<p>11、因为很多用户家中上网设置的是&ldquo;192.168.0.x或192.168.1.x&rdquo;为避免冲突我们这里就设置成&ldquo;192.168.10.x&rdquo;、如下图所示：</p>

<p><img alt="201410191913304295" class="alignnone size-full wp-image-2131" height="310" src="https://img.cyoy.cn/hexo/images/2016/02/201410191913304295.jpg" width="283" /></p>

<p>12、设置完成点击&ldquo;应用&rdquo;、&ldquo;确定&rdquo;、如下图所示；</p>

<p><img alt="201410191913445261" class="alignnone size-full wp-image-2132" height="309" src="https://img.cyoy.cn/hexo/images/2016/02/201410191913445261.jpg" width="281" /></p>

<p>13、选择已经添加的&ldquo;NAT/基本防火墙&rdquo;、&ldquo;右键&rdquo;&ldquo;新增接口&rdquo;，如下图所示；</p>

<p><img alt="201410191913587310" class="alignnone size-full wp-image-2133" height="314" src="https://img.cyoy.cn/hexo/images/2016/02/201410191913587310.jpg" width="444" /></p>

<p>14、选择&ldquo;本地连接&rdquo;、点击&ldquo;确定&rdquo;，如下图所示；</p>

<p><img alt="20141019191409443" class="alignnone size-full wp-image-2134" height="265" src="https://img.cyoy.cn/hexo/images/2016/02/20141019191409443.jpg" width="267" /></p>

<p>15、选择&ldquo;公用接口连接到Internet&rdquo;并勾选&ldquo;在此接口上启用NAT&rdquo;、点击&ldquo;确认&rdquo;如下图所示；</p>

<p><img alt="201410191914275963" class="alignnone size-full wp-image-2135" height="336" src="https://img.cyoy.cn/hexo/images/2016/02/201410191914275963.jpg" width="282" /></p>

<p>16、建立VPN连接帐户，右键&ldquo;我的电脑&rdquo;、&ldquo;管理&rdquo;如下图所示；</p>

<p><img alt="20141019191444698" class="alignnone size-full wp-image-2136" height="220" src="https://img.cyoy.cn/hexo/images/2016/02/20141019191444698.jpg" width="189" /></p>

<p>17、选择&ldquo;本地用户和组&rdquo;进入&ldquo;用户&rdquo;在右侧区域点击&ldquo;右键&rdquo;，&ldquo;新用户&rdquo;。如下图所示；</p>

<p><img alt="201410191914599008" class="alignnone size-full wp-image-2137" height="315" src="https://img.cyoy.cn/hexo/images/2016/02/201410191914599008.jpg" width="445" /></p>

<p>18、如下图所示；依次填入&ldquo;用户名&rdquo;，&ldquo;密码&rdquo;并勾选&ldquo;用户不能更改密码&rdquo;及&ldquo;密码永不过期&rdquo;，如下图所示；</p>

<p><img alt="201410191915117226" class="alignnone size-full wp-image-2138" height="245" src="https://img.cyoy.cn/hexo/images/2016/02/201410191915117226.jpg" width="268" /></p>

<p>19、右键选中新建用户&ldquo;VPN777&rdquo;选择&ldquo;属性&rdquo;、如下图所示；</p>

<p><img alt="20141019191523982" class="alignnone size-full wp-image-2139" height="315" src="https://img.cyoy.cn/hexo/images/2016/02/20141019191523982.jpg" width="445" /></p>

<p>20、选择&ldquo;拨入&rdquo;选项，选中&ldquo;允许访问&rdquo;、如下图所示；</p>

<p><img alt="201410191915367719" class="alignnone size-full wp-image-2140" height="321" src="https://img.cyoy.cn/hexo/images/2016/02/201410191915367719.jpg" width="281" /></p>

<p>21、【开始】---&gt;【运行】，输入&ldquo;gpedit.msc&rdquo;、如下图所示；</p>

<p><img alt="201410191915497736" class="alignnone size-full wp-image-2141" height="116" src="https://img.cyoy.cn/hexo/images/2016/02/201410191915497736.jpg" width="241" /></p>

<p>22、打开&ldquo;组策略编辑器&rdquo;，依次选择&ldquo;计算机配置&rdquo;、&ldquo;Windows设置&rdquo;、&ldquo;安全设置&rdquo;、&ldquo;IP安全策略，在本地计算机&rdquo;，在右侧窗口找到&ldquo;云主机安全策略&rdquo;右键选择&ldquo;不指派&rdquo;；如下图所示；</p>

<p><img alt="201410191916028376" class="alignnone size-full wp-image-2142" height="240" src="https://img.cyoy.cn/hexo/images/2016/02/201410191916028376.jpg" width="480" /></p>

<p>到此VPN服务配置完成</p>













