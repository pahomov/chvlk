const path = require('path');
const ghpages = require('gh-pages');

const styleguidePath = path.join(__dirname, '..', 'styleguide');

ghpages.publish(styleguidePath, {
  user: {
    name: 'Oleg Repin',
    email: 'oleg.repin@iqoption.com'
  }
}, err => {
  if (err) { throw err; }
  console.log('Documentation successfully uploaded!');
});
