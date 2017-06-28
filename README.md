[TOC]

# React Native Demo

## Note 
    一个用react native的类似笔记本的Demo

### 安装
1. clone repo
    git clone ... .git
2. cd 项目路径
3. 安装依赖  `npm install `
4. 安装以Android为例，
    a：首先使用`adb reverse tcp 8081 tcp:8081` 将电脑8081端口反向代理带测试机
    b:`react-native run-android`  运行

## lark 一个通讯录App

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

## NavigationUsage

NavigationUsage的用法

## PanResponderUsage

PanResponderUsage的用法

## HybridUsage

React Native 网络访问，WebView的使用，混合开发封装NativeUI组件

