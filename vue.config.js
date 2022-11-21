// const { defineConfig } = require("@vue/cli-service");
const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, '.src/assets/styles/main.scss'),
      ],
    });
}
module.exports = {
  chainWebpack: (config) => {
    const imgRule = config.module.rule('images');
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('stylus').oneOf(type)));
    imgRule
      .use('file-loader')
      .loader('image-webpack-loader')
      .tap((options) => {
        const ret = options || {};
        ret.pngquant = {
          quality: [0.65, 0.90],
          speed: 4,
        };
        return ret;
      });
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/styles/main.scss";',
      },
    },
  },
};
