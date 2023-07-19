const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin')
module.exports = {
    amd: {
        jQuery: true,
    },
    bail: true,
    cache: false,
    context: path.resolve(__dirname, 'resources/src'),
    dependencies: [],
    devServer: {
        allowedHosts: ['host.com', 'subdomain.host.com', 'subdomain2.host.com', 'host2.com', ],
    },
    devtool: "",
    entry: "",
    experiments: "",
    extends: "",
    externals: "",
    externalsPresets: "",
    externalsType: "",
    ignoreWarnings: "",
    infrastructureLogging: "",
    loader: "",
    mode: "",
    module: "",
    name: "",
    node: "",
    optimization: "",
    output: "",
    parallelism: "",
    performance: "",
    plugins: [
        new NpmInstallPlugin({
            dev: function(module, path) {
                return ["babel-preset-react-hmre", "webpack-dev-middleware", "webpack-hot-middleware", ].indexOf(module) !== -1;
            },
            peerDependencies: true,
            quiet: false,
            npm: 'tnpm'
        })
    ],
    profile: "",
    recordsInputPath: "",
    recordsOutputPath: "",
    recordsPath: "",
    resolve: "",
    resolveLoader: "",
    snapshot: "",
    stats: "",
    target: "",
    watch: "",
    watchOptions: ""
}