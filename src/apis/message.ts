import { request } from '@/utils/request';

export interface MessageRecord {
  id: number;
  type: string;
  title: string;
  subTitle: string;
  avatar?: string;
  content: string;
  time: string;
  status: 0 | 1;
  messageType?: number;
}
export type MessageListType = MessageRecord[];

export function queryMessageList() {
  return request.post<MessageListType>('/api/message/list').then(res => res.data);
}

interface MessageStatus {
  ids: number[];
}

export function setMessageStatus(data: MessageStatus) {
  return request.post<MessageListType>('/api/message/read', data).then(res => res.data);
}

export interface ChatRecord {
  id: number;
  username: string;
  content: string;
  time: string;
  isCollect: boolean;
}

export function queryChatList() {
  return request.post<ChatRecord[]>('/api/chat/list').then(res => res.data);
}
