export const shortestPath = (graph, from, to) => {
  // since the input graph is unweighted, a BFS should be equivalent to Dijkstra
  let queue = [[from, null]];
  const prnt = {}, path = [];
  while (queue.length > 0) {
    const v = queue.shift();
    prnt[v[0]] = v[1];
    if (v[0] === to) {
      for (let v = to; v !== null; v = prnt[v])
        path.push(v);
      return path.reverse()
    }
    for (let i in graph.edges[v[0]]) {
      if (!(graph.edges[v[0]][i] in prnt))
        queue.push([graph.edges[v[0]][i], v[0]]);
    }
  }
  return null;
};
