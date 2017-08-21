// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */
const routers = [{
  path: '/',
  name: 'index',
  component(resolve) {
    require.ensure(['./App.vue'], () => {
      resolve(require('./App.vue'));
    });
  },
  children: [
    {
      path: '/oneyuan',
      name: 'oneyuan',
      component(resolve) {
        require.ensure(['./components/oneyuan/oneyuan.vue'], () => {
          resolve(require('./components/oneyuan/oneyuan.vue'));
        });
      }
    }, {
      path: '/welfare',
      name: 'welfare',
      component(resolve) {
        require.ensure(['./components/welfare/welfare.vue'], () => {
          resolve(require('./components/welfare/welfare.vue'));
        });
      }
    }, {
      path: '/day',
      name: 'day',
      component(resolve) {
        require.ensure(['./components/recommend/recommend.vue'], () => {
          resolve(require('./components/recommend/recommend.vue'));
        });
      },
      meta: {requiresAuth: true}
    }, {
      path: '/ios',
      name: 'ios',
      component(resolve) {
        require.ensure(['./components/lists/ios.vue'], () => {
          resolve(require('./components/lists/ios.vue'));
        });
      },
      meta: {requiresAuth: true}
    }, {
      path: '/android',
      name: 'android',
      component(resolve) {
        require.ensure(['./components/lists/android.vue'], () => {
          resolve(require('./components/lists/android.vue'));
        });
      }
    }, {
      path: '/web',
      name: 'web',
      component(resolve) {
        require.ensure(['./components/lists/web.vue'], () => {
          resolve(require('./components/lists/web.vue'));
        });
      }
    }
  ]
},
  {
    path: '/clbindex',
    name: 'clbindex',
    component(resolve) {
      require.ensure(['./components/clb/clbindex.vue'], () => {
        resolve(require('./components/clb/clbindex.vue'));
      });
    }
  },
  {
    path: '/clbnews',
    name: 'clbnews',
    component(resolve) {
      require.ensure(['./components/clb/clbnews.vue'], () => {
        resolve(require('./components/clb/clbnews.vue'));
      });
    }
  },
  {
    path: '/clbmyHome',
    name: 'clbmyHome',
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    component(resolve) {
      require.ensure(['./components/clb/clbmyHome.vue'], () => {
        resolve(require('./components/clb/clbmyHome.vue'));
      });
    }
  },
  {
    path: '/clblogin',
    name: 'clblogin',
    component(resolve) {
      require.ensure(['./components/clb/clblogin.vue'], () => {
        resolve(require('./components/clb/clblogin.vue'));
      });
    }
  },
  {
    path: '/clbregister1',
    name: 'clbregister1',
    component(resolve) {
      require.ensure(['./components/clb/clbregister1.vue'], () => {
        resolve(require('./components/clb/clbregister1.vue'));
      });
    }
  },
  {
    path: '/wecome',
    name: 'wecome',
    component(resolve) {
      require.ensure(['./components/wecome/wecome.vue'], () => {
        resolve(require('./components/wecome/wecome.vue'));
      });
    }
  }];

export default routers;
