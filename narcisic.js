//!8eme exo
function narcissistic(value) {
    // Code me to return true or false
    let n=value.toString().split('') ; //chaine de caracteres
    n= n.map(x => parseInt(x));//tableau entier
    let newvalue=n.map(x => x**(n.length));
    return (value ==(newvalue.reduce((sum,element)=> sum + element,0)))? true : false;
    
}  

let value = 10;
console.log(narcissistic(value)) ;
//map filter  join  reduce split reduce 