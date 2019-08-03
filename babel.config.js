module.exports = {
    presets: [
        ['@vue/app', { useBuiltIns: 'entry' }, "@babel/preset-env"]
    ],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant'],
        ["transform-modules", {
            "cube-ui": {
                "transform": "cube-ui/lib/${member}",
                "kebabCase": true,
                "style": {
                    "ignore": ["create-api", "better-scroll"]
                }
            }
        }]
    ]
}