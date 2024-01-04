function count(string) {
    // Initialiser un objet pour stocker les occurrences des caractères
    const occurrences = {};

    // Parcourir chaque caractère de la chaîne
    for (let char of string) {
        // Incrémenter le compteur d'occurrences pour le caractère actuel
        occurrences[char] = (occurrences[char] || 0) + 1;
    }


    return occurrences;
}

console.log(count("aba")); 
console.log(count(""));
console.log(count("hello")); 
