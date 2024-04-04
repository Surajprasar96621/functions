function printPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        console.log(num);
      }
    }
  }
  printPrimes(100); 
  