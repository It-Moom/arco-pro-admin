import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import { appRoutes } from './routes';
import { REDIRECT_MAIN } from './routes/base';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...appRoutes,
    REDIRECT_MAIN,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
