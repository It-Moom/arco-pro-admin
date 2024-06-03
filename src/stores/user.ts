import { defineStore } from 'pinia';
import type { LoginData } from '@/apis/user';
import { getUserInfo, login as userLogin, logout as userLogout } from '@/apis/user';
import { clearToken, setToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';

export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  /** 用户名 */
  name?: string;
  /** 头像 */
  avatar?: string;
  /** 邮箱 */
  email?: string;
  /** 职位 */
  job?: string;
  /** 职位名称 */
  jobName?: string;
  /** 组织 */
  organization?: string;
  /** 组织名称 */
  organizationName?: string;
  /** 位置 */
  location?: string;
  /** 位置名称 */
  locationName?: string;
  /** 介绍 */
  introduction?: string;
  /** 电话号码 */
  phone?: string;
  /** 注册日期 */
  registrationDate?: string;
  /** 账户ID */
  accountId?: string;
  /** 认证 */
  certification?: number;
  /** 角色 */
  role: RoleType;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
    avatar: undefined,
    job: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    introduction: undefined,
    jobName: undefined,
    organizationName: undefined,
    locationName: undefined,
    phone: undefined,
    registrationDate: undefined,
    accountId: undefined,
    certification: undefined,
    role: '',
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },

  actions: {
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === 'user' ? 'admin' : 'user';
        resolve(this.role);
      });
    },
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Get user's information
    async info() {
      const res = await getUserInfo();

      this.setInfo(res.data);
    },

    // Login
    async login(loginForm: LoginData) {
      try {
        const res = await userLogin(loginForm);
        setToken(res.data.token);
      }
      catch (err) {
        clearToken();
        throw err;
      }
    },
    logoutCallBack() {
      const appStore = useAppStore();
      this.resetInfo();
      clearToken();
      removeRouteListener();
      appStore.clearServerMenu();
    },
    // Logout
    async logout() {
      try {
        await userLogout();
      }
      finally {
        this.logoutCallBack();
      }
    },
  },
});
