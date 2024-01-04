// *10 EXO
function duplicateEncode(word) {
    //Convertir en minuscules
    word = word.toLowerCase();

    // Utiliser un objet pour suivre les occurrences
    const occurrences = {};
    for (let char of word) {
        occurrences[char] = (occurrences[char] || 0) + 1;
    }

    // Construire la nouvelle chaîne
    let nouvelleChaine = "";
    for (let char of word) {
        if (occurrences[char] === 1) {
            nouvelleChaine += "(";
        } else {
            nouvelleChaine += ")";
        }
    }

    return nouvelleChaine;
}

// Exemples d'utilisation
console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("
