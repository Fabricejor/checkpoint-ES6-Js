let array1 = [1,2,3] ;
let array2 = [4,5,6] ;
// En utilisant ES5
array1 = array1.concat(array2) ;
console.log(array1)// [1,2,3,4,5,6,4,5,6]
// Utilisation de ES6
let array3 = [1,2,3] ;
let array4 = [4,5,6] ;
array3 = [...array3, ...array4] ;
console.log(array3)// [1,2,3,4,5,6,4,5,6]