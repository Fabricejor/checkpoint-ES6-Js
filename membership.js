function openOrSenior(data){
    let chaine = [];
    for (let index = 0; index < data.length; index++) {
            if (data[index][0] >= 55 && data[index][1] >7) {
                chaine.push("Senior");
            }else{
                chaine.push("Open");
            }
    }
    return chaine;
}

const data= [[45, 12],[55,21],[19, -2],[104, 20]];

console.log(openOrSenior(data));