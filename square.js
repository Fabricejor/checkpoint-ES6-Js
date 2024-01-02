//? 9e carre de nombre
function squareDigits(num){
    let tab=[];
            //  chaine    séparer   applique a tous el tableau la reconversion en int
    tab =(num.toString().split('').map(chiffre =>parseInt(chiffre)));
    tab = tab.map(carre => carre**2);
    return parseInt(tab.join(''));
}

let num =3212;

console.log(squareDigits(num))