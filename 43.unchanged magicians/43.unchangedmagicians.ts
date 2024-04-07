// Unchanged Magicians: Start with your work from Exercise 40.  . Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name

// Make a array of magician’s names
let magicians: string[] = ["herry potter", "kaala jaduger", "samari jaduger"]

//creating a function called show_magicians(), which prints the name of each magicians  names from a array
function show_magicians(magicianNames:string[]){
    magicianNames.map(name =>{console.log(name);
    })
}


//creating a function that modifing array with adjective "the great"
function make_great(magicianNames:string[]):string[] {
    let new_magicians_names :string[] = [];

       magicianNames.forEach(name =>{new_magicians_names.push(`${name = "the great "+ name}`);
       })

       return new_magicians_names
   }
   








// let store a function to a variable
let new_names = make_great(magicians)

 //show orignal array
 show_magicians(magicians);
  
 //show modified array
 show_magicians(new_names);