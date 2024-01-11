// [0 1 2 3] indice
// [1 1 1 1] binaire
// [8 4 2 1] valeur
const binaryArrayToNumber = arr => {
    // your code
    return parseInt(arr.join(''),2);
};
console.log(binaryArrayToNumber([0,0,0,1]));//1
console.log(binaryArrayToNumber([0,0,1,0]));//2
console.log(binaryArrayToNumber([1,1,1,1]));//15
