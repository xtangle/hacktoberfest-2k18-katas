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
    name => name.index('.test.js') === -1
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

  const testFile = testFiles[0];
  const status = runCommand('jest', [testFile]);

  process.exit(status);
});
