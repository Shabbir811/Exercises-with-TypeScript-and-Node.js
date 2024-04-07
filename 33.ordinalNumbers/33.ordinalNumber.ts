

// Store the numbers 1 through 9 in a array.
let ordinal: number[]  = []

//create array through loop  1 to 9 
 for (let num=1; num<= 9; num++){

   ordinal.push(num)
 }


 

 ordinal.map(num =>{
   let order = "th"
   if(num == 1){
      order = num+"st"
   }else if(num == 2){
       order = num+"nd"
   }else if(num == 3){
      order = num+"rd"
   }else{
      order = num+"th"
   } 
   console.log(order);  
 })

 

