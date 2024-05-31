import type { Router } from 'vue-router';
import { setRouteEmitter } from '@/utils/route-listener';

/**
 * 路由监听
 */
export function routeListener(router: Router) {
  router.beforeEach((to) => {
    setRouteEmitter(to);
  });
}
