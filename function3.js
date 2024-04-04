function printNonPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
      if (!isPrime(num)) { 
        console.log(num);
      }
    }
  }
  printNonPrimes(100); 
  