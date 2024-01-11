function SeriesSum(n)
{
    // let sum =0;
    // for (let i = 1; i <= n; i++) {
    //     sum +=  (1 / (1 + (i-1)*3));
    // }
    // return sum.toFixed(2);
    let table = [];
    for (let i = 1; i <= n; i++) {
        table.push(i);
    }
    let i=0;
    table = table.reduce( (accumulator , currentValue) =>
        accumulator + 1/ (1 +(currentValue-1)*3), i);
    return table.toFixed(2);
}

console.log(SeriesSum(1)); // 1
console.log(SeriesSum(2));// 1+ S1/4
console.log(SeriesSum(3));
console.log(SeriesSum(4));