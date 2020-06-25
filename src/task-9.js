
export default function merge(data) {
  let result = {};
  for(let obj of data){
    for(let key in obj){
      if(!result[key]){
        result[key] = [];
      }
      result[key].push(obj[key]);
    }
  }
  
  return result;
}
