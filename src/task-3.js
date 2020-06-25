
export default function sumDigits(n) {
  return String(n).split('').reduce((acсumulator, currentValue) => {
    return +acсumulator + +currentValue;
  })
}
