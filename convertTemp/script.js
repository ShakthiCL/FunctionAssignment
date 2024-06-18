function convertTemp(value,unit){
    if(unit==='celeius'){
        return (value*5/9)+32;
    }else if(unit==='fahrenheit'){
        return (value-32)*9/5;
    }else{
        return "Invalid Unit";
    }
}
console.log(convertTemp(0,'celeius'));
console.log(convertTemp(32,'fahrenheit'));
console.log(convertTemp(100,'celeius'));
console.log(convertTemp(321,'fahrenheit'));
console.log(convertTemp(0,'celeiu'));
