let largestNum=(a,b,c,d)=>{
    if(a>b && a>c && a>d){
        return "a is greater than b ,c & d";
    }else if(b>a && b>c && b>d){
        return "b is greater than a,c & d";

    }else if(c>a && c>b && c>d){
        return "c is greater than a,b & d";
    }
    else{
        return "d is greater than a,b & c"
    }
}
console.log(largestNum(5,9,2,7));
console.log(largestNum(1,3,8,7));
console.log(largestNum(8,1,0,7));
console.log(largestNum(5,3,2,9));