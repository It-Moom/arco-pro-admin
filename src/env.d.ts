/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>; // eslint-disable-line ts/ban-types
  export default component;
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}
