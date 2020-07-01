
export default function sumDigits(n) {
  return String(n).split('').reduce((accumulator, currentValue) => {
    return +accumulator + +currentValue;
  })
}
