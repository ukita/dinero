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

export function getApplicationHost(headers) {
  const proto = headers["x-forwarded-proto"] || "http";
  const host =
    headers["host"] || headers["x-now-deployment-url"] || "dinero.now.sh";

  return `${proto}://${host}`;
}
