module.exports = {
  publishBranch: 'master',
  packageClient: 'yarn',
  // Default settings for each project if no project-specific settings are
  // provided:
  projectDefaults: {
    target: 'node',
    role: 'library',
    compiler: 'babel',
    // We plan to deploy to "now", which currently only supports the following
    // maximum version of node:
    nodeVersion: '7.10.0',
  },
  projects: {
    'react-app': {
      dependencies: ['utils'],
    },
    'web-client': {
      target: 'web',
      role: 'app',
      dependencies: ['react-app'],
    },
    'web-server': {
      target: 'node',
      role: 'server',
      // We are using Webpack rather than Babel as we are server side rendering a
      // React application.
      compiler: 'webpack',
      dependencies: ['react-app', 'utils', 'web-client'],
    },
  },
}
