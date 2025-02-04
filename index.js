import { Logger, Factory } from './src/utils/index.js';
import { binarySearch } from './src/algorithms/search.js';

const ARRAY_LENGTH = 1000000;

const run = (search, array) => {
  Logger.info(search.name);

  const startTime = performance.now();
  const result = search(array, 555);
  const endTime = performance.now();

  Logger.success(result, 555);
  Logger.info(`${endTime - startTime}ms`);
  console.log();
};

try {
  run(binarySearch, Factory.getSortedArray(ARRAY_LENGTH));
} catch (e) {
  Logger.error(e);
}
