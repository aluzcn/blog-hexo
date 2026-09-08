---
title: VSCode Alt+I、Alt+T 快捷键设置
top_img: false
tags: []
categories: []
description: ''
toc: true
date: 2026-09-08 08:14:21
updated: 2026-09-08 08:14:21
---

效果如下：
~~~
![图片描述](图片地址)
<div align="center">
<img src="./图片名.png" alt="说明文字" width="65%">
</div>
~~~
## 1、打开VS快捷键 JSON

`Ctrl+Shift+P` → 执行：`Preferences: Open Keyboard Shortcuts (JSON)`

把下面整段粘贴进数组`[ ... ]`里面
```[
    {
        "key": "alt+i",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus && editorLangId == markdown",
        "args": {
            "snippet": "![${1:图片描述}](${2:图片地址})$0"
        }
    },
    {
        "key": "alt+t",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus && editorLangId == markdown",
        "args": {
            "snippet": "<div align=\"center\">\n<img src=\"./${1:图片名.png}\" alt=\"${2:说明文字}\" width=\"65%\">\n</div>\n$0"
        }
    },
    //行内代码 `xxx`
    {
        "key": "alt+c",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus && editorLangId == markdown",
        "args": {
            "snippet": "`${1:代码片段}`$0"
        }
    },
    //整块代码块 ```lang ... ```
    {
        "key": "alt+k",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus && editorLangId == markdown",
        "args": {
            "snippet": "```${1:yaml}\n$2\n```\n$0"
        }
    },
    // 下划线插入 <ins>
    {
        "key": "alt+s",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus && editorLangId == markdown",
        "args": {
            "snippet": "<ins>${1:下划线文字}</ins>$0"
        }
    },
    // markdown下屏蔽原生Ctrl+Enter（插入下方空行）
    {
        "key": "ctrl+enter",
        "command": "-editor.action.insertLineAfter",
        "when": "editorTextFocus && editorLangId == markdown"
    },
    // markdown下：Ctrl+Enter → 输出<br>硬换行
    {
        "key": "ctrl+enter",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus && editorLangId == markdown",
        "args": {
            "snippet": "<br>\n"
        }
    }
]


```


Alt+I 普通图片<br>

Alt+T 居中图片 HTML 块<br>

Alt+c 行内代码 `\`xxx\ `<br>

Alt+k 代码块 <br>
 
Alt+S 下划线 <ins>文字</ins>
Ctrl+Enter硬换行 <br>
