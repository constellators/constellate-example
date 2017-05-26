module.exports = {
  target: 'node',
  role: 'server',
  // We are using Webpack rather than Babel as we are server side rendering a
  // React application.
  compiler: 'webpack',
  constellateDependencies: ['myapp-web-client', 'myapp-react-app', 'myapp-utils'],
}