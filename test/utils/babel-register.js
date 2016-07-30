require('babel-register')({
    plugins: [
        require.resolve('babel-plugin-transform-es2015-modules-commonjs'),
        require.resolve('babel-plugin-transform-es2015-arrow-functions')
    ],
    presets: [
        require.resolve('babel-preset-stage-0')
    ]
});
