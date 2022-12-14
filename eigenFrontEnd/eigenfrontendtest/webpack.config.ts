import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: 'production',
    entry: './src/App.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module:{
        rules:[{
            test: '/\.ts|\.tsx$/',
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                    ['@babel/preset-env', {
                        "targets": "defaults" 
                    }],
                        '@babel/preset-react'
                    ]
                }
            }]
        }]
    },
};

export default config;