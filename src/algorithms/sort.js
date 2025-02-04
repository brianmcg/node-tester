/**
 * Sort an array using the insertionSort algorithm.
 * @param  {Array}  array The array to sort.
 * @return {Array}        The sorted array.
 */
export const insertionSort = (array = []) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }

  return array;
};

/**
 * Sort an array using the selectionSort algorithm.
 * @param  {Array}  array The array to sort.
 * @return {Array}        The sorted array.
 */
export const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let lowest = array[i];
    let indexOfLowest = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < lowest) {
        lowest = array[j];
        indexOfLowest = j;
      }
    }

    const temp = array[i];

    array[i] = array[indexOfLowest];
    array[indexOfLowest] = temp;
  }

  return array;
};

/**
 * Sort an array using the quickSort algorithm.
 * @param  {Array}  array The array to sort.
 * @return {Array}        The sorted array.
 */
export const quickSort = (array = []) => {
  if (array.length < 2) return array;

  const [pivot, ...remainder] = array;
  const [left, right] = [[], []];

  remainder.forEach(num => (num < pivot ? left.push(num) : right.push(num)));

  return [...quickSort(left), pivot, ...quickSort(right)];
};

/**
 * Merge two sorted arrays.
 * @param  {Array}  left  A sorted array.
 * @param  {Array}  right A sorted array.
 * @return {Array}        The sorted array.
 */
const mergeSorted = (left = [], right = []) => {
  const result = [];

  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

/**
 * Sort an array using the mergeSort algorithm.
 * @param  {Array}  array The array to sort.
 * @return {Array}        The sorted array.
 */
export const mergeSort = (array = []) => {
  if (array.length < 2) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return mergeSorted(mergeSort(left), mergeSort(right));
};

const heapify = (array = [], heapSize = 0, rootIndex = 0) => {
  // Initialize largest as root
  let largestIndex = rootIndex;

  const leftIndex = 2 * rootIndex + 1;
  const rightIndex = 2 * rootIndex + 2;

  // If left child is larger than root
  if (leftIndex < heapSize && array[leftIndex] > array[largestIndex]) {
    largestIndex = leftIndex;
  }

  // If right child is larger than largest so far
  if (rightIndex < heapSize && array[rightIndex] > array[largestIndex]) {
    largestIndex = rightIndex;
  }

  // If largest is not root
  if (largestIndex !== rootIndex) {
    // Swap
    const temp = array[rootIndex];
    array[rootIndex] = array[largestIndex];
    array[largestIndex] = temp;

    // Recursively heapify the affected sub-tree
    heapify(array, heapSize, largestIndex);
  }
};

/**
 * Sort an array using the heapSort algorithm.
 * @param  {Array}  array The array to sort.
 * @return {Array}        The sorted array.
 */
export const heapSort = (array = []) => {
  const heapSize = array.length;
  const middle = Math.floor(heapSize / 2) - 1;

  // Build heap (rearrange array)
  for (let i = middle; i >= 0; i--) {
    heapify(array, heapSize, i);
  }

  // One by one extract an element from heap
  for (let i = heapSize - 1; i > 0; i--) {
    // Move current root to end
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    // Call max heapify on the reduced heap
    heapify(array, i, 0);
  }

  return array;
};

/**
 * Sort an array using the bubbleSort algorithm.
 * @param  {Array}  array The array to sort.
 * @return {Array}        The sorted array.
 */
export const bubbleSort = (array = []) => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};
