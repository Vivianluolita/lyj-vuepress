## electron基础

- 如何判断项目有无electron

  ![111](../../.vuepress/public/image/electron/01.png)

- 简单架构
  ![111](../../.vuepress/public/image/electron/02.png)

- 跨平台的技术  
  ![111](../../.vuepress/public/image/electron/03.png)

- 安装electron
```
1. node 12.14.0

2. 32位的Node 打包 32 和 64位都可以用
```
  ![111](../../.vuepress/public/image/electron/04.png)



## 番茄钟项目（主进程里面，监听各个进程的请求。）

- 每25分钟学习，5分钟休息
  ![111](../../.vuepress/public/image/electron/05.png)

- 主进程和渲染进程
  ![111](../../.vuepress/public/image/electron/06.png)
- 渲染进程讲解
  ![111](../../.vuepress/public/image/electron/07.png)

```
ipcRender.invoke:可以向主进程发送响应，并且在等待的过程中，得到主进程的响应结果

```
- 主进程讲解

  ![111](../../.vuepress/public/image/electron/08.png)

```
1. loadUrl: 加载远程页面
   lodFile: 加载本地页面
2. notification 中的actions  是按钮

3. handle 处理渲染进程的请求，并在handle后返回结果
```
  ![111](../../.vuepress/public/image/electron/09.png)
  ![111](../../.vuepress/public/image/electron/10.png)

## 与web开发的不同

![111](../../.vuepress/public/image/electron/11.png)
![111](../../.vuepress/public/image/electron/12.png)

设置两位，前面补0

- 主要的API方法，深色为重要的
![111](../../.vuepress/public/image/electron/13.png)

```
app:生命周期

broseWindow：窗口

ipcMain：与ipcRender通信的

Menu，Tray，MenuItem：原生gui、

webcontent：加载具体页面

autoUpdate：更新模块

globalSglobalShortcut：设置全局快捷键

clipboard：读写剪切板

crashReport：监听主进程和渲染进程有没有崩溃

remote：可以调用主进程模块，但是建议大家不要使用

deskdesktopdesktopCapture：捕获我们的桌面流：截屏啊，屏幕的视频流啊



```

- 通信的不同

```
1. 通知信息：比如想在页面创建一个菜单，但是只有主进程才能创建菜单。所以只能就ipc进行进程间的通信

2. 数据传输：比如想获得当前的内存情况，就通过ipc来进行

3. 比如用户信息，在各个进程中都会用到，所以就通过ipcß

```

![111](../../.vuepress/public/image/electron/14.png)

- 进程通信（跟上面番茄钟用法差不多，也可以穿参数）
![111](../../.vuepress/public/image/electron/15.png)
![111](../../.vuepress/public/image/electron/16.png)
![111](../../.vuepress/public/image/electron/17.png)

- 从主进程到渲染进程

![111](../../.vuepress/public/image/electron/18.png)
![111](../../.vuepress/public/image/electron/19.png)

```
因为主进程不知道，是哪个发的，需要webcont获取窗体信息

```

- 进程和进程中的通信

![111](../../.vuepress/public/image/electron/20.png)
![111](../../.vuepress/public/image/electron/22.png)
![111](../../.vuepress/public/image/electron/23.png)
![111](../../.vuepress/public/image/electron/24.png)

```

1. 比如聊天微信窗口，打开文件窗口，关闭文件窗口需要发信息给聊天窗口

2. electron5之后用：ipcRender。sendTo 获取ID 发送信息

3. remote是存在全局里面的，用的不好会造成卡顿
```

- 经验技巧

![111](../../.vuepress/public/image/electron/21.png)

```
当响应超时需要response一个异常，然后做对应的交互
```

- 原生能力

![111](../../.vuepress/public/image/electron/25.png)
![111](../../.vuepress/public/image/electron/26.png)
![111](../../.vuepress/public/image/electron/27.png)
![111](../../.vuepress/public/image/electron/28.png)

- 小技巧
![111](../../.vuepress/public/image/electron/29.png)

```

可以在控制台敲Node命令
```

- 可以通过node-ffi集成 c++的动态库

![111](../../.vuepress/public/image/electron/30.png)

- 其他功能

![111](../../.vuepress/public/image/electron/31.png)

- 总结

![111](../../.vuepress/public/image/electron/32.png)

- 兼容

![111](../../.vuepress/public/image/electron/33.png)

![111](../../.vuepress/public/image/electron/34.png)
![111](../../.vuepress/public/image/electron/35.png)
![111](../../.vuepress/public/image/electron/36.png)

```

谷歌浏览器自带的全天然的懒加载，滚动后才会具体加载图片
```

## 远程控制

- 业务流程

![111](../../.vuepress/public/image/electron/37.png)
![111](../../.vuepress/public/image/electron/38.png)
![111](../../.vuepress/public/image/electron/39.png)
![111](../../.vuepress/public/image/electron/40.png)
![111](../../.vuepress/public/image/electron/41.png)

- 目录
![111](../../.vuepress/public/image/electron/42.png)
![111](../../.vuepress/public/image/electron/43.png)

- 加一个这个参数，不会在打开窗口出现浏览器跳转
![111](../../.vuepress/public/image/electron/44.png)

- 通过这个库得知，到底是生产环境还是开发环境
![111](../../.vuepress/public/image/electron/45.png)
![111](../../.vuepress/public/image/electron/46.png)

- 不能在页面里面解析ipcRender的两种方法

![111](../../.vuepress/public/image/electron/47.png)
![111](../../.vuepress/public/image/electron/48.png)
![111](../../.vuepress/public/image/electron/49.png)
![111](../../.vuepress/public/image/electron/50.png)
![111](../../.vuepress/public/image/electron/51.png)
![111](../../.vuepress/public/image/electron/52.png)

- 模块安装 wait on 和 concurently（同时执行多个命令）
![111](../../.vuepress/public/image/electron/53.png)

### 生成随机数，并且控制
![111](../../.vuepress/public/image/electron/54.png)

### 桌视频流的捕获，桌面流的捕获

- 视频流的捕获
![111](../../.vuepress/public/image/electron/55.png)
![111](../../.vuepress/public/image/electron/56.png)
![111](../../.vuepress/public/image/electron/57.png)
![111](../../.vuepress/public/image/electron/58.png)
![111](../../.vuepress/public/image/electron/59.png)

- 桌面流的捕获

![111](../../.vuepress/public/image/electron/60.png)

### 指令的响应

- reboot。js

![111](../../.vuepress/public/image/electron/61.png)
![111](../../.vuepress/public/image/electron/62.png)
![111](../../.vuepress/public/image/electron/63.png)
![111](../../.vuepress/public/image/electron/64.png)
![111](../../.vuepress/public/image/electron/65.png)

- 鼠标响应事件缩放
![111](../../.vuepress/public/image/electron/66.png)