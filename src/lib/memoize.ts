/**
 * Memoizes a 1-arity function
 *
 * @param {Function} func Function to memoize
 * @returns {Function} Memoized version of func.
 */
const memoize = (func: Function): Function => {
  const cache = {};
  return (key: string) => {
    if (key in cache == false) {
      cache[key] = func(key);
    }
    return cache[key];
  };
};

export default memoize;
