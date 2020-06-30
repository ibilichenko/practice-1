
export default function getNthItem(a, n) {
  if (n === 0) return 0;
  let previous = a;
  let current = a;
  for (let i = 1; i < n; i++) {
    current = a - 2 * previous;
    previous = current;
  }
  return current;
}
