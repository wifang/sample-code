module.exports = {
    publicPath: './',
    indexPath: 'assets/index.html',
    pages: {
        index: {
          entry: 'src/main.ts',
          template: 'public/index.html',
          filename: 'index.html',
          title: 'Index Page',
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        modal: {
            entry: 'src/modal.ts',
            template: 'public/modal.html',
            filename: 'modal.html',
            title: 'Modal Page',
            chunks: ['chunk-vendors', 'chunk-common', 'modal']
        },
    },
    css: {
        extract: {
            filename: '[name].[hash:8].css',
            chunkFilename: '[name].[hash:8].css',
        },
    },
    configureWebpack: {
        output: {
            filename: '[name].[hash:8].js',
            chunkFilename: '[name].[hash:8].js',
        }
    }
}
