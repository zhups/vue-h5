const uglifyjsPlugin = require('uglifyjs-webpack-plugin')

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
        loaderOptions: {},
        modules: false
    },
    chainWebpack: (config) => {
        config.output.filename('js/[id].[hash].js').end();
        config.output.chunkFilename('js/[id].[hash].js').end();
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV == 'production') {
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false
                        },
                        compress: {
                            warnings: false,
                            drop_debugger: true,
                            drop_console: true,
                            pure_funcs: ['console.log']
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                })
            );

        }
    },
    transpileDependencies: [],
    crossorigin: undefined,
    integrity: false,
}