---
title: TortoiseGit小乌龟
date: 2026-09-08 02:59
tags:
- hexo
categories:
- 网络
---

这是一款支持中文的hexo windows桌面提交软件
### 前置依赖（Git for Windows）
如果你电脑还没有 Git，这里下载：
🔗[https://gitforwindows.org/](https://gitforwindows.org/)
终端执行 `git --version`，输出版本号，就代表已经装好。

# TortoiseGit（小乌龟）极简安装步骤（含安装路径选择、中文设置）稀土掘金
> 
> 前提：你的电脑已经装好 **Git for Windows**（装 VSCode 时一般附带，终端输入`git --version`可验证）
> 官网：[https://tortoisegit.org/download/](https://tortoisegit.org/download/)稀土掘金

## 1、下载两个文件（官网页面）

1. 本体：下载 **64‑bit Windows** 的安装包（你的 Win11 选这个）
2. 往下滚动找到 `Language Packs`（语言包区域），下载 **Chinese, simplified（简体中文）64 位 Setup** 语言包安装程序

> 
> ⚠️本体和语言包**版本号必须完全一致**，否则中文无法生效。

## 2、安装本体，选择安装路径

1. 运行本体安装包，`Next` → 同意协议
2. **选择安装位置页面（Location）**
   - 默认路径：`C:\Program Files\TortoiseGit`
   - 如果你不想装 C 盘，点`Browse`，例如设置为：
   `D:\Tools\TortoiseGit`

> 
> ✅硬性规则：**路径全程不能出现中文、空格**，不要写成 `D:\工具\TortoiseGit`，会异常报错。

3. 其余全部保持默认选项，一路`Next`→`Install`→`Finish`，完成本体安装。

> 
> 安装结束弹出的首次配置向导，直接关掉，**先不要配置，接下来装中文包**。

## 3、安装简体中文语言包

直接运行刚才下载好的中文语言包，一路`Next`，不需要改路径，它会自动找到本体位置，点`Finish`完成。

## 4、切换成中文界面

1. 随便打开一个文件夹（比如你的`D:\blog‑hexo`），空白处鼠标右键
2. 右键菜单选择：**TortoiseGit → 设置**
3. 在【常规设置】，找到语言下拉框，选择：**中文 (简体)(中国)**，点击确定，界面立刻全部变成中文。

## ✅给你的 Hexo 博客实际使用流程（装好之后）

1. VSCode 写文章，全部保存
2. 进入 `D:\blog‑hexo`，文件夹空白处右键
3. TortoiseGit → **提交**
4. 勾选要提交变更的文件，填写提交说明，点确定提交（完成本地 commit）
5. 右键 → TortoiseGit → **推送**，执行 git push 上传 GitHub

> 
> 推送如果遇到`Connection was reset`网络报错，会弹出**中文报错窗口**。开启 Clash TUN 虚拟网卡，不需要配置 git 代理，直接推送。

### ⚠️重要提醒

1. TortoiseGit、VSCode、我们写的 ps1 脚本三者完全可以混用，操作同一个本地仓库，互不冲突。
2. 软件本身只是外壳，底层调用你电脑的 git.exe，**不会改变 Git 本身行为**。
3. 仓库路径`D:\blog‑hexo`没问题，不要有中文。
4. 开启 Clash TUN 的时候推送；退出 Clash 记得先关闭 TUN，避免网络异常。

### 你日常写博客真正用到的就 2 个右键功能：

1. **提交**：生成本地 commit
2. **推送**：git push 上传到 GitHub

> 
> Diff、Merge、Blame，都是点菜单后自动唤起，不用手动运行。

![tortoiseit.png](/images/tortoiseit.png)
### 现象说明

- 在普通文件夹点开：菜单全部显示，但是点击【提交、推送】会报错提示 “不是 Git 仓库”。
- 只有你的 `D:\blog‑hexo` 才是真正的 git 仓库，其他文件夹只是显示菜单，不能执行 git 操作。

> 
> 这个是正常的，不是 bug，TortoiseGit 是资源管理器外壳扩展，全局注入右键。

## 两种处理方案

### 方案 1（推荐，维持现状）

不用处理。只在 `D:\blog‑hexo` 里面使用它的功能；别的文件夹看到菜单就无视即可，不会影响性能、不会损坏文件。

### 方案 2：不想在非 Git 文件夹看到这一堆菜单

TortoiseGit 自带设置，可以让它**只在 Git 仓库文件夹显示菜单**

![只对blog文件生效](https://img.cyoy.cn/hexo/images/uploads/xwgyj.png)

设置完成后效果：

- ✔ `D:\blog‑hexo`（git 仓库）右键：正常出现全部 TortoiseGit 菜单
- ✔ 普通文件夹：右键不再出现 TortoiseGit 那一栏，界面干净。