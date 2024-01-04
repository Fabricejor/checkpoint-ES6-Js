function isValidWalk(walk) {
    let position=0;// POSITION  should be equal to 0 to return true
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                position++;
                break;
            case 's':
                position--;
                break;
            case 'e':
                position=position+2;
                break;
            case 'w':
                position=position-2;
                break;    
            default:
                break;
        }
    }
    if (position==0 && walk.length==10) {
        return true;
    }else{
        return false;
    }
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));