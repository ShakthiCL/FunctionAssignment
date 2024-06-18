function primeNum(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0)
            {
                return false;
            }
    }
    return num > 1;
}
console.log(primeNum(2));
console.log(primeNum(4));
console.log(primeNum(9));