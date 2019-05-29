export function getProp(object, path, defaultVal) {
  if (!object) return defaultVal;

  const _path = Array.isArray(path)
    ? path
    : path.split(".").filter(i => i.length);

  if (!_path.length) {
    return object === undefined ? defaultVal : object;
  }

  return getProp(object[_path.shift()], _path, defaultVal);
}
