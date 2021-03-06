const memoize = (func: { (url: string): Promise<any> }) => {
  const cache = {};
  return (key: string): Promise<any> => {
    if (key in cache == false) {
      cache[key] = func(key);
    }
    return cache[key];
  };
};

export default memoize;
