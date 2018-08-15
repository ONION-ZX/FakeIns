module.exports = {
    test: /\.less/,
    use: ExtractTextPlugin.extract({
        use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
        fallback: 'style-loader'
    })
}