//Arrow function
var arr=()=>
{
const arr = ['vignesh', 1344, 12321, 'malayalam'];
const res1= a => {
   const str = String(a);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const res = arr => {
   return arr.filter(a => res1(a));
  return res(arr)
};
return res(arr)
}
console.log(arr());