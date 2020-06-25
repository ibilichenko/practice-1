
export default function getStats(data) {
  if (data.length!=0){
    return{
        max: Math.max(...data),
        min: Math.min(...data),
        avg: data.reduce((acumulator, currentValue)=> acumulator + currentValue)/data.length
    }
}
else{
    return {
        min: null,
        max: null,
        avg: null
      };
}
}
