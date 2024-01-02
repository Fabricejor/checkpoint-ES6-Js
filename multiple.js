function solution(number){
    let sum = 0
    for (let index = 0; index < number; index++) {
        if (index % 3 == 0 || index % 5 == 0) {
            sum+=index;
        }
    }
    return sum;
}

let number = 10;
// number 10 expect 23
console.log(solution(number));