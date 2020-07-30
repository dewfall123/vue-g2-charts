import tsPlugin from 'rollup-plugin-typescript2';
import vuePlugin from 'rollup-plugin-vue'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  external: ['@antv/g2plot', '@vue/composition-api'],
  plugins: [
    tsPlugin(),
    vuePlugin(),
  ],
};
