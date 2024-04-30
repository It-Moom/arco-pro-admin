import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: 'vue-i18n', replacement: 'vue-i18n/dist/vue-i18n.cjs.js' }, // Resolve the i18n warning issue
      { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' }, // compile template
    ],
  },
  // 插件
  plugins: [
    // Vue 3 支持
    Vue(),
    // JSX 支持
    VueJsx(),
    // 原子化 CSS 引擎
    Unocss(),
    // 自动导入使用到的组件
    Components({
      dts: resolve(__dirname, './types/components.d.ts'),
      dirs: [
        resolve(__dirname, './src/components'),
      ],
      resolvers: [
        ArcoResolver({ importStyle: false }),
      ],
    }),
    // API 自动加载
    AutoImport({
      dts: resolve(__dirname, './types/auto-imports.d.ts'),
      vueTemplate: true,
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
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
