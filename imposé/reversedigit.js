function digitize(n) {
  //code here
    return n.toString().split('').reverse().map(elt => parseInt(elt));

}

console.log(digitize(35231));
console.log(digitize(0));
