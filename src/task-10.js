export default function convertToRoman(n) {
  let resultStr = '';
  const romanSymbols = [
    { count: 0, symbol: 'M', value: 1000 },
    { count: 0, symbol: 'D', value: 500 },
    { count: 0, symbol: 'C', value: 100 },
    { count: 0, symbol: 'L', value: 50 },
    { count: 0, symbol: 'X', value: 10 },
    { count: 0, symbol: 'V', value: 5 },
    { count: 0, symbol: 'I', value: 1 }
  ]
  
  for (const currentSymbol of romanSymbols) {
    currentSymbol.count = n >= currentSymbol.value ? Math.floor(n / currentSymbol.value) : 0;
    n = n % currentSymbol.value;
  }

  for (let i = 0; i < romanSymbols.length - 1; i++) {
    if (romanSymbols[i].count * romanSymbols[i].value + romanSymbols[i + 1].count * romanSymbols[i + 1].value === 9 ||
       romanSymbols[i].count * romanSymbols[i].value + romanSymbols[i + 1].count * romanSymbols[i + 1].value === 90 ||
       romanSymbols[i].count * romanSymbols[i].value + romanSymbols[i + 1].count * romanSymbols[i + 1].value === 900) {
      romanSymbols[i + 1].count += (romanSymbols[i].count * romanSymbols[i].value / romanSymbols[i + 1].value);
      romanSymbols[i].count = 0;
      i++;
    }
  }

  for (const symb1 of romanSymbols) {
    let flag = false;
    for (const symb2 of romanSymbols) {
      for (const symb3 of romanSymbols) {
        if (symb1.count !== 0 && symb1.count * symb1.value + symb2.value === symb3.value && symb1.value * symb1.count !== symb2.value) {
          console.log(symb2.symbol, symb3.symbol);
          resultStr += symb2.symbol
          resultStr += symb3.symbol
          flag = true;
        }
      }
    }
    if (flag === false) {
      resultStr += symb1.symbol.repeat(symb1.count)
    }
  }
  return resultStr
}
