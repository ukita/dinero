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

export function stringToColour(str) {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}
