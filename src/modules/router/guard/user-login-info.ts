import type { LocationQueryRaw, Router } from 'vue-router';
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
      if (to.name === 'Login')
        return next();
    }

    next({
      name: 'Login',
      query: { redirect: to.name, ...to.query } as LocationQueryRaw,
    });
  });
}
