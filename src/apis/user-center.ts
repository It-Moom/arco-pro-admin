import type { HttpResponse } from '@/modules/axios/types';
import { request } from '@/utils/request';

export interface MyProjectRecord {
  id: number;
  name: string;
  description: string;
  peopleNumber: number;
  contributors: {
    name: string;
    email: string;
    avatar: string;
  }[];
}
export function queryMyProjectList() {
  return request.post<HttpResponse<MyProjectRecord[]>>('/api/user/my-project/list').then(res => res.data);
}

export interface MyTeamRecord {
  id: number;
  avatar: string;
  name: string;
  peopleNumber: number;
}
export function queryMyTeamList() {
  return request.post<HttpResponse<MyTeamRecord[]>>('/api/user/my-team/list').then(res => res.data);
}

export interface LatestActivity {
  id: number;
  title: string;
  description: string;
  avatar: string;
}
export function queryLatestActivity() {
  return request.post<LatestActivity[]>('/api/user/latest-activity').then(res => res.data);
}

export function saveUserInfo() {
  return request.post('/api/user/save-info').then(res => res.data);
}

export interface BasicInfoModel {
  email: string;
  nickname: string;
  countryRegion: string;
  area: string;
  address: string;
  profile: string;
}

export interface EnterpriseCertificationModel {
  accountType: number;
  status: number;
  time: string;
  legalPerson: string;
  certificateType: string;
  authenticationNumber: string;
  enterpriseName: string;
  enterpriseCertificateType: string;
  organizationCode: string;
}

export type CertificationRecord = Array<{
  certificationType: number;
  certificationContent: string;
  status: number;
  time: string;
}>;

export interface UnitCertification {
  enterpriseInfo: EnterpriseCertificationModel;
  record: CertificationRecord;
}

export function queryCertification() {
  return request.post<UnitCertification>('/api/user/certification').then(res => res.data);
}

export function userUploadApi(
  data: FormData,
  config: {
    controller: AbortController;
    onUploadProgress?: (progressEvent: any) => void;
  },
) {
  // const controller = new AbortController();
  return request.post('/api/user/upload', data, config).then(res => res.data);
}
