import { request } from '@/utils/request';
import type { GeneralChart } from '@/types/global';

export interface ChartDataRecord {
  x: string;
  y: number;
  name: string;
}
export interface DataChainGrowth {
  quota: string;
}

export interface DataChainGrowthRes {
  count: number;
  growth: number;
  chartData: {
    xAxis: string[];
    data: { name: string; value: number[] };
  };
}
export function queryDataChainGrowth(data: DataChainGrowth) {
  return request.post<DataChainGrowthRes>('/api/data-chain-growth', data).then(res => res.data);
}

export interface PopularAuthorRes {
  list: {
    ranking: number;
    author: string;
    contentCount: number;
    clickCount: number;
  }[];
}

export function queryPopularAuthor() {
  return request.get<PopularAuthorRes>('/api/popular-author/list').then(res => res.data);
}

export interface ContentPublishRecord {
  x: string[];
  y: number[];
  name: string;
}

export function queryContentPublish() {
  return request.get<ContentPublishRecord[]>('/api/content-publish').then(res => res.data);
}

export function queryContentPeriodAnalysis() {
  return request.post<GeneralChart>('/api/content-period-analysis').then(res => res.data);
}

export interface PublicOpinionAnalysis {
  quota: string;
}
export interface PublicOpinionAnalysisRes {
  count: number;
  growth: number;
  chartData: ChartDataRecord[];
}
export function queryPublicOpinionAnalysis(data: DataChainGrowth) {
  return request
    .post<PublicOpinionAnalysisRes>(
      '/api/public-opinion-analysis',
      data,
    )
    .then(res => res.data);
}
export interface DataOverviewRes {
  xAxis: string[];
  data: Array<{ name: string; value: number[]; count: number }>;
}

export function queryDataOverview() {
  return request.post<DataOverviewRes>('/api/data-overview').then(res => res.data);
}
