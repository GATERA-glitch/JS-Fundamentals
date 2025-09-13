// 3-value_argument.js

const args = process.argv.slice(2); // Get arguments passed to the script

// Check if the first argument exists without using length
if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
