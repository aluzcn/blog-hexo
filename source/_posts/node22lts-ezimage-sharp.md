---
title: 更换node版本并安装ezimage的sharp
categories:
  - 网络
tags:
  - 软件
date: 2026-09-15 10:24:28
---
## 一：安装Node 22.23.2 LTS
官网目前最新的是Node 24.21.0 LTS 能用，但对我没必要，优先选 Node22 LTS**
Hexo8 官方文档写：最低 20.19.0，**最高支持 latest，理论上 Node24 可以跑**Hexo。
但是：
1. Node24 是**最新一代 LTS**，发布时间比较新，Hexo 周边插件（主题、EzImage 等）虽然大多兼容，但**遇到小众插件踩坑概率会比 Node22 更高**
2. 你的目标就只是解决安装sharp出现的 `ERR_REQUIRE_ESM` 报错，**Node22 LTS 完全足够，足够稳定，社区用 Hexo 的人最多**，坑最少。直接下链接：
https://nodejs.org/dist/v22.23.2/node-v22.23.2-x64.msi  

先到控制面板删除原来的node.js，重启后开始安装。
<div align="center"><img src="https://img.cyoy.cn/hexo/images/2026/09/1789454960393-bhcpivzi.webp" alt="node01" width="60%"></div>
安装过程中使有组件都是默认状态，  **Add to PATH 也正常开启**，这个就是正确的配置。

##### 简单确认每个项目
- Node.js runtime ✅ 勾选（核心运行环境）
- corepack manager ✅ 勾选
- npm package manager ✅ 勾选（npm 包管理器）
- Online documentation shortcuts ✅ 文档快捷方式，可保留
- Add to PATH ✅ 已启用（最重要！自动把 node/npm 加入系统环境变量）

直接点 `Next` 继续安装就好。
<div align="center"><img src="https://img.cyoy.cn/hexo/images/2026/09/1789455152415-0aorza2o.png" alt="node02" width="60%"></div>

#### ✅重点：**这个复选框，不要勾选！直接保持空白，点 Next**

##### 这段话翻译解释

> 
> 可选安装原生模块编译工具。有些 npm 包需要 C/C++ 编译，需要 Python + Visual Studio Build Tools，勾选会自动安装，同时还会装上 Chocolatey 包管理器。

##### 为什么不勾选

这就是**我昨晚遇到的那个 VS 编译工具**！
- 如果你勾选，Node 安装结束后会自动后台装：VS Build Tools + Python，体积很大，也是之前卡死的东西
- 咱们的方案是**使用 sharp 预编译包，完全不需要本地编译**，所以这一套编译工具完全没必要装

##### 操作
方框**保持不打勾** → 直接点`Next`，继续安装 Node。
> 
> 记住：只要我们提前设置好 sharp 镜像环境变量，npm 直接下载已经编译好的二进制包，不会触发本地编译，就不会再弹出这套工具安装窗口。

#### 安装完成之后的验证步骤（一定要做）

1. **关闭所有 PowerShell 窗口，重新打开一个全新的 PowerShell**（旧终端不会读取新环境变量）
2. 依次输入下面两条命令：

```powershell
node -v
npm -v
```

只要两条命令正常输出版本号，说明 Node 安装成功。

## 二：安装图片压缩 sharp 
1. 打开 PowerShell，cd 进入这个文件夹  
```powershell
cd C:\Users\cyj9\.vscode\extensions\kiang.ezimage-1.1.1
```

2. 先执行两行环境变量**（防止触发 VS 编译工具，重点！）**  
```powershell
$env:SHARP_IGNORE_GLOBAL_LIBVIPS=1
$env:npm_config_sharp_binary_host="https://npmmirror.com/mirrors/sharp"
```

3. 再执行安装

```powershell
npm install sharp
```
 原理：EzImage 是在它自己插件文件夹内本地安装 sharp 包，不是全局包，**必须进到插件目录执行 npm install sharp**。

### ⚠️注意两点

1. VSCode 最好**完全关闭**再跑命令，避免文件占用报错；
2. 执行完重新打开 VSCode，EzImage 就识别到 sharp 了。

### 快捷小技巧

地址栏直接复制粘贴路径 `C:\Users\cyj9\.vscode\extensions\kiang.ezimage-1.1.1`，回车打开文件夹，然后在文件夹空白处按住`Shift`+ 右键，选择「在此处打开 PowerShell 窗口」，就自动定位到这个目录，不用手动 cd。