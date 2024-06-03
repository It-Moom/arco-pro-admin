import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/mock/setup-mock';

setupMock({
  setup() {
    // submit
    Mock.mock(new RegExp('/api/channel-form/submit'), () => {
      return successResponseWrap('ok');
    });
  },
});
