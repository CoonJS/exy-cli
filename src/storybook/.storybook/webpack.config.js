const path = require('path');
const modulesPath = path.resolve(__dirname, '../node_modules');

const merge = require('webpack-merge');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

const fs = require('fs');
const pkg = require('../package.json');
const deps = [].concat(
  Object.keys(pkg.dependencies),
  Object.keys(pkg.devDependencies)
);
const bemLevels = deps
  .filter(dep => ~dep.indexOf('@bizone'))
  .map(dep => {
    const blocksPath = `node_modules/${dep}/blocks`;
    const depPath = path.resolve(__dirname, '..', blocksPath);
    return fs.existsSync(depPath) ? blocksPath : null;
  })
  .filter(dep => dep !== null)
  .concat(['blocks']);

module.exports = (baseConfig, env) => {
  // env = building the static ? 'PRODUCTION' : 'DEVELOPMENT'
  const babelConfig = baseConfig.module.rules[0].query;

  baseConfig.module.rules = [];
  const defaults = genDefaultConfig(baseConfig, env);

  return merge(defaults, {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, '../.storybook'),
            path.resolve(__dirname, '../blocks'),
            path.resolve(modulesPath, '@bizone'),
            path.resolve(modulesPath, '@bem'),
            path.resolve(modulesPath, 'easy-bem-naming')
          ],
          use: [
            {
              loader: 'webpack-bem-loader',
              options: {
                techs: ['js', 'less'],
                levels: bemLevels
              }
            },
            {
              loader: 'babel-loader',
              options: babelConfig
            }
          ]
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader?importLoaders=1', 'less-loader']
        },
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader']
        },
        {
          test: /\.jsx?$/,
          exclude: modulesPath,
          loader: 'prettier-loader?singleQuote=true'
        },
        {
          test: /\.less$/,
          exclude: modulesPath,
          loader: 'prettier-loader?parser=less'
        }
      ]
    }
  });
};
