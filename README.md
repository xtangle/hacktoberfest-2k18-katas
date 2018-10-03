# Hacktoberfest 2018 Code Challenges

The point of this repository is to allow anyone to start contributing on a
public repository.

## Installation

You first need to fork the repository, then go in the directory and run:

```bash
# Install the dependencies
yarn
```

## How to participate

1. Find an issue that is **not assigned** yet
2. Implement it so that it passes all the tests (check with `yarn test src/theFunction.test.js`)
3. Add a test case for a new function. You can use `yarn generate` to create the two new files.
4. Create your **Pull Request**
5. Create an issue for your new feature

## Rules

- Each PR should contain **exactly 3 files**: your implementation, and 2 files for a new kata. All pull requests that do not follow this rule will be closed **immediately**.
- If you take too much time to complete an issue/PR, it will be closed and de-assigned from you
- Make sure your implementation passes the previous tests before opening a Pull Request.
- Do not use any npm package, it's no fun

## Files

When using `yarn generate`, two files are created:

**theFunction.js**:

```js
export const theFunction = () => {
  // TO IMPLEMENT IN ANOTHER PR
};
```

**theFunction.test.js**:

```js
import { theFunction } from './theFunction';

describe('theFunction', () => {
  it('does something', () => {
    expect(true).toBeTruthy(); // TODO Your test instead
  });

  it('does something else', () => {
    expect(true).toBeTruthy(); // TODO Your test instead
  });
})
```

You only need to update the test file, the actual implementation will be done
by someone else!
