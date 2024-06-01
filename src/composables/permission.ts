import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';

export function usePermission() {
  const userStore = useUserStore();

  function accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
    const requiresAuth = route.meta?.requiresAuth ?? true;

    return (
      !requiresAuth
      || !route.meta?.roles
      || route.meta?.roles?.includes('*')
      || route.meta?.roles?.includes(userStore.role)
    );
  }

  function findFirstPermissionRoute(_routers: any, role = 'admin') {
    const cloneRouters = [..._routers];
    while (cloneRouters.length) {
      const firstElement = cloneRouters.shift();
      if (
        firstElement?.meta?.roles?.find((el: string[]) => {
          return el.includes('*') || el.includes(role);
        })
      )
        return { name: firstElement.name };
      if (firstElement?.children)
        cloneRouters.push(...firstElement.children);
    }
    return null;
  }

  // 在这里你可以添加任何你想要的规则

  return {
    accessRouter,
    findFirstPermissionRoute,
  };
}
