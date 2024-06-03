import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { Message, Modal } from '@arco-design/web-vue';
import type { HttpResponse } from './types';
import { getToken } from '@/utils/auth';

/**
 * 创建 Axios 实例
 */
export function createAxiosInstance(baseURL: string) {
  const request = axios.create({
    method: 'GET',
    baseURL,
  });

  // 请求拦截器
  request.interceptors.request.use(
    async (config) => {
      config.headers = config.headers ?? {};

      const token = getToken();

      if (token)
        config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // 响应拦截器
  request.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => {
      const res = response.data;

      // 如果自定义代码不是 20000, 则判断为错误
      if (res.code !== 20000) {
        Message.error({
          content: res.msg || 'Error',
          duration: 5 * 1000,
        });

        // 50008: 非法令牌; 50012: 其他客户端登录; 50014: 令牌过期;
        if ([50008, 50012, 50014].includes(res.code) && response.config.url !== '/api/user/info') {
          Modal.error({
            title: 'Confirm logout',
            content: 'You have been logged out, you can cancel to stay on this page, or log in again',
            okText: 'Re-Login',
            async onOk() {
              const userStore = useUserStore();

              await userStore.logout();
              window.location.reload();
            },
          });
        }

        return Promise.reject(new Error(res.msg || 'Error'));
      }

      return response;
    },
    (error) => {
      Message.error({
        content: error.msg || 'Request Error',
        duration: 5 * 1000,
      });

      return Promise.reject(error);
    },
  );

  return request;
}
