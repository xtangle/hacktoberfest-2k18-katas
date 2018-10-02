#! /usr/bin/env node

const { exec, spawnSync } = require('child_process');

function seeChangedFiles(cb) {
  exec('git diff --name-only master', (err, out) => {
    const files = out.split('\n');
    cb(files);
  });
}

function runCommand(command, argv) {
  const { status } = spawnSync(command, argv, { stdio: 'inherit' });
  return status;
}

seeChangedFiles(files => {
  const testFiles = files.filter(name => name.indexOf('.test.js') !== -1);
  const implementationFiles = files.filter(
    name => name.indexOf('.test.js') === -1
  );

  // For a PR to be valid, it needs:
  // - A fixed implementation file
  // - A new test case
  // - An empty new implementation file
  if (testFiles.length !== 1 || implementationFiles.length !== 2) {
    console.log('This PR has more changed files than necessary!');
    process.exit(1);
    return;
  }

  // Find the file to test
  const testFilePrefix = testFiles[0].split('.')[0];
  const implementationFileToTest = implementationFiles.find(
    name => !name.startsWith(testFilePrefix)
  );
  const testFileToRun = implementationFileToTest.replace('.', '.test.');

  // Launch the tests
  console.log('Launching test: ', `jest ${testFileToRun}`);
  const status = runCommand('node_modules/.bin/jest', [testFileToRun]);

  // Exit with the same status as the tests
  console.log('Exiting with status: ' + status);
  process.exit(status);
});
