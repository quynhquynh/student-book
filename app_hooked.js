require('babel-register')({
  presets: ['es2015-node'],
  plugins: ['transform-object-rest-spread']
});
require('./app.js');
