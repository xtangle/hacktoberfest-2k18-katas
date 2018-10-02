#! /usr/bin/env node

const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt({
    type: 'input',
    name: 'name',
    message: 'What is the name of the new function?',
  })
  .then(({ name }) => {
    generateMethodFile(name);
    generateTestFile(name);
  });

function generateMethodFile(name) {
  const filename = path.resolve(__dirname, `../src/${name}.js`);
  const content = `
export const ${name} = () => {
  // TO IMPLEMENT IN ANOTHER PR
};`.slice(1);

  fs.writeFile(filename, content, function(err) {
    if (err) {
      return console.log(`Could not create the "${name}.js" file!`);
    }

    console.log(`Succesfully the "${name}.js" file!`);
  });
}

function generateTestFile(name) {
  const filename = path.resolve(__dirname, `../src/${name}.test.js`);
  const content = `
import { ${name} } from './${name}';

describe('${name}', () => {
  it('does something', () => {
    expect(true).toBeTruthy(); // TODO Your test instead
  });

  it('does something else', () => {
    expect(true).toBeTruthy(); // TODO Your test instead
  });
})`.slice(1);

  fs.writeFile(filename, content, function(err) {
    if (err) {
      return console.log(`Could not create the "${name}.test.js" file!`);
    }

    console.log(`Succesfully the "${name}.test.js" file!`);
  });
}
