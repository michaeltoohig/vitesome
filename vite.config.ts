import { defineConfig } from 'vite';
import Unocss from 'unocss/vite'
import { resolve } from 'pathe';
import vue from '@vitejs/plugin-vue';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import Components from 'unplugin-vue-components/vite'
import Unfonts from 'unplugin-fonts/vite';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),
    // https://github.com/antfu/vite-plugin-components
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts',
    }),
    // https://github.com/cssninjaStudio/unplugin-fonts#readme
    Unfonts({
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans'],
      },
    }),

    Unocss({ /* options */ }),

    // https://github.com/intlify/unplugin-vue-i18n
    VueI18n({
      include: [resolve(__dirname, './locales/**')],
    }),
  ],

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
});
