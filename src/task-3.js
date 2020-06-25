
export default function sumDigits(n) {
  return String(n).split('').reduce((acumulator, currentValue)=>{
    return +acumulator + +currentValue
})
}
