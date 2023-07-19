const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const SourceMapDevToolPlugin = require('source-map');
module.exports = [{
    //config-1
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
    devtool: false,
    entry: path.resolve(__dirname, 'resources/src/index.cjs'),
    experiments: {
        buildHttp: {
            allowedUris: ['http://localhost:8001/'],
            cacheLocation: false,
            frozen: false,
            lockfileLocation: path.resolve(__dirname, 'public/experiments/buildHttp'),
            upgrade: true
        },
        futureDefaults: true,
        css: {
            exportsOnly: true
        },
        asyncWebAssembly: true,
        layers: true,
        lazyCompilation: {
            imports: false,
            entries: false,
            test: (module) => !/moduleB/.test(module.nameForCondition())
        },
        outputModule: true,
        syncWebAssembly: true,
        topLevelAwait: true,
    },
    extends: "",
    externals: {
        jquery: 'jquery',
    },
    externalsPresets: {
        web: false,
        webAsync: true
    },
    externalsType: 'module',
    ignoreWarnings: [{
        module: /module2\.js\?[34]/, // A RegExp
    }, {
        module: /[13]/,
        message: /homepage/,
    }, /warning from compiler/, (warning) => true, ],
    infrastructureLogging: {
        colors: true,
        level: 'info',
    },
    loader: {},
    mode: "development",
    module: {
        rules: [{
            test: /\.css$/,
            use: 'css-loader'
        }, {
            test: /\.ts$/,
            use: 'ts-loader'
        }, ]
    },
    name: "",
    node: false,
    optimization: {
        chunkIds: 'named',
        //checkWasmTypes ? ,
        //concatenateModules ? ,
        //emitOnErrors ? ,
        //flagIncludedChunks ? ,
        //innerGraph ? ,
        //mangleExports ? ,
        //mangleWasmImports ? ,
        //mergeDuplicateChunks ? ,
        //minimize ? ,
        //minimizer ? ,
        //moduleIds ? ,
        //noEmitOnErrors ? ,
        //nodeEnv ? ,
        //portableRecords ? ,
        //providedExports ? ,
        //realContentHash ? ,
        //removeAvailableModules ? ,
        //removeEmptyChunks ? ,
        //runtimeChunk ? ,
        //sideEffects ? ,
        //splitChunks ? ,
        //usedExports ? ,
    },
    output: {
        library: 'amityuniversity',
        libraryTarget: 'umd',
        filename: 'amityuniversity.js',
        auxiliaryComment: 'Test Comment amity university',
    },
    parallelism: 1,
    performance: {
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
        },
    },
    plugins: [
        new NpmInstallPlugin({
            dev: function(module, path) {
                return ["babel-preset-react-hmre", "webpack-dev-middleware", "webpack-hot-middleware", ].indexOf(module) !== -1;
            },
            peerDependencies: true,
            quiet: false
        }),
        new SourceMapDevToolPlugin({
            filename: 'sourcemaps/application.map',
            append: false,
            fileContext: 'public',
            //append: '\n//# sourceMappingURL=https://example.com/sourcemap/[url]',
            publicPath: 'https://localhost:8000/src/',
            filename: 'redux.map.react',
        })
    ],
    profile: false,
    recordsInputPath: path.join(__dirname, 'public/register/records.json'),
    recordsOutputPath: path.join(__dirname, 'public/register/newRecords.json'),
    recordsPath: path.join(__dirname, 'public/register/records.json'),
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, 'src/utilities/'),
            Templates: path.resolve(__dirname, 'src/templates/'),
        },
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.json'],
        mainFields: ['loader', 'main'],
    },
    snapshot: {
        managedPaths: [path.resolve(__dirname, './node_modules')],
        immutablePaths: [],
        buildDependencies: {
            hash: true,
            timestamp: true,
        },
        module: {
            timestamp: true,
        },
        resolve: {
            timestamp: true,
        },
        resolveBuildDependencies: {
            hash: true,
            timestamp: true,
        },
    },
    stats: 'errors-only',
    target: ['web', 'node'],
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: /node_modules/,
        followSymlinks: true,
        stdin: true,
    }
}, {
    //config-2
    mode: "production"
}];
module.exports.parallelism = 0;