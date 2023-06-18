/*Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.*/

const readline = require('readline');//This line imports the readline module, which allows you to read input from the user.

const rl = readline.createInterface({
  input: process.stdin,//This enables the program to read input from the command line.
  output: process.stdout//This enables the program to write an output to the command line.
});

rl.question('Enter your speed: ', (speed) => {
  //The line above prompts the user to input their marks with the statement `Enter your speed:`.

  //The top level if else statement below checks if the speed is below 70. If so it output "Ok" to the consols
    if (speed<70){
        console.log("Ok")
    } else if(speed>70) {//If the speed is above 70,the demerits are calculated and shown on the console.
      demerits=Math.ceil((speed-70)/5)
      console.log(`Points: ${demerits}`)
        if (demerits > 12){// This nested if-else statement shows the message "License suspended" if the demerits exceed 12
          console.log(`License suspended`)
        }
    }

  

  rl.close();
});