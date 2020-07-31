module.exports = {
  plugins: ['vuepress-plugin-demo-code'],
  title: 'vue-g2-plot',
  description: 'use g2plot in vue',
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-include'), {
        root: './docs/',
        includeRe: /<\[include\]\((.+)\)/i,
      });
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        'vue-g2-charts': '../dist',
      },
    },
  },
};
