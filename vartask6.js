function sum(a){
    
    return function(b){
        return a+b;
    }
}

console.log(sum(4)(5));
console.log(sum(6)(7));
console.log(sum(7)(8));