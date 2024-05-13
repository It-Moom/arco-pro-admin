import Mock from 'mockjs';

import './user';
import './message-box';

import '@/pages/dashboard/workplace/mock';

import '@/pages/dashboard/monitor/mock';

import '@/pages/list/card/mock';
import '@/pages/list/search-table/mock';

import '@/pages/form/step/mock';

import '@/pages/profile/basic/mock';

import '@/pages/visualization/data-analysis/mock';
import '@/pages/visualization/multi-dimension-data-analysis/mock';

import '@/pages/user/info/mock';
import '@/pages/user/setting/mock';

Mock.setup({
  timeout: '600-1000',
});
