


  
 
 
 


// function boop(number) {
//   for (let index = 0; index <= number; index++); {
//     array.push(index);
//   }
//   return array;
// }

//  for (let index = 0; index <= input; index++)



// function translator(input) {
//   for (let index = 0; index <= input; index++); {
  
//     if(index.toString().includes(3)) {
//       numArray[index] = "Won't you be my neighbor?"; 
//       } else if (index.toString().includes(2)) {
//         numArray[index] = "Boop!";
//       }
//       else if (index.toString().includes(1)) {
//         numArray[indext] = "Beep";
//         }
//       else {
//         numArray[index] = indext.toString();
//       } 
//       return numArray;
//   }
// }


function translator(number) {
  const numArray = [];
  for (let index = 0; index <= number; index ++) {
    if (index.toString().includes(3)) {
      numArray[index] = " Won't you be my neighbor?";
    }
    else if (index.toString().includes(2)) {
      numArray[index] = " Boop!";
    }
    else if (index.toString().includes(1)) {
      numArray[index] = " Beep!";
    }
    else {
      numArray[index] = index.toString();
    } 
  }
  return numArray;
} 

$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();
    const output = $("#input").val();
    $("#output").text(translator(output));
  });
})