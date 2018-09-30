class JsTypedPrimes extends BasePrimes {
  initialize() {
    this.primes = new Int32Array(this.length);
    this.enableButton();
  }

  isPrime(number) {
    for (let divisor = 2; divisor < number; divisor++) {
      if (number % divisor == 0) {
        return false;
      }
    }
    return true;
  }

  findPrimes() {
    let testedNumber = 2;
    let primesFound = 0;
    while (primesFound < this.length) {
      if (this.isPrime(testedNumber)) {
        this.primes[primesFound] = testedNumber;
        primesFound++;
      }
      testedNumber++;
    }
  }
}
