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
      deploy: 'now',
      deployOptions: {
        scale: { min: 1, max: 1 },
        alias: 'constellate-example-web-server',
        // passThroughEnvVars: ['FOO'],
        nowConfig: {
          forwardNpm: true,
          public: false,
          user: {
            // uid: 'VRmSN0DNDgRWLLPaUxMKGSrr',
            username: 'ctrlplusb',
            // email: 'sean@ctrlplusb.com',
          },
        },
      },
    },
  },
}
