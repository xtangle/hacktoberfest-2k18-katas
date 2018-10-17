
// Array backed heap with following properties: (illustrated with 1-based indexing)
// - children of element at index i will be stored at indices 2*i and 2*i+1
//   i.e. parent of element at j will be stored at index floor(j/2)
// - the parent element is smaller than or equal to each child element
// Note: implementation uses 0-based indexing, so
//   children of element at index i will be stored at indices 2*i+1 and 2*i+2
//   parent of element at j will be stored at index floor((j-1)/2)

function buildMinHeap(arr, count) {
  let start = Math.floor(count/2) - 1 // parent of last element
  while (start >= 0) {
    percolate(arr, start, count);
    start = start - 1;
  }
}

function percolate(arr, start, end) {
  let root = start;
  while (2 * root + 1 < end) {
    let child = 2 * root + 1;
    let iMin = root;

    if (arr[child] < arr[iMin]) {
      iMin = child;
    }
    if (child + 1 < end && arr[child + 1] < arr[iMin]) {
      iMin = child + 1;
    }
    if (iMin === root) {
      return;
    }
    swap(arr, root, iMin);
    root = iMin;
  }
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function createHeap(elements) {
  let heap = elements.slice(0);
  buildMinHeap(heap, heap.length);

  heap.pop = () => {
    if (heap.length) {
      const value = heap[0];
      heap[0] = heap[heap.length - 1];
      heap.length = heap.length - 1;
      percolate(heap, 0, heap.length);
      return value;
    }
    return null;
  };
  return heap;
}

export { createHeap };
