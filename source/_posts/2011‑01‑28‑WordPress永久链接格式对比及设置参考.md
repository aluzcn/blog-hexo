---
title: "WordPress永久链接格式对比及设置参考"
date: 2011-01-28 20:14:00
cid: 357
categories: [网络]
layout: post
---

<a href="http://www.metsky.com/archives/430.html" target="_blank">WordPress</a>永 久链接又叫固定链接，官方称Permalink，就是对日志、分类、标签等URL路径进行友好格式化显示，也就是看起来舒服一点，更方便搜索引擎的收录和 分析，而真正意义上的固定链接，应该是伴随着静态化的，合理的URL结构会让日志、分类和标签管理更加合理，更加方便归类和整理，比如Windows方面 文章放到Windows目录下，汽车方面文章放到auto下当然更加合理，既然Wordpress使用的都是伪静态或说伪动态，那么URL永久链接就纯粹 为了好看和搜索引擎优化，优点就是实时生效，路仔博客则是真静态化，整体设置只要修改就要刷新全部静态页，各有优缺点。
<h3>一、Wordpress固定链接全是假的</h3>
这个标题有点外行，只是为了方便理解，实际上应该叫Mod  Rewrite，打个比方就是网上很多IDC留下的电话号码，为了给别人大、正规的假象，往往设置很多分机，比如888888-741、 888888-874等等，实际上，你打任何分机过去，可能都是一个人在接，公司也可能只有一个员工，这堆分机放到本文理解就是Mod  Rewrite。这个员工就是index.php。
使用WordPress永久链接的前提，要求所在主机必须支持Mod Rewrite重写。
<strong>WordPress默认URL格式：</strong>

/?p=postid
/?cat=cateid/
?tag=mytag
本人喜欢如下格式：/%category%/%post_id%.html　（分类/ID.html）
这四种类型地址格式是真的，根下的index.php确实存在这些参数的接收和处理，所以即使没有重写功能，也并不影响这类默认URL格式使用，但如要使用自定义的固定链接格式，则必须具有Rewrite功能，否则会全部报告404错误。
<!--more-->
<h3>二、如何设置WordPress永久链接</h3>
登录到WordPress后台，然后点击左侧工具栏菜单Setting（设置）-》Permalink Setting（固定链接），如下图：

<img src="http://www.metsky.com/upload/2010/06/201006271550337405.jpg" alt="" />

<strong> 固定链接包含两个部分：</strong>
日志路径--有五个选项，默认格式就是上文提到的动态参数格式。

分类和标签路径--只有日志处于默认设置时，分类和标签默认路径才是上文的动态参数形式。

<strong>日志永久链接包括的标签变量有：</strong>

%year%、 %monthnum%、%day% 、%hour%  、%minute% 、%second%--分别代表年月日时分秒

%post_id%--日志ID

%postname%--日志别名

%category%--日志分类

%tag%--日志标签

%author%--日志作者

由于分类和标签URL格式，可能会随着日志永久链接变化而变化，所以设置设置好日志永久链接后一定要检查分类和标签链接格式是否合意，否则需对应修改，修改方法参考下文，或结合<a href="http://codex.wordpress.org/Using_Permalinks" target="_blank">官方说明地址</a>。
<h3>三、WordPress日志永久链接设置<strong>
</strong></h3>
1、若非特殊用途，%hour% 、%minute% 、%second%和%author%、%category%、%tag%慎用，感觉对个人博客完全没有必要，WordPress似乎纯粹为了功能完整性而设计出来。如果日志URL中带有%category%和%tag%，某天日志分类或标签被修改掉，URL可能就会变化。

2、%year%、 %monthnum%、%day%建议只在多人博客或多具有时效性日志的博客上使用，当博客上每天都多篇日志或具有时效性的新闻发布时，可以考虑这种格式，典型URL格式如下：

/%year%/%monthnum%/%postname%

/%year%/%monthnum%/%day%/%postname%

/%year%/%monthnum%/%postname%/

/%year%/%monthnum%/%day%/%postname%/

这四种格式，后面两种可以在上面图中直接选择，上面自定义一下，去掉反斜线即可，如果你的日志并不多，没必要使用此种格式。

3、个人博客建议下面三种形式之一：

<strong>方式1：</strong>

/archives/%postname%.html

/archives/%post_id%.html

/%postname%.html

--这三种看起来比较标准，对搜索引擎也比较友好。其中archives也可换成自己喜欢的单词，比如blog等，也可把尾标换成.html、.htm、.php等，也可自定义尾标。把路径直接定位到网站根目录的（第三种），在很多国外网站上也很常见。

<strong>方式2：</strong>

/archives/%post_id%

/archives/%postname%

/%postname%

--这三种地址更短一点，看起来也很不错，打算一直似乎也<a href="http://www.metsky.com/archives/461.html" target="_blank">Wordpress</a>的用户可以优先考虑，如果哪天换系统或突然主机不支持重写了可能会带来麻烦。

<strong>方式3：</strong>

/archives/%post_id%/

/archives/%postname%/

/%postname%/

--个人感觉这三种地址最古怪，据说对搜索引擎更好，还是认为带个直接没有反斜杠或带个尾标似乎更好。因为那样更像一个标准的路径及目标文件名，而且带尾标的的路径即使在不支持MOD REWRITE的主机上也很容易实现“真静态”。

另外，类似/index.php/2010/06/27/windows-7/这样的地址就更不要采用了，已经完全脱离URL的样子，太另类了。
<h3>四、WordPress分类及标签永久链接设置</h3>
默认的分类和标签路径也都是动态的，所以一旦修改了日志永久链接，默认的WordPress分类及标签链接可能也会变化，需注意检查。

假设日志路径选择的是/archives/%post_id%.html，下面的分类和标签路径可能默认如下：

/archives/category/mycate

/archives/tag/mytag

很明显，这个默认路径有点长，如果再存在二级分类，那么URL很容易超过四五级，可以改成下面的样子（如上文插图，试验一下就知道）：

设置为“category”后：/category/windows-7

设置为“tag”后：/tag/mytag

这样的路径更简短一些，这样从访客角度看来，日志放到archives（blog）目录下，分类放到category目录下，标签放到tag目录下，各得其所，非常明了。
<h3>五、关于WordPress永久链接的几点事项</h3>
1、最好不要在URL中出现中文，天缘也看到有些博客的URL使用到中文字符串，可能是为了方便，也可能是个人爱好，多字节字符作为URL就像是“.中国”域名那样，还有中文网址，毕竟太中国特色，在互联网上还是抛弃掉吧。

2、是否设置为伪静态URL格式，比如带.html等扩展名，看个人爱好。

3、链接深度不要太多，十不过三最好不要超过三级、带子分类别超过四级，每天有多篇文章更新的博客的，可以考虑带年月日的URL路径，个人博客写不 了那么多篇原创文章的，就无需使用年月日URL。比如天缘目前使用的archives/id.html格式，也可使用blog/post- name.html格式，对个人博客足够使用的了。

4、是否使用post_id也要看个人爱好了，因为WordPress跟<a href="http://www.metsky.com/archives/347.html" target="_blank">zblog</a>还 不同，自动保存草稿、页面等都保存在一个数据表中，所以这个ID是不连续的，所以博客路径看起来很不爽（可能天缘有洁癖，呵呵，总希望ID是连续的），所 以使用WordPress还是建议使用postname，尤其是英文博客几乎清一色的都是有postname，中文博客可能对英文有点要求，也可以找找插 件，要么就用id了，汉语拼音用在URL上怎么讲还是有点长。

5、永久链接在博客建立之初就需设置好，一经设置就最好别动了，错就错到底就是没有错。











