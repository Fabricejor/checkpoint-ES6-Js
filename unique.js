var uniqueInOrder = function (iterable) {
    // Initialiser la liste des éléments uniques
    const result = [];

    // Parcourir la séquence et ajouter les éléments uniques
    for (let i = 0; i < iterable.length; i++) {
        // Si la liste est vide ou si l'élément actuel est différent du dernier ajouté
        //soit on ajoute un new element soit on compare un element deja ajouté
        if (result.length === 0 || iterable[i] !== result[result.length - 1]) {
            result.push(iterable[i]); // Ajouter l'élément à la liste
        }
    }

    return result;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); 
console.log(uniqueInOrder("ABBCcAD")); 
console.log(uniqueInOrder([1, 2, 2, 3, 3])); 
