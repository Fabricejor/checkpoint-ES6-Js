function persistence(num) {
    // Initialiser le compteur 
    let compteur = 0;

    // Fonction pour calculer la multiplication des chiffres d'un nombre
    const multiplicationChiffres = (nombre) => {
        return nombre.toString().split('').reduce((acc, chiffre) => acc * parseInt(chiffre), 1);
    };

    // Continuer jusqu'à ce que le nombre ait une seule chiffre
    while (num >= 10) {
        num = multiplicationChiffres(num);
        compteur++;
    }

    return compteur;
}


console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));   