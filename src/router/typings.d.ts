import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /** 控制可以访问该页面的角色 */
    roles?: string[];
    /** 是否需要登录才能访问当前页面 ( 每个路由都必须声明 ) */
    requiresAuth: boolean;
    /** 在侧边菜单中显示的图标 */
    icon?: string;
    /** 在侧边菜单和面包屑中显示的本地化名称 */
    locale?: string;
    /** 如果为 true, 则在侧边菜单中不显示该路由 */
    hideInMenu?: boolean;
    /** 如果设置为 true, 则在侧边菜单中不显示子菜单 */
    hideChildrenInMenu?: boolean;
    /** 如果设置为一个名称, 则根据设置的名称高亮显示菜单 */
    activeMenu?: string;
    /** 排序路由菜单项如果设置为一个数字, 值越高, 越靠前 */
    order?: number;
    /** 如果设置为 true, 则标签不会固定在标签栏中 */
    noAffix?: boolean;
    /** 如果设置为 true, 则页面不会被缓存 */
    ignoreCache?: boolean;

    /**
     * 配置该页面使用的布局, 布局名称为 layouts 目录下的文件名
     */
    layout?: string;

    /**
     * 由 vite-plugin-vue-layouts 插件生成的布局层标志, 请勿手动设置
     */
    isLayout?: boolean;
  }
}
