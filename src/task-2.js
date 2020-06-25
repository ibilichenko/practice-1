
export default function getNthItem(a, n) {
  if(n==0) return 0;
  let series = [];
  series.push(a);
  for(let i = 1; i < n; i++){
    series[i] = a - 2*series[i-1];
  }
  return series[n-1];
}
