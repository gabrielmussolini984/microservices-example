module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
    ],
  
    plugins: [
      ['module-resolver', {
        alias: {
            "@modules": "./src/modules",
            "@config": "./src/shared/config",
            "@errors": "./src/shared/errors",
            "@containers": "./src/shared/containers",
            "@shared": "./src/shared",
        }
      }],
      'babel-plugin-transform-typescript-metadata',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  };