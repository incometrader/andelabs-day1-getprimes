function isPrime(num){
  if(num < 2) return false;
  for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if (num % i === 0) return false;
  }
  return true;
}

function getPrimes(n){
  if (n < 0){
    return "Negative integers cannot be prime";
  } else if (n === 0){
    return "You cannot generate prime numbers from 0 to 0";
  } else if (typeof n !== "number"){
    return "Invalid input";
  } else {
  var arr = [];
  var j = 0;
  while (j <= n){
    if (isPrime(j)) arr.push(j);
    j++;
  }
  
  return arr;
  }
}

module.exports = getPrimes;