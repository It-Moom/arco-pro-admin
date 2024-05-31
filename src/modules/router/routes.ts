import { routes } from 'vue-router/auto-routes';
import { setupLayouts } from 'virtual:generated-layouts';

const finalRoutes = setupLayouts(routes);

export default finalRoutes;
