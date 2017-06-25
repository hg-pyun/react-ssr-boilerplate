import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js'

const webpackCompiler = webpack(webpackConfig);

export default webpackDevMiddleware(webpackCompiler,{

    lazy: false,

    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 150,
        poll: true
    },

    publicPath: '/build',

    stats: {
        colors: true
    },
    serverSideRender: true,
});