import { readFile } from 'fs/promises';

export default class File {
  static readJSON = async (path = '') => {
    const json = await readFile(path);
    return JSON.parse(json);
  };
}
