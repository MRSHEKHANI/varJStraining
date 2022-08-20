// using in between

function inBetween(a,b){
    return function(x){
        return x>=a && x<=b;
    }
}

let arr =[1,2,3,4,5,6,7,8];
console.log(arr.filter(inBetween(2,5)));

// using Array

function anArray(arre){
    return function(y){
        return arre.includes(y);
    }
}
let arre = [1,2,3,4,5,6,7,8];

console.log(arre.filter(anArray([1,5,12])));