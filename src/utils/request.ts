import { createAxiosInstance } from '@/modules/axios';

/**
 * 默认 Axios 实例
 */
export const request = createAxiosInstance(import.meta.env.APP_API_BASE_URL);
