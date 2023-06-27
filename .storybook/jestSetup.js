const fs = require('fs');
const path = require('path');

const generateSnapshotTests = (filePath) => {
  const folderPath = path.dirname(filePath);
  const testsFolder = `${folderPath}/__tests__`;
  const testFile = `${testsFolder}/snapshot.spec.tsx`;

  if (!fs.existsSync(testsFolder)) {
    fs.mkdirSync(testsFolder);
  }

  if (!fs.existsSync(testFile)) {
    fs.writeFileSync(
      testFile,
      `// THIS IS A GENERATED FILE. DO NOT MODIFY
import { snapshotTest } from '@storybook-utils';
const imports = require('../index.stories') as Record<string, any>;

Object.entries(imports)
  .filter(([key]) => key !== 'default')
  .forEach(([key, value]) => {
    snapshotTest(key, value);
  });
`,
    );
  }
};

function fromDir(startPath, filter) {
  if (!fs.existsSync(startPath)) return;

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter);
    } else if (filename.endsWith(filter)) {
      generateSnapshotTests(filename);
    }
  }
}

fromDir('./src', '.stories.tsx');
