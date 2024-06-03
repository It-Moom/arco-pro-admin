import type { TableData } from '@arco-design/web-vue/es/table/interface';
import { request } from '@/utils/request';

export interface ContentDataRecord {
  x: string;
  y: number;
}

export function queryContentData() {
  return request.get<ContentDataRecord[]>('/api/content-data').then(res => res.data);
}

export interface PopularRecord {
  key: number;
  clickNumber: string;
  title: string;
  increases: number;
}

export function queryPopularList(params: { type: string }) {
  return request.get<TableData[]>('/api/popular/list', { params }).then(res => res.data);
}
