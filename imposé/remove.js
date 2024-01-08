function disemvowel(str) {
    const voyelle =['a', 'e', 'i' , 'o' , 'u'];
    let result = str.split('').map((char,index) => {
        voyelle.includes(char) ? str.split('').splice(index, 1) : null; 
    });
    return result;
}
console.log(disemvowel("This website is for losers LOL!"));