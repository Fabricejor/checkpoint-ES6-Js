function createPhoneNumber(numbers){
    let chaine=[("(")];
    for (let index = 0; index <=2; index++) {
        chaine.push(numbers[index]);
        
    }
    chaine.push(') ');
    for (let j = 3; j <=5 ; j++) {
        chaine.push(numbers[j]);
    }
    chaine.push('-');
    for (let k = 6; k <=10 ; k++) {
        chaine.push(numbers[k]);
    }
    // chaine.push((""));
    return chaine.join('');;//convertis tous en chaine de caractères
}

let phone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(createPhoneNumber(phone));
// "(123) 456-7890"