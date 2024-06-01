import type { RouteRecordNormalized, Router } from 'vue-router';
import { NOT_FOUND_ROUTE_NAME, WHITE_LIST } from '../const';
import routes from '../routes';

/**
 * 路由权限守卫
 */
export function permission(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const appStore = useAppStore();
    const userStore = useUserStore();
    const Permission = usePermission();
    const permissionsAllow = Permission.accessRouter(to);

    // 针对来自服务端的菜单配置进行处理
    // 根据需要自行完善来源于服务端的菜单配置的 permission 逻辑
    if (appStore.menuFromServer) {
      // 没有务端菜单 && 不在白名单中, 则获取服务端菜单配置
      if (!appStore.appAsyncMenus.length && !WHITE_LIST.find(({ name }) => name === to.name))
        await appStore.fetchServerMenuConfig();

      const serverMenuConfig = [...appStore.appAsyncMenus, ...WHITE_LIST];

      let exist = false;

      while (serverMenuConfig.length && !exist) {
        const element = serverMenuConfig.shift();

        if (element?.name === to.name)
          exist = true;

        if (element?.children) {
          serverMenuConfig.push(
            ...(element.children as unknown as RouteRecordNormalized[]),
          );
        }
      }

      if (exist && permissionsAllow)
        next();
      else
        next({ name: NOT_FOUND_ROUTE_NAME });
    }
    else {
      if (permissionsAllow) {
        next();
      }
      else {
        next(
          Permission.findFirstPermissionRoute(routes, userStore.role) || { name: NOT_FOUND_ROUTE_NAME },
        );
      }
    }
  });
}
