import { createDirectedGraph } from './createDirectedGraph';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(createDirectedGraph()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(createDirectedGraph()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(createDirectedGraph()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(createDirectedGraph()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { createDirectedGraph(); }).toThrow();
 */

describe('createDirectedGraph', () => {
  const nodes = [1, 2, 3, 4];
  const edges = [[1, 2], [2, 3], [3, 4], [4, 2]];
  let graph = createDirectedGraph(nodes, edges);

  it('createDirectedGraph returns a graph from nodes and edges', () => {
    expect(graph.node).toBeDefined();
    expect(graph.node(1)).toBeDefined();
    expect(graph.node(1).adjacent).toBeDefined();
    expect(graph.node(1).adjacent()).toBeDefined();
  });

  it('createDirectedGraph returns found node', () => {
    expect(graph.node(1).label).toEqual(1);
    expect(graph.node(1).adjacent().length).toEqual(1);
    expect(graph.node(1).adjacent()[0].label).toEqual(2);
  });

  it('createDirectedGraph returns null if node not found', () => {
    expect(graph.node(0)).toEqual(null);
  });
});
