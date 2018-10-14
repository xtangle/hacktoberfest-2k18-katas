import { dijkstra } from './dijkstra';

describe('dijkstra', () => {
    it('dijkstra finds shortest path in linear graph', () => {
        const graph = {
            'nodes': [ 'A', 'B', 'C'],
            'edges': [
                {
                    'source': 'A',
                    'target': 'B',
                    'weight': 5,
                },
                {
                    'source': 'B',
                    'target': 'C',
                    'weight': 1,
                },
            ],
            'startNode': 'A',
            'endNode': 'B',
        }
        const shortestPath = ['A', 'B', 'C']
        expect(dijkstra(graph)).toEqual(shortestPath);
    });

    it('dijkstra finds shortest path in triangle', () => {
        const graph = {
            'nodes': [ 'A', 'B', 'C'],
            'edges': [
                {
                    'source': 'A',
                    'target': 'B',
                    'weight': 5,
                },
                {
                    'source': 'A',
                    'target': 'C',
                    'weight': 1,
                },
                {
                    'source': 'C',
                    'target': 'B',
                    'weight': 2,
                },
            ],
            'startNode': 'A',
            'endNode': 'B',
        }
        const shortestPath = ['A', 'C', 'B']
        expect(dijkstra(graph)).toEqual(shortestPath);
    });

    it('dijkstra finds shortest path in complex graph', () => {
        const graph = {
            'nodes': [ 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
            'edges': [
                {
                    'source': 'H',
                    'target': 'A',
                    'weight': 3,
                },
                {
                    'source': 'H',
                    'target': 'B',
                    'weight': 2,
                },
                {
                    'source': 'H',
                    'target': 'C',
                    'weight': 5,
                },
                {
                    'source': 'A',
                    'target': 'D',
                    'weight': 3,
                },
                {
                    'source': 'B',
                    'target': 'D',
                    'weight': 1,
                },
                {
                    'source': 'B',
                    'target': 'E',
                    'weight': 6,
                },
                {
                    'source': 'C',
                    'target': 'E',
                    'weight': 2,
                },
                {
                    'source': 'D',
                    'target': 'F',
                    'weight': 4,
                },
                {
                    'source': 'E',
                    'target': 'F',
                    'weight': 1,
                },
                {
                    'source': 'E',
                    'target': 'G',
                    'weight': 4,
                },
                {
                    'source': 'F',
                    'target': 'G',
                    'weight': 2,
                },
            ],
            'startNode': 'H',
            'endNode': 'G',
        }
        const shortestPath = ['H', 'B', 'D', 'F', 'G']
        expect(dijkstra(graph)).toEqual(shortestPath);
    });
});
