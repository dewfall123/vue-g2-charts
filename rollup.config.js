import tsPlugin from 'rollup-plugin-typescript2';
import vuePlugin from 'rollup-plugin-vue';
// import babelPlugin from '@rollup/plugin-babel';

export default {
  input: 'src/g2-charts.vue',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  external: ['@antv/g2plot', '@vue/composition-api'],
  plugins: [
    tsPlugin(),
    vuePlugin(),
    // babelPlugin({
    //   exclude: 'node_modules/**', // 只编译我们的源代码
    // }),
  ],
};
