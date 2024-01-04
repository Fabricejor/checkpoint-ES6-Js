function validBraces(brace) {
    const pile = [];

    // Parcourir chaque caractère de la chaîne
    for (let char of brace) {
        if (char === '(' || char === '[' || char === '{') {
            // Ouverture de parenthèse, crochet ou accolade
            pile.push(char);
        } else {
            // Fermeture de parenthèse, crochet ou accolade
            const dernierOuvert = pile.pop();

            // Vérifier la correspondance
            if (
                (char === ')' && dernierOuvert !== '(') ||
                (char === ']' && dernierOuvert !== '[') ||
                (char === '}' && dernierOuvert !== '{')
            ) {
                return false; // La chaîne est invalide
            }
        }
    }

    // La chaîne est valide si la pile est vide
    return pile.length === 0;
}
  
  console.log(validBraces("(){}[]"));   // true
  console.log(validBraces("([{}])"));   // true
  console.log(validBraces("(}"));       // false
  console.log(validBraces("[(])"));     // false
  console.log(validBraces("[({})](]")); // false
  