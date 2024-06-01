import type { Router } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router/auto';
import { routeListener } from './guard/route-listener';
import { userLoginInfo } from './guard/user-login-info';
import { permission } from './guard/permission';
import routes from './routes';
import NProgress from '@/modules/nprogress';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

routeListener(router as Router);
userLoginInfo(router as Router);
permission(router as Router);

router.beforeEach((to, from, next) => {
  NProgress.done();
  next();
});

export default router;
