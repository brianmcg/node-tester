/**
 * Binary Search algorithm.
 * @param  {Array}  array The array to search
 * @param  {Number} value The value too search for.
 * @return {Number}       The index of the found value or -1.
 */
export const binarySearch = (array = [], value = 0) => {
  let [first, last] = [0, array.length - 1];

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);

    if (array[middle] === value) return middle;

    if (value < array[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return -1;
};

export const dijkstra = (graph, start) => {
  // Create an object to store the shortest distance from the start node to every other node
  const distances = {};

  // A set to keep track of all visited nodes
  const visited = new Set();

  // Get all the nodes of the graph
  const nodes = Object.keys(graph);

  // Initially, set the shortest distance to every node as Infinity
  for (const node of nodes) {
    distances[node] = Infinity;
  }

  // The distance from the start node to itself is 0
  distances[start] = 0;

  // Loop until all nodes are visited
  while (nodes.length) {
    // Sort nodes by distance and pick the closest unvisited node
    nodes.sort((a, b) => distances[a] - distances[b]);
    const closestNode = nodes.shift();

    // If the shortest distance to the closest node is still Infinity, then remaining nodes are unreachable and we can break
    if (distances[closestNode] === Infinity) break;

    // Mark the chosen node as visited
    visited.add(closestNode);

    // For each neighboring node of the current node
    for (const neighbor in graph[closestNode]) {
      // If the neighbor hasn't been visited yet
      if (!visited.has(neighbor)) {
        // Calculate tentative distance to the neighboring node
        const newDistance =
          distances[closestNode] + graph[closestNode][neighbor];

        // If the newly calculated distance is shorter than the previously known distance to this neighbor
        if (newDistance < distances[neighbor]) {
          // Update the shortest distance to this neighbor
          distances[neighbor] = newDistance;
        }
      }
    }
  }

  // Return the shortest distance from the start node to all nodes
  return distances;
};
