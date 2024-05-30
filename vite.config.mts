import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import VueRouter from 'unplugin-vue-router/vite';
import Layouts from 'vite-plugin-vue-layouts';
import Unocss from 'unocss/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import { MixteUseAutoImport } from '@mixte/use/register';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // 环境变量前缀
  envPrefix: 'APP_',
  // 路径别名
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: 'vue-i18n', replacement: 'vue-i18n/dist/vue-i18n.cjs.js' }, // Resolve the i18n warning issue
      { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' }, // compile template
    ],
  },
  // 插件
  plugins: [
    // 基于文件的路由
    VueRouter({
      dts: resolve(__dirname, './types/typed-router.d.ts'),
      exclude: ['**/components', '**/composables'],
    }),
    // 页面布局系统
    Layouts(),
    // Vue 3 支持
    Vue(),
    // JSX 支持
    VueJsx(),
    // 原子化 CSS 引擎
    Unocss(),
    // 将图标作为图标组件可进行导入
    Icons({
      scale: 1,
      compiler: 'vue3',
    }),
    // 自动导入使用到的组件
    Components({
      dts: resolve(__dirname, './types/components.d.ts'),
      dirs: [
        resolve(__dirname, './src/components'),
      ],
      resolvers: [
        // 自动导入图标组件
        IconsResolver({ prefix: 'i' }),
        // 自动导入 Arco 组件
        ArcoResolver({ importStyle: false }),
      ],
    }),
    // API 自动加载
    AutoImport({
      dts: resolve(__dirname, './types/auto-imports.d.ts'),
      vueTemplate: true,
      imports: [
        'vue',
        VueRouterAutoImports,
        'vue-i18n',
        '@vueuse/core',
        '@vueuse/math',
        MixteUseAutoImport({ useWithVueUseCore: true }),
      ],
      dirs: [
        resolve(__dirname, './src/composables'),
        resolve(__dirname, './src/stores'),
      ],
      resolvers: [
        ArcoResolver(),
      ],
      eslintrc: {
        enabled: true,
        filepath: resolve(__dirname, './.eslintrc-auto-import.json'),
      },
    }),
  ],
  // 开发服务器选项
  server: {
    port: 666,
  },
});
