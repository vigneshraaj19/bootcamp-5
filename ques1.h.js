//anonymoys function
var arr=function() {
    var A=[1,2,3,4,5];
    var K= 3;
    if (!A.length) return A;
    let index = -1;
    while (++index < K) {
        A.unshift(A.pop());
    }
    return A;
}
 console.log(arr());

 //IIFE

 (function()
{
    var A=[1,2,3,4,5];
    var K= 3;
    if (!A.length) return A;
    let index = -1;
    while (++index < K) {
        A.unshift(A.pop());
    }
    console.log(A);
})();
