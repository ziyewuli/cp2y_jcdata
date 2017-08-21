# vue_clb
>  本项目是基于vue2实战项目。代码简单易懂，注释多多。实现了移动端使用最多的 无限滚动，图片加载，左右滑动，等待。

###首先
nginx+host获取线上接口 接口https://clb.yztz.cn/app/index.html#/index

### 项目技术架构
***
*  vue-cli
*  vue
*  vue-resource
*  vue-router
*  vuex
*  vue-awesome-swiper
*  vue-infinite-scroll
*  stylus
*  webpack

###安装
***
项目地址：（`git clone`）
```shell
git clone https://github.com/ziyewuli/vue_clb.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install 或使用淘宝镜像cnpm install
```
启动服务(http://localhost:5555)

```
npm run dev
```
发布代码

```
npm run build
```
### 安装注意
安装 vue-cli
```
npm install -g vue-cli
```
安装 vue-cli eslint
```
npm install -g eslint
```
 安装依赖 friendly-errors-webpack-plugin

```
npm install friendly-errors-webpack-plugin --save-dev
```
###目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── common          // 公共的css js 资源
│   ├── components     // 各种组件
│   ├── App.vue         // 主页面 
│   ├── vuex           // vuex状态管理器
│   ├── router.js     // 路由配置器
│   └── main.js        // Webpack 预编译入口
</pre>

###实现的功能
***
* 定时器功能
* 轮播图
* 瀑布流布局
* 无限滚动
* 侧边导航
* 图片懒加载
* 左右滑动切换
* 登录、注册
* 等等

### 正在实现的功能
***
* 上拉加载
*  搜索
*  交易
*  等等

