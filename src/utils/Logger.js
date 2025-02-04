import pc from 'picocolors';

const ERROR = pc.bold(`${pc.red('ERROR')}:`);
const SUCCESS = pc.bold(`${pc.green('SUCCESS')}:`);
const WARNING = pc.bold(`${pc.yellow('WARNING')}:`);
const INFO = pc.bold(`${pc.cyan('INFO')}:`);

export default class Logger {
  static error = (...args) => console.log(ERROR, ...args);
  static warning = (...args) => console.log(WARNING, ...args);
  static info = (...args) => console.log(INFO, ...args);
  static success = (...args) => console.log(SUCCESS, ...args);
}
