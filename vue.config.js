module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      // /*no*/ /*px*/生效
      sass: {
        sassOptions: {
          outputStyle: "expanded"
        }
      },
      postcss: {
        plugins: [
          require("postcss-px2rem-exclude")({
            // 以设计稿750为例， 750 / 10 = 75
            remUnit: 192,
            exclude: /node_modules/i
          })
        ]
      }
    }
  }
};
