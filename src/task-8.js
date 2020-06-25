
export default function getTopLetter(str) {
  let strMap = new Map();
  
  for(let letter of str){
      strMap.has(letter) ? strMap.set(letter,(strMap.get(letter)+1)):strMap.set(letter,1);
  }
  
  let maxCountOfRepetitions = 0, mostRepeatedLetter;
  
  strMap.forEach((value, key) => {
      if(value > maxCountOfRepetitions){
        maxCountOfRepetitions = value;
      mostRepeatedLetter = key;
  }})
  return mostRepeatedLetter;
  }
