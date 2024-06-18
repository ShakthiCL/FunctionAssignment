let formatCurrency=function(currency,amount){
    return `${currency}${amount}`
}
console.log(formatCurrency('$',100));
console.log(formatCurrency('\u20AC',100));