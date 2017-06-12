module.exports = {
  publishing: {
    npm: {
      enabled: false,
    },
  },
  projects: {
    utils: {
      compiler: 'babel',
    },
    'react-app': {
      compiler: 'babel',
      dependencies: ['utils'],
    },
    'web-client': {
      compiler: 'webpack',
      develop: 'webpack',
      dependencies: ['react-app'],
      compilerOptions: {
        bundledDependencies: ['react-app'],
      },
    },
    'web-server': {
      compiler: 'webpack-node',
      develop: 'server',
      dependencies: ['react-app', 'web-client'],
      compilerOptions: {
        bundledDependencies: ['react-app'],
      },
    },
  },
}
