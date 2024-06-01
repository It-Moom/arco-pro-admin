import type { RouteRecordRaw } from 'vue-router';
import { REDIRECT_ROUTE_NAME } from '@/router/constants';

export const DEFAULT_LAYOUT = () => import('@/layouts/admin.vue');

export const REDIRECT_MAIN: RouteRecordRaw = {
  path: '/redirect',
  name: 'redirectWrapper',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
    hideInMenu: true,
  },
  children: [
    {
      path: '/redirect/:path',
      name: REDIRECT_ROUTE_NAME,
      component: () => import('@/pages/redirect/[...path].vue'),
      meta: {
        requiresAuth: true,
        hideInMenu: true,
      },
    },
  ],
};
