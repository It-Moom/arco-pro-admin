import type { LocationQueryRaw, Router } from 'vue-router';
import { LOGIN_ROUTE_NAME } from '../const';
import { isLogin } from '@/utils/auth';

/**
 * 用户登录信息获取
 */
export function userLoginInfo(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();

    if (isLogin()) {
      if (userStore.role) {
        return next();
      }
      else {
        try {
          await userStore.info();
          return next();
        }
        catch (error) {
          await userStore.logout();
        }
      }
    }
    else {
      if (to.meta.requiresAuth === false)
        return next();
    }

    next({
      name: LOGIN_ROUTE_NAME,
      query: { redirect: to.name, ...to.query } as LocationQueryRaw,
    });
  });
}
