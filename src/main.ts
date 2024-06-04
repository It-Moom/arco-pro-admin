import { createApp } from 'vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import App from './App.vue';
import directives from '@/directives';
import router from '@/modules/router/index';
import i18n from '@/modules/i18n/index';
import pinia from '@/modules/pinia/index';

import '@/components/chart/import-components';
import './mock';

import '@unocss/reset/tailwind-compat.css';
import 'uno.css';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/style/global.less';

const app = createApp(App);

app.use(ArcoVueIcon);

app.use(router);
app.use(pinia);
app.use(i18n);
app.use(directives);

app.mount('#app');
