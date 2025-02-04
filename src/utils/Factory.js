export default class Factory {
  static getRandomInt(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
  }

  static getSortedArray(length = 0) {
    return Array.from(Array(length).keys());
  }

  static getUnsortedArray(length = 0) {
    return Factory.getSortedArray(length).map(() =>
      Factory.getRandomInt(1, length),
    );
  }
}
