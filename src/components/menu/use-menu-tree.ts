import { computed } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { deepClone } from 'mixte';
import { finalRoutes } from '@/modules/router';

function formatRoute(originRoutes: RouteRecordRaw[]) {
  const routes = originRoutes.map((_route) => {
    return _route.meta?.isLayout
      ? { ..._route.children![0] as RouteRecordRaw, path: _route.path }
      : _route;
  });

  routes.forEach((route) => {
    if (!route.children?.length) return;

    route.children = route.children.map((route) => {
      return route.path && route.children?.length === 1 && route.children[0].path === ''
        ? { ...route.children[0], path: route.path }
        : route;
    });

    route.children = formatRoute(route.children);
  });

  return routes;
}

export default function useMenuTree() {
  const permission = usePermission();
  const appStore = useAppStore();

  const appRoute = computed(() => {
    if (appStore.menuFromServer)
      return appStore.appAsyncMenus;

    return finalRoutes;
  });
  const menuTree = computed(() => {
    const copyRouter = formatRoute(deepClone(appRoute.value));

    copyRouter.sort((a: RouteRecordRaw, b: RouteRecordRaw) => {
      return (a.meta?.order || 0) - (b.meta?.order || 0);
    });

    function travel(_routes: RouteRecordRaw[], layer: number) {
      if (!_routes) return null;

      const collector: any = _routes.map((_element) => {
        const element = _element.meta?.isLayout ? _element.children![0] : _element;

        // no access
        if (!permission.accessRouter(element))
          return null;

        // leaf node
        if (element.meta?.hideChildrenInMenu || !element.children) {
          element.children = [];
          return element;
        }

        // route filter hideInMenu true
        element.children = element.children.filter(
          x => x.meta?.hideInMenu !== true,
        );

        // Associated child node
        const subItem = travel(element.children, layer + 1);

        if (subItem.length) {
          element.children = subItem;
          return element;
        }
        // the else logic
        if (layer > 1) {
          element.children = subItem;
          return element;
        }

        if (element.meta?.hideInMenu === false)
          return element;

        return null;
      });
      return collector.filter(Boolean);
    }

    return travel(copyRouter, 0);
  });

  return {
    menuTree,
  };
}
