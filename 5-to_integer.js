// 5-to_integer.js

const args = process.argv.slice(2); // Get the arguments
const num = parseInt(args[0]);      // Convert first argument to integer

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
