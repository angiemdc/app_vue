// const { defineConfig } = require("@vue/cli-service");

module.exports = {
  chainWebpack: (config) => {
    const imgRule = config.module.rule('images');
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
};
