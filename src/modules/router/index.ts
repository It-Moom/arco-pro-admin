import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';
import { setupLayouts } from 'virtual:generated-layouts';

const finalRoutes = setupLayouts(routes);

const router = createRouter({
  history: createWebHistory(),
  routes: finalRoutes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
export {
  finalRoutes,
};
