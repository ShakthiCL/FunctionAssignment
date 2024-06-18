let getDayName=function(days){
    switch(days){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thrusday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "invalid"
    }
}
console.log(getDayName(1));
console.log(getDayName(2));
console.log(getDayName(3));
console.log(getDayName(4));
console.log(getDayName(5));
console.log(getDayName(6));
console.log(getDayName(7));
console.log(getDayName(9));