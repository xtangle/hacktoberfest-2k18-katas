#! /usr/bin/env node

const { exec, spawnSync } = require('child_process');
const { chain, filter } = require('lodash');

function seeChangedFiles(cb) {
  exec('git diff --name-status master', (err, out) => {
    const files = chain(out)
      .split('\n')
      .filter()
      .map(s => s.split('\t'))
      .map(([status, filename]) => ({
        filename,
        isAdded: status === 'A',
        isModified: status === 'M',
        isTest: filename.indexOf('.test.js') !== -1,
      }))
      .filter(({ filename }) => filename.startsWith('src/'))
      .value();

    cb(files);
  });
}

function runCommand(command, argv) {
  const { status } = spawnSync(command, argv, { stdio: 'inherit' });
  return status;
}

seeChangedFiles(files => {
  const modifiedImplemFiles = filter(files, {
    isModified: true,
    isTest: false,
  });

  // For a PR to be valid, it needs:
  // - A fixed implementation file
  // - A new test case
  // - An empty new implementation file
  if (modifiedImplemFiles.length !== 1) {
    const modifiedFilesList = chain(modifiedImplemFiles)
      .map('filename')
      .join('\n -')
      .value();

    console.log(
      `This PR has changed more implementation files than necessary.` +
        `You should only change one per PR!\n` +
        `You changed:\n${modifiedFilesList}`
    );
    process.exit(1);
    return;
  }

  // Find the file to test
  const testFileToRun = modifiedImplemFiles[0].filename.replace('.', '.test.');

  // Launch the tests
  console.log('Launching test: ', `jest ${testFileToRun}`);
  const status = runCommand('node_modules/.bin/jest', [testFileToRun]);

  // Exit with the same status as the tests
  console.log('Exiting with status: ' + status);
  process.exit(status);
});
