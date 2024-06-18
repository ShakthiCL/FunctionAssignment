let largestNumber=function(a,b,c){
    if(a>b && a>c){
        return "a is greater than b & c";
    }else if(b>a && b>c){
        return "b is greater than a & c";

    }else{
        return "c is greater than a & b"
    }
}
console.log(largestNumber(1,2,3));
console.log(largestNumber(1,7,3));
console.log(largestNumber(9,2,3));