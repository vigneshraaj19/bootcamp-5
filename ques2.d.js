//Arrow function
var arr=()=>
{
        let ar = [1,2,3,4,5,6,7,8,9,10,11,12];
           
        ar.map((item) => {
          for (let i = 0; i < item; i++) {
              if(item % i === 0) {
                  let index = ar.indexOf(item);
                  return ar.splice(index, 1);       
              }
          }   
        });
      
       return ar;
      
      }

console.log(arr());