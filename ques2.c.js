//Arrow function
var arr=()=>
{
    var sum=0;
    let ar = [1,2,3,4,5,6,7,8,9,10,11,12]
    for(var i=0;i<ar.length;i++)
        {
            sum=sum+ar[i];
        }
        return sum;
    }
    console.log(arr());
    