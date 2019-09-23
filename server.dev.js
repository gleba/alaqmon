const ts = require('ts-node')
//require("tsconfig-paths").register()

ts.register({
  fast: true,
  cacheDirectory: '.cache_ts',
  compilerOptions: {
    target: 'es2015',
    module: 'commonjs',
  }
})
require('./src-srv')


