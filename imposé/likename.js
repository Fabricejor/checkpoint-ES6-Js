function likes(names) {
    // TODO
    function determineindice(indice) {
        if (indice <1) {
            return ', ';
        }else if (indice < 2){
            return ' and ';
        }else {
            return '';
        };
    }
    switch (names.length) {
        case 0:
            return "no one likes this";
            break;
        case 1:
            return names.join()+" likes this";
            break;
        case 2:
            return names.join(" and ")+" likes this";
            break;
        case 3:
            let resultat = names.map((nom, indice) => {
                // Récupération du séparateur en fonction de l'indice
                let separateur = determineindice(indice);
            
                // Retourne le nom suivi du séparateur
                return `${nom}${separateur}`;
            });
            return `${resultat.join('')} like this`;
            break;
        default:
            return names[0] +" "+ names[1]  + " and " +  (names.length - 2) + " others likes this";
            break;
    }
}
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
