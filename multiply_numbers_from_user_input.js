// Define the function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

// Create a prompt to take input from the user
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to enter the first number
readline.question('Enter the first number: ', (num1) => {
  // Ask the user to enter the second number
  readline.question('Enter the second number: ', (num2) => {
    // Convert the input strings to numbers
    const x = parseFloat(num1);
    const y = parseFloat(num2);

    // Call the multiply function with user input
    const result = multiply(x, y);
    console.log(`The result of multiplying ${x} and ${y} is:`, result);

    // Close the readline interface
    readline.close();
  });
});
