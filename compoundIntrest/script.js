let  calculateCompoundInterest = function(principal,rate,time){
    return principal*(1+rate)**time;
}
console.log(calculateCompoundInterest(1,5,7));