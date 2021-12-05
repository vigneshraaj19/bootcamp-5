//anonymoys function
var arr=function()
{
    let ar = [1,2,3,4,5,6,7,8,9,10,11,12]
    let odds = ar.filter(item =>
         item%2)
        {
            return odds;
        }
     
}
console.log(arr());

//IIFE
(function()
{
    let ar = [1,2,3,4,5,6,7,8,9,10,11,12]
    let odds = ar.filter(item =>
         item%2)
        {
            console.log(odds);
        }
}
)();
