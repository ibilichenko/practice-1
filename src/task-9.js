
export default function merge(data) {
  const result = {};
  for (const obj of data) {
    for (const key in obj) {
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(obj[key]);
    }
  }
  return result;
}
