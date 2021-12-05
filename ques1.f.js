//anonymoys function
var arr=function(ar1, ar2, n)
{
   
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
console.log(arr(ar1, ar2, n2));
else
    console.log("not in same size");

                                   //IIFE

    (function()
    {
    var ar1 = [1, 12, 15, 26, 38];
    var ar2 = [2, 13, 17, 30, 45];
    var n1 = ar1.length;
    var n2 = ar2.length;
{
    var i = 0; 
    var j = 0; 
    var z;
    var m1 = -1, m2 = -1;
    for (z = 0; z<= n1; z++)
    {
        if (i == n1)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n1)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
    console.log((m1 + m2)/2);
}
    })();


