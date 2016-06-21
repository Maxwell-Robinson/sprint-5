//looping A Triangle.

for (number = "#"; number < "########"; number = number + "#")
console.log(number);

//Fizzbuzz

for ( number = 1; number <100; number = number +1)
  if (number % 5 == 0 && number % 3 == 0){
    console.log("fizzbuzz");
  }
  else if(number % 5 == 0){
    console.log("buzz");
  }
  else if (number % 3 == 0){
    console.log("fizz");
  }
  else{
    console.log(number);
  }
   
  console.log (number); 
//proud of myself for doing it by myself!

//chessboard
var size = 8

var board = ""
for (var y = 0; y < size; y++) {   
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

//