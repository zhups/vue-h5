const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ContentHash = require('webpack-replace-chunkhash-contenthash');
const path = require('path')
module.exports = {
    outputDir: "dist",
    filenameHashing: true,
    pages: undefined,
    lintOnSave: true,
    runtimeCompiler: false,
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false,
        modules: false,
        loaderOptions: {}
    },
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === "'production'") {
            config.output.filename('js/[id].[hash:12].js').end();
            config.output.chunkFilename('js/[id].[hash:12].js').end();

            config.module.rule('js').use('babel-loader')
        }
    },
    configureWebpack: config => {
        console.log(process.env.NODE_ENV)

        if (process.env.NODE_ENV === "'production'") {
            config.mode = "production";
            config.devtool = '';
        } else {
            config.devtool = 'eval';
        }
    },
    transpileDependencies: [],
    crossorigin: undefined,
    integrity: false,
}