const fs = require('fs');
const path = require('path');

module.exports = srcpath => fs
  .readdirSync(srcpath)
  .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());
