export const getObjectKeys = (obj) => {
  const keys = Object.keys(obj);
  return keys;
};

export const isNonEmptyArray = (value) =>
  Array.isArray(value) && value.length > 0;
