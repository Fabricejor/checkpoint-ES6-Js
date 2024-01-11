function countSheeps(sheep) {
    // TODO
    let count=0;
    sheep.map(value => value==true  ? count++ : null );
    return count;
}
console.log(countSheeps([undefined,null,false,true]));//1
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));
