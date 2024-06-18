function  simpleCalculator (num1,num2,operator){
    switch(operator){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        default:
            return "invalid oprator"
    }
}
console.log(simpleCalculator(1,2,'+'));
console.log(simpleCalculator(9,2,'-'));
console.log(simpleCalculator(5,6,'*'));
console.log(simpleCalculator(9,3,'/'));
console.log(simpleCalculator(19,1,'&'));