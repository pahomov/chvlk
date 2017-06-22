const path = require('path');
const ghpages = require('gh-pages');
const git = require('git-rev');

git.branch(branch => {
  if (branch !== 'master') {
    return
  }

  const styleguidePath = path.join(__dirname, '..', 'styleguide');

  const props = {
    user: {
      name: 'Oleg Repin',
      email: 'oleg.repin@iqoption.com'
    },
  };

  if (process.env.GH_TOKEN) {
    const packageRepo = require('../package').repository.url;

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

});
