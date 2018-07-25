import * as webpack from 'webpack';

const webpackOutputOptions = {
  assets: false, // listing all assets is very noisy when using assets directories
  children: false, // listing all children is very noisy in AOT and hides warnings/errors
  chunkModules: false,
  chunks: true,
  colors: true,
  hash: true,
  modules: false,
  reasons: false,
  timings: true,
  version: false,
  warnings: true,
};

const verboseWebpackOutputOptions = {
  assets: true,
  children: true,
  chunkModules: false,
  reasons: true,
  version: true,
};

export function getWebpackStatsConfig(verbose = false): webpack.Stats.ToJsonOptionsObject {
  return verbose
    ? { ...webpackOutputOptions, ...verboseWebpackOutputOptions }
    : webpackOutputOptions;
}
