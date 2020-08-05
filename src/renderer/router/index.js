import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default function getRoutes() {
  return [
    {
      path: '/',
      name: 'index',
      component: async () =>
        import(/* webpackChunkName: "home" */ '../pages/home-page/index.vue'),
      type: 'menu',
      value: '首页',
      meta: {
        flush: true,
        permission: '#ueba#home-page',
        trace: { display: false },
      },
    },
  ];
}
