module.exports = {
  projects: {
    'react-app': {
      compiler: 'babel',
    },
    'web-client': {
      compiler: 'webpack',
      develop: 'webpack',
    },
    'web-server': {
      compiler: 'webpack-node',
      develop: 'server',
    },
  },
}
