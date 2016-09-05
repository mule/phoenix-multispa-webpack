var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var elmSource = __dirname + '/web/elm'
module.exports = {
    entry: {
        main: "./web/static/js/app.js",
        elmApp: "./web/static/js/elmApp.js",
        reactApp: "./web/static/js/reactApp.js"
    },
    output: {
        path: "./priv/static/js",
        filename: "[name].bundle.js"
    },
    resolve: {
        modulesDirectories: ["node_modules", __dirname + "/web/static/js"]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ["es2015"]
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css")
        }, {
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            loader: 'elm-webpack?cwd=' + elmSource
        }]
    },
    plugins: [
        new ExtractTextPlugin("css/app.css"),
        new CopyWebpackPlugin([{
            from: "./web/static/assets"
        }])
    ]
};
