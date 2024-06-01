import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { LOGIN_ROUTE_NAME, NOT_FOUND_ROUTE_NAME } from '@/modules/router/const';

export function usePermission() {
  const userStore = useUserStore();

  function accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
    const requiresAuth = route.meta?.requiresAuth ?? true;
    const roles = route.meta?.roles ?? ['*'];

    return !requiresAuth || roles.includes('*') || roles.includes(userStore.role);
  }

  function findFirstPermissionRoute(routers: RouteRecordRaw[], role = 'admin') {
    const cloneRouters = [...routers];

    while (cloneRouters.length) {
      const firstElement = cloneRouters.shift();

      // 如果有子路由, 则将子路由添加到队列中
      if (firstElement?.children?.length) {
        cloneRouters.push(...firstElement.children);
        continue;
      }

      // 如果是重定向路由, 则跳过
      if (firstElement?.redirect)
        continue;

      // 如果是登录或 404 页面, 则跳过
      if (firstElement?.name && [LOGIN_ROUTE_NAME, NOT_FOUND_ROUTE_NAME].includes(firstElement.name as string))
        continue;

      const roles = firstElement?.meta?.roles ?? ['*'];

      // 权限判断
      if (firstElement?.name && roles.find(el => el.includes('*') || el.includes(role)))
        return { name: firstElement.name };
    }

    return null;
  }

  // 在这里你可以添加任何你想要的规则

  return {
    accessRouter,
    findFirstPermissionRoute,
  };
}
