import { createBinarySearchTree } from './createBinarySearchTree';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(createBinarySearchTree()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(createBinarySearchTree()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(createBinarySearchTree()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(createBinarySearchTree()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { createBinarySearchTree(); }).toThrow();
 */

describe('createBinarySearchTree', () => {
  const tree = createBinarySearchTree([5,1,8,3,7,2,6,9,4]);

  it('createBinarySearchTree creates a search tree from an array', () => {
    expect(tree.find).toBeDefined();
  });

  it('createBinarySearchTree.find returns elements which exist', () => {
    expect(tree.find(1)).toEqual(1);
    expect(tree.find(2)).toEqual(2);
    expect(tree.find(3)).toEqual(3);
    expect(tree.find(4)).toEqual(4);
    expect(tree.find(5)).toEqual(5);
    expect(tree.find(6)).toEqual(6);
    expect(tree.find(7)).toEqual(7);
    expect(tree.find(8)).toEqual(8);
    expect(tree.find(9)).toEqual(9);
  });

  it('createBinarySearchTree returns null if element is not found', () => {
    expect(tree.find(999)).toEqual(null);
  });
});


