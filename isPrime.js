function isPrime(n){
  if(n == 0 || n == 1) return false;
  for(var i = 2; i < Math.sqrt(n))
    if(n % i === 0) return false;
   return true;
}