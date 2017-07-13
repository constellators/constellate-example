module.exports = {
  projects: {
    utils: {
      compiler: 'babel',
    },
    'react-app': {
      compiler: 'babel',
      dependencies: ['utils'],
    },
    'web-client': {
      dependencies: ['react-app'],
      compiler: 'webpack',
      compilerOptions: {
        bundledDependencies: ['react-app'],
      },
      develop: 'webpack',
    },
    'web-server': {
      dependencies: ['react-app', 'web-client'],
      compiler: 'webpack-node',
      compilerOptions: {
        bundledDependencies: ['react-app'],
      },
      develop: 'server',
    },
  },
}
