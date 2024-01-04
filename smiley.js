//return the total number of smiling faces in the array
function countSmileys(arr) {
    let compt ;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index][0]==':' && ((arr[index][1]=='-' || arr[index][1]=='~') || (arr[index][1]=='D' || arr[index][1]==')'))) {
            compt++;
        }
        
    }
    return arr[1][1];
}

console.log(countSmileys([':D',':~)',';~D',':)']));//4
console.log(countSmileys([':)',':(',':D',':O',':;']));//2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));//1