function calculateArea(shape,dimension){
    let area;
    switch(shape){
        case "circle":
            return area=Math.PI*dimension*dimension;
        case "square":
            return area=dimension*dimension;    
        default:
            return "unknown shape"
    }
}
console.log(calculateArea("circle",3));
console.log(calculateArea("square",5));
console.log(calculateArea("rectangle",7));
