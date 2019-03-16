import path from 'path'

import autoprefixer from 'autoprefixer'

import HTMLPlugin from 'html-webpack-plugin'
import nodeExternals from 'webpack-node-externals'

export default [
  // Backend
  {
    entry: {
      app: './src/controllers'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'node_modules'),
        nodeExternals()
      ]
    },
    devtool: 'sourcemap',
    module: {
      rules: [
        {
          test: /\.(jsx?|es\d?)$/,
          include: path.resolve(__dirname, 'src', 'js'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    'env',
                    {
                      target: {
                        node: 'current'
                      }
                    }
                  ]
                ],
                plugins: [
                  'add-module-exports',
                  'transform-async-to-generator',
                  'transform-runtime'
                ]
              }
            }
          ]
        },
        {
          test: /\.ya?ml$/,
          include: path.resolve(__dirname, 'src', 'configs'),
          use: [
            'json-loader',
            'yaml-loader'
          ]
        }
      ]
    }
  },
  {
    entry: {
      app: './src/routes/'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'node_modules')
      ]
    },
    externals: {
      document: 'document',
      window: 'window',
      navigator: 'navigator',
      jquery: 'jQuery',
      react: 'React',
      'react-dom': 'ReactDOM',
      forge: 'forge',
      firebase: 'firebase'
    },
    devtool: 'sourcemap',
    module: {
      rules: [
        {
          test: /\.(jsx?|es\d?)$/,
          include: path.resolve(__dirname, 'src', 'js'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    'env',
                    {
                      target: {
                        browsers: 'last 2 versions'
                      }
                    }
                  ],
                  'react'
                ],
                plugins: [
                  'add-module-exports',
                  'transform-async-to-generator',
                  'transform-runtime',
                  'react-require'
                ]
              }
            }
          ]
        },
        {
          test: /\.s[a|c]ss$/,
          include: path.resolve(__dirname, 'src', 'css'),
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: true,
                plugins: function () {
                  return [
                    autoprefixer
                  ]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'src', 'css'),
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: true,
                plugins: () => [
                  autoprefixer
                ]
              }
            }
          ]
        },
        {
          test: /\.ya?ml$/,
          include: path.resolve(__dirname, 'src', 'configs'),
          use: [
            'json-loader',
            'yaml-loader'
          ]
        },
        {
          test: /\.pug$/,
          include: path.resolve(__dirname, 'src', 'views'),
          use: 'pug-loader'
        }
      ]
    },
    plugins: [
      new HTMLPlugin({
        title: 'Team 2412 - The Robototes',
        filename: 'index.html',
        chunks: [ 'app' ],
        template: 'src/views/index.pug',
        minify: {
          collapseWhitespace: true
        }
      })
    ]
  }
]
