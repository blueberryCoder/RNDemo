[TOC]

# React Native Demo
一些React Native的示例

## lark 一个模仿企业内部通讯录的App

### 服务端
服务端代码在 `lart/server`中，其中README.md是接口的说明文档
启动服务端：
```
$ cd lart/server
$ npm install -g express
$ npm start
```
### 客户端
客户端代码在 `lart/lartApp`目录中
将代码中的host地址，改成本地的ip地址。
安装客户端代码：
```
$ cd lart/lartApp
$ npm install 
$ adb reverse tcp 8081 tcp:8081
$ react-native run-android
```

### 默认的账号
邮箱：123@qq.com
密码：123

## nearyby 一个使用高德地图搜索附近的APP
代码上传之后，我将乎禁止该appID,需要使用的哈，需要去高德平台申请新的key，



## Note 一个记录日记的App
    一个用react native的类似笔记本的Demo

### 安装
1. clone repo
    git clone ... .git
2. cd 项目路径
3. 安装依赖  `npm install `
4. 安装以Android为例，
    a：首先使用`adb reverse tcp 8081 tcp:8081` 将电脑8081端口反向代理带测试机
    b:`react-native run-android`  运行


## NavigationUsage 记录Navigation的用法

NavigationUsage的用法

## PanResponderUsage 记录 PanResponder的用法

PanResponderUsage的用法

## HybridUsage 一些组件的用法（WebView,ProgressBar，网络请求与Native交互等等。）

React Native 网络访问，WebView的使用，混合开发封装NativeUI组件

