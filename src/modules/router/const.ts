/**
 * 默认跳转路由名称
 */
export const DEFAULT_ROUTE_NAME = 'Workplace';

/**
 * 404 路由
 */
export const NOT_FOUND = {
  name: 'NotFound',
};

/**
 * 白名单路由
 */
export const WHITE_LIST = [
  { name: 'NotFound', children: [] },
  { name: 'Login', children: [] },
];
