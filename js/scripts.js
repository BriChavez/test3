


  
 
 let numArray = [];
 let input;

 function translator(input) {
  for (let index = 0; index <= input; index++) {
    if(index.toString().includes(3)) {
      numArray[index] = "Won't you be my neighbor?";
      console.log(numArray);
    } else if (index.toString().includes(2)) {
      numArray[index] = "Boop!";
    }
    else if (index.toString().includes(1)) {
      numArray[index] = "Beep";
      }
    else {
    numArray[index] = index.toString();
    } 
    results.show();
    console.log(numArray);
  }
}

