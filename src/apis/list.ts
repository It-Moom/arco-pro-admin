import qs from 'query-string';
import type { DescData } from '@arco-design/web-vue/es/descriptions/interface';
import { request } from '@/utils/request';

export interface PolicyRecord {
  id: string;
  number: number;
  name: string;
  contentType: 'img' | 'horizontalVideo' | 'verticalVideo';
  filterType: 'artificial' | 'rules';
  count: number;
  status: 'online' | 'offline';
  createdTime: string;
}

export interface PolicyParams extends Partial<PolicyRecord> {
  current: number;
  pageSize: number;
}

export interface PolicyListRes {
  list: PolicyRecord[];
  total: number;
}

export function queryPolicyList(params: PolicyParams) {
  return request
    .get<PolicyListRes>('/api/list/policy', {
      params,
      paramsSerializer: (obj) => {
        return qs.stringify(obj);
      },
    })
    .then(res => res.data);
}

export interface ServiceRecord {
  id: number;
  title: string;
  description: string;
  name?: string;
  actionType?: string;
  icon?: string;
  data?: DescData[];
  enable?: boolean;
  expires?: boolean;
}
export function queryInspectionList() {
  return request.get('/api/list/quality-inspection').then(res => res.data);
}

export function queryTheServiceList() {
  return request.get('/api/list/the-service').then(res => res.data);
}

export function queryRulesPresetList() {
  return request.get('/api/list/rules-preset').then(res => res.data);
}
