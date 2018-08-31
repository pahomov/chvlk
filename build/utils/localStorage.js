import storage from "local-storage-fallback";
const KEY_PREFIX = "chvlk_";
export const setItem = (key, data) => {
  const fullKey = `${KEY_PREFIX}${key}`;
  storage.setItem(fullKey, JSON.stringify(data));
  return { key, data };
};
export const getItem = key => {
  const fullKey = `${KEY_PREFIX}${key}`;
  const val = storage.getItem(fullKey);
  if (typeof val === "string") {
    return JSON.parse(val);
  }
  return val;
};
export const removeItem = key => {
  const fullKey = `${KEY_PREFIX}${key}`;
  storage.removeItem(fullKey);
  return key;
};
export const clear = () => {
  storage.clear();
};
