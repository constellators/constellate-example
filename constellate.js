module.exports = {
  projects: {
    'react-app': {
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
