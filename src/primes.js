function isPrime(num){
  if(num < 2) return false;
  for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if (num % i === 0) return false;
  }
  return true;
}

function getPrimes(n){
  var arr = [];
  var j = 0;
  while (j <= n){
    if (isPrime(j)) arr.push(j);
    j++;
  }
  return arr;
}

module.exports = getPrimes;