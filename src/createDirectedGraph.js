function DGraph(labels, edges) {
  this.nodes = {};
  for (let i = 0; i < labels.length; i++) {
    let label = labels[i];
    this.nodes[label] = new DGNode(this, label);
  }
  this.edges = {};
  for (let i = 0; i < edges.length; i++) {
    let [from, to] = edges[i];
    let tos = this.edges[from];
    if (!tos) {
      tos = [];
      this.edges[from] = tos;
    }
    tos.push(to);
  }
}

DGraph.prototype.node = function(label) {
  return this.nodes[label] || null;
};

function DGNode(graph, label) {
  this.graph = graph;
  this.label = label;
}

DGNode.prototype.adjacent = function() {
  let tos = this.graph.edges[this.label] || [];
  let adjs = [];
  for (let i = 0; i < tos.length; i++) {
    adjs.push(this.graph.nodes[tos[i]]);
  }
  return adjs;
};

export const createDirectedGraph = (labels, edges) => new DGraph(labels, edges);
