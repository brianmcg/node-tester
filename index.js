import { Logger, File } from './utils/index.js';
import { quickSort } from './functions/sort.js';

const list = await File.readJSON('./data/list.json');

try {
  const sorted = quickSort(list);
  Logger.success(sorted);
} catch (e) {
  Logger.error(e.message);
}
