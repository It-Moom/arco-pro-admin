import type { RouteRecordNormalized } from 'vue-router';
import { request } from '@/utils/request';
import type { UserState } from '@/stores/user';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return request.post<LoginRes>('/api/user/login', data).then(res => res.data);
}

export function logout() {
  return request.post<LoginRes>('/api/user/logout').then(res => res.data);
}

export function getUserInfo() {
  return request.post<UserState>('/api/user/info').then(res => res.data);
}

export function getMenuList() {
  return request.post<RouteRecordNormalized[]>('/api/user/menu').then(res => res.data);
}
