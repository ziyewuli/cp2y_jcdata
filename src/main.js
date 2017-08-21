import Vue from 'vue';
import store from './vuex/store';
import VueRouter from 'vue-router';
import routes from './routers'; // 引入路由配置
import vueResource from 'vue-resource';
import infiniteScroll from 'vue-infinite-scroll';  // 引入滑动模块
import VueLazyload from 'vue-lazyload';  // 引入图片懒加载模块
import VueAwesomeSwiper from 'vue-awesome-swiper'; // 引入轮播图插件
import {loadFromlLocal} from './common/js/store';  // 公共方法：本地缓存
import 'common/css/index.styl'; // 引入公共样式
import {setCookie,getCookie} from './assets/js/cookie.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

// 导入UI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

// 注册组件
Vue.use(infiniteScroll);
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(iView);

// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
    error: require('./assets/404.png'),
    loading: require('./assets/loading.gif'),
    attempt: 1
  }
);
const router = new VueRouter({
  'linkActiveClass': 'active',
  routes // （缩写）相当于 routes: routes
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (getCookie('username')) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/clblogin',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})


// 初始化 leancloud-storage
import AV from 'leancloud-storage'
const APP_ID = 'tAvJucJiPN9h2Jsa4dqUB23x-gzGzoHsz'
const APP_KEY = 'DSlKWiaPIY42HNQYNkSI0mDJ'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
Vue.prototype.$AV = AV
/**
 * 创建和挂载根实例。
 * 记得要通过 router 配置参数注入路由，
 * 从而让整个应用都有路由功能
 */
const routerApp = new Vue({
  store,
  router
}).$mount('#app');

/**
 * loadFromlLocal()是读取本地缓存数据，具体common/js/store.js 查看
 *
 *
 */
if (!loadFromlLocal('gank', 'wecome', false)) {
  router.push('/wecome');
}
export default routerApp;
