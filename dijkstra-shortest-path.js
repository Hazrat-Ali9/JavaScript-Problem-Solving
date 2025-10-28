/**
 * Dijkstra's algorithm for finding shortest paths from a source node to all other nodes
 * in a weighted graph/tree
 * 
 * @param {Object} graph - Adjacency list representation of graph where keys are nodes
 *                         and values are arrays of {node, weight} objects
 * @param {string|number} start - Starting node
 * @return {Object} Object containing distances and previous nodes for shortest paths
 */
const dijkstra = (graph, start) => {
  const distances = {};
  const previous = {};
  const visited = new Set();
  const pq = new MinPriorityQueue();

  // Initialize distances
  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;

  // Add start node to priority queue
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { element: currentNode } = pq.dequeue();

    // Skip if already visited
    if (visited.has(currentNode)) {
      continue;
    }

    visited.add(currentNode);

    // Check all neighbors
    const neighbors = graph[currentNode] || [];
    for (let neighbor of neighbors) {
      const { node: neighborNode, weight } = neighbor;
      const distance = distances[currentNode] + weight;

      // If found shorter path, update distance and previous node
      if (distance < distances[neighborNode]) {
        distances[neighborNode] = distance;
        previous[neighborNode] = currentNode;
        pq.enqueue(neighborNode, distance);
      }
    }
  }

  return { distances, previous };
};

/**
 * MinPriorityQueue implementation for Dijkstra's algorithm
 */
class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(element, priority) {
    this.heap.push({ element, priority });
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }

    return min;
  }

  bubbleUp(index) {
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element.priority >= parent.priority) {
        break;
      }

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = element;
  }

  bubbleDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;

      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < this.heap[swap].priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.heap[index] = this.heap[swap];
      index = swap;
    }

    this.heap[index] = element;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

/**
 * Get the shortest path from start to end node
 * @param {Object} previous - Previous nodes object from dijkstra result
 * @param {string|number} start - Starting node
 * @param {string|number} end - Ending node
 * @return {Array} Array of nodes representing the shortest path
 */
const getShortestPath = (previous, start, end) => {
  const path = [];
  let current = end;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  // If path doesn't start with start node, there's no path
  if (path[0] !== start) {
    return [];
  }

  return path;
};

export { dijkstra, MinPriorityQueue, getShortestPath };
