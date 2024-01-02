function isTriangle(a,b,c)
{
   if (a+b>c && a+c>b && b+c >a) {//regle mathematique
    return true;
   }else{
    return false;
   }
}
let a=7, b=2, c=2 ;
console.log(isTriangle(a,b,c));