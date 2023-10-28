// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Reorganised layout... making it easier for myself to oversee

//------------------------------------------------------------------------------

// Function to prompt user for password options
function getPasswordOptions() {

  var length = parseInt(prompt("Please choose a number between 8 and 128: "));
  // Check if length is a valid number
  // Should I include this in a loop so the whole alert/confirm pop-up works properly?

  if (isNaN(length)) {
    alert("Please enter a valid number.");
    return;
  }

  // Check if length is within the specified range
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }
}
getPasswordOptions()
// Ask user to choose character types 
var useSpecial = confirm("Shall we include special characters? ");
var useLowerCase = confirm("Shall we include lowercase characters?");
var useUpperCase = confirm("Shall we use uppercase characters?");
var useNumericCase = confirm("Shall we use numeric characters?");

// if they don't choose any they should get an error
if (!useSpecial && !useNumericCase && !useLowerCase && !useUpperCase) {
  alert("Please select at least one character type.");
}

// Then should be able to choose character types: lowercase, uppercase, numeric and special
// Should at least select one option out of four





// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);