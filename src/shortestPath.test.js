import { shortestPath } from './shortestPath';
import { createDirectedGraph } from './createDirectedGraph';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(shortestPath()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(shortestPath()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(shortestPath()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(shortestPath()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { shortestPath(); }).toThrow();
 */

describe('shortestPath', () => {
  let graph = createDirectedGraph([1, 2, 3, 4], [[1, 2], [2, 3], [3, 4], [2, 4]]);
  it('shortestPath returns the node labels of the shortest path from start to end', () => {
    const start = 1;
    const end = 4;
    const path = shortestPath(graph, start, end);

    expect(path).toEqual([1, 2, 4]);
  });
});
