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
      role: 'client',
      bundledDependencies: ['react-app'],
    },
    'web-server': {
      compiler: 'webpack-node',
      role: 'server',
      dependencies: ['web-client'],
      bundledDependencies: ['react-app', 'utils'],
      compilerOptions: {
        nodeVersion: '7.10.0',
      },
    },
  },
}
