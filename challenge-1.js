// This line imports the readline module, which allows you to read input from the user.
const readline = require('readline');

//This creates an interface for reading input and output.

const rl = readline.createInterface({
  input: process.stdin,//This enables the program to read input from the command line.
  output: process.stdout//This enables the program to write an output to the command line.
});

rl.question('Enter your marks: ', (marks) => {
//The line above prompts the user to input their marks with the statement `Enter your marks:`.

//The top level if else statement below first ensures the input is between 0 and 100 then the nested if-else statement assigns a grade to the user based on the marks entered
  if (marks >= 0 && marks <= 100){
    if (marks>79){
        grade= "A" 
    } else if (marks >= 60 && marks <= 79) {
         grade = "B"
    } else if (marks > 49 && marks <=59 ) {
         grade = "C"
    } else if (marks > 40 && marks <=49){
         grade = "D"
    } else {
         grade ="E"
    }
    console.log(`Your grade is ${grade}!`)//This output the user's grade to be displayed on the console as a part of the string.
  } else {
    console.log("Marks should be between 0 and 100")// If the input is not within the allowed rand on 0 to 100, the user recieves a message saying "Marks should be between 0 and 100"
  }
  
  rl.close();
});

