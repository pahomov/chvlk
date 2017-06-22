const path = require('path');
const ghpages = require('gh-pages');

const styleguidePath = path.join(__dirname, '..', 'styleguide');

const props = {
  user: {
    name: 'npm gh-pages',
    email: 'gh-pages@localhost'
  },
};

if (process.env.GH_TOKEN) {
  const packageRepo = require('../package').repository.url;

  console.log('GH_TOKEN exist');
  console.log(
    'repo: %s', packageRepo.replace('github.com', '[GH_TOKEN]@github.com')
  );

  props.repo =
    packageRepo.replace(
      'github.com',
      process.env.GH_TOKEN + '@github.com'
    );
}

ghpages.publish(styleguidePath, props, err => {
  if (err) {
    console.error('Error when publishing docs!');
    console.error(err);
    throw err;
  }
  console.log('Documentation successfully uploaded!');
});
