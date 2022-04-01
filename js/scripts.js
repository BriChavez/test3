$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();
    const output = $("#input").val();
    $("#output").text(translator(output));
  });
})

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