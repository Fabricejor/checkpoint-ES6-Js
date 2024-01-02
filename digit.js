function digitalRoot(n) {

    function sumDigit(n) {
        //Convertit le nombre en une chaîne de caractères, puis la divise en un tableau de chiffres
        // Ensuite, utilise reduce pour additionner tous les chiffres convertis en entiers    
        return n.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
     // Tant que le nombre a plus d'un chiffre, continuez à réduire la somme des chiffres
    while (n >= 10) {
        // Appelle la fonction calculerSomme avec le nombre actuel et met à jour la valeur de n
        n = sumDigit(n);
    }
    return n;
}

let n = 233564;
console.log(digitalRoot(n));