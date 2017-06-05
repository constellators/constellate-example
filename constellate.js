module.exports = {
  projects: {
    'react-app': {
      dependencies: ['utils'],
    },
    'web-client': {
      bundledDependencies: ['react-app'],
      role: 'client',
      compiler: 'webpack',
      compilerOptions: {
        browserList: '7.10.0',
      },
    },
    'web-server': {
      dependencies: ['web-client'],
      bundledDependencies: ['react-app', 'utils'],
      role: 'server',
      compiler: 'webpack-node',
      // We plan to deploy to "now", which currently supports the following
      // maximum version of node:
      compilerOptions: {
        nodeVersion: '7.10.0',
      },
    },
  },
}
