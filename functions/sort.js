/**
 * Sort a list using the quickSort algorithm.
 * @param  {Array}  list The list to sort.
 * @return {Array}       The sorted list.
 */
export const quickSort = (list = []) => {
  if (list.length <= 1) return list;

  const [pivot, ...remainder] = list;
  const left = remainder.filter(num => num < pivot);
  const right = remainder.filter(num => num >= pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
};
