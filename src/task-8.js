
export default function getTopLetter(str) {
  const strMap = new Map();
  
  for (const letter of str) {
    strMap.has(letter) ? strMap.set(letter, (strMap.get(letter) + 1)) : strMap.set(letter, 1);
  }
  
  let maxCountOfRepetitions = 0;
  let mostRepeatedLetter;
  
  strMap.forEach((value, key) => {
    if (value > maxCountOfRepetitions) {
      maxCountOfRepetitions = value;
      mostRepeatedLetter = key;
    }
  })
  return mostRepeatedLetter;
}
