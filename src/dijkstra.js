function depthOf(object) {
    var level = 1;
    var key;
    for(key in object) {
        if (!object.hasOwnProperty(key)) continue;

        if(typeof object[key] == 'object'){
            var depth = depthOf(object[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
}

function normalizePaths(paths, endNode) {
    let normal = false;

    while (!normal) {
        normal = true;
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            try {
                if (depthOf(path) > 1) {
                    for (let i = 0; i < depthOf(path); i++) {
                        path = path[0];
                    }
                    delete paths[i];
                    paths.push(flatten(path));
                    normal = false;
                }
            } catch (e) {
            }
        }

        paths.filter((el) => el)
    }

    for (let i = 0; i < paths.length; i++) {
        let path = paths[i];

        if (path && path[path.length - 1] !== endNode) {
            delete paths[i];
        }
    }

    return paths.filter((el) => el);
}

function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function findPathWithMinimalWeight(pathsWithWeight) {
    let numericKeys = [];
    Object.keys(pathsWithWeight).forEach(key => numericKeys.push(parseInt(key)));
    return pathsWithWeight[Math.min(...numericKeys)];
}

function findWeight(edges, source, target) {
    return edges.filter(edge => (edge.source === source && edge.target === target))[0].weight;
}

function edgesNearby(edges, currentNode) {
    return edges.filter(edge => edge.source === currentNode).length > 0;
}

function buildPaths(currentNode, edges, currentPath, endNode, firstLayer=false) {
    let paths = [];

    let originalEdges = edges.slice();
    for (let i = 0; i < originalEdges.length; i++) {
        let edge = originalEdges[i];

        if (edge && edge.source === currentNode) {
            let nextNode = edge.target;

            let newPath = currentPath.slice();
            newPath.push(nextNode);

            // we found top node
            if (nextNode === endNode) {
                paths.push(newPath);
            } else {
                newPath = [...buildPaths(nextNode, edges, newPath, endNode)];
                paths.push(newPath);
            }
        }
    }

    return paths;
}

function dijkstra(graph) {
    const { nodes, edges, startNode, endNode } = graph;

    const originalEdges = edges.slice();

    let paths = buildPaths(startNode, edges, [...startNode], endNode, true);

    paths = normalizePaths(paths, endNode);

    let pathsWithWeight = {};

    for (let i = 0; i < paths.length; i++) {
        let path = paths[i];
        let totalWeight = 0;
        for (let n = 0; n < path.length - 1; n++) {
            let source = path[n];
            let target = path[n + 1];

            totalWeight += findWeight(originalEdges, source, target);
        }

        if (totalWeight > 0) {
            pathsWithWeight[totalWeight] = path;
        }
    }

    return findPathWithMinimalWeight(pathsWithWeight);
};

exports.dijkstra = dijkstra;
