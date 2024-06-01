/** 默认跳转路由名称 */
export const DEFAULT_ROUTE_NAME = 'Workplace';
/** 默认跳转路由 */
export const DEFAULT_ROUTE = {
  name: DEFAULT_ROUTE_NAME,
  title: 'menu.dashboard.workplace',
  fullPath: '/dashboard/workplace',
};

/**
 * 重定向路由名称
 */
export const REDIRECT_ROUTE_NAME = 'Redirect';

/**
 * 登录路由名称
 */
export const LOGIN_ROUTE_NAME = 'Login';

/**
 * 404 路由名称
 */
export const NOT_FOUND_ROUTE_NAME = 'NotFound';

/**
 * 白名单路由
 */
export const WHITE_LIST = [
  { name: NOT_FOUND_ROUTE_NAME, children: [] },
  { name: LOGIN_ROUTE_NAME, children: [] },
];
