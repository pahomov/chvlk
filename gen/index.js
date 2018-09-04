const fs = require('fs');
const path = require('path');
const getDirectories = require('../utils/getDirectories');

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const existingComponents = getDirectories(componentsDir);

const templates = {
  'component': '%COMPONENT%.tsx',
  'doc': '%COMPONENT%.md',
  'index': 'index.ts',
  'snapshot': '%COMPONENT%.snapshot.ts',
  'test': '%COMPONENT%.test.tsx',
  'import': path.join('..', '..', '..', '%COMPONENT%.js'),
}


const name = process.argv[2];


if (!name) {
  console.error('Please, specify component\'s name');
  process.exit(1);
}


// capitalize
const capitalizedName = name[0].toUpperCase() + name.slice(1);


const pasteName = string => string.replace(
  /%COMPONENT%/g,
  capitalizedName
);


// find similar name
const nameLow = capitalizedName.toLowerCase();
const similarComponentIndex = existingComponents
  .map(c => c.toLowerCase())
  .indexOf(nameLow);

if (similarComponentIndex !== -1) {
  console.error(
    `Could not create component "${
      capitalizedName
    }". Component with similar name exist: "${
      existingComponents[similarComponentIndex]
    }".`
  );
  process.exit(1);
}

try {
  const componentDirectory = path.join(
    componentsDir,
    capitalizedName
  )
  fs.mkdirSync(componentDirectory);

  Object
    .keys(templates)
    .forEach(key => {
      const template = fs.readFileSync(
        path.join(__dirname, `_${key}`),
        'utf8'
      );

      const content = pasteName(template);
      const fileName = pasteName(templates[key]);

      fs.writeFileSync(
        path.join(componentDirectory, fileName),
        content,
        { encoding: 'utf8' }
      );
    });
  console.log(`Component ${capitalizedName} created successfully`);
} catch (e) {
  console.error(`Error while creating component files`);
  console.error(e);
}
