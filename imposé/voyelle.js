function getCount(str) {
    let num = 0;
    
    const voyelle =['a', 'e', 'i' , 'o' , 'u'];
    for (let i = 0; i < str.length; i++) {
        if (voyelle.includes(str[i]) ){
            num++;
        }
        
    }
    return num;
}
console.log(getCount("o a kak ushakov lil vo kashu kakao"));