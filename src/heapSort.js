import { createHeap } from './createHeap';

export const heapSort = (inputs) => {
    let sorted = [];
    let heap = createHeap(inputs);
    while (heap.length) {
      sorted.push(heap.pop());
    }
    return sorted;
};
