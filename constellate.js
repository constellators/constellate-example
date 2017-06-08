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
      dependencies: ['react-app'],
      compilerOptions: {
        bundledDependencies: ['react-app'],
      },
    },
    'web-server': {
      compiler: 'webpack-node',
      role: 'server',
      dependencies: ['react-app', 'web-client'],
      compilerOptions: {
        nodeVersion: '7.10.0',
        bundledDependencies: ['react-app'],
      },
    },
  },
}
