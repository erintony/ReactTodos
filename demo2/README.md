# 项目说明
使用react.js ,模仿Backone.js todos 实现,
使用facebook官方推荐的flux框架统一管理数据

## 环境
- react 
- Es2015
- babel
- webpack
- flux

## 依赖模块安装
- 在项目目录下运行`npm install`

## 运行
- 方式一
1. 在项目目录运行`webpack`
2. 在浏览器打开index.html

- 方式二 监听更新，实时编译
1. 在项目目录运行 `npm run build`

- 方式三
使用webpack-dev-server 启动本地服务运行
1. 在项目目录运行`npm run demo2`
2. 打开浏览器，访问http://localhost:8080

## flux数据单向流动过程
- 用户访问 View
- View 发出用户的 Action
- Dispatcher 收到 Action，要求 Store 进行相应的更新
- Store 更新后，发出一个"change"事件
- View 收到"change"事件后，更新页面

##参考
- [flux官方文档](http://facebook.github.io/flux/docs/overview.html#content)
- [阮一峰flux教程](http://www.ruanyifeng.com/blog/2016/01/flux.html)