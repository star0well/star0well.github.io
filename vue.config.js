module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/front/dist/" : "/",
  transpileDependencies: true,
  lintOnSave: false
};
