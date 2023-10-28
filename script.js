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

  // Ask user to choose character types 
  var useSpecial = confirm("Shall we include special characters? ");
  var useLowerCase = confirm("Shall we include lowercase characters?");
  var useUpperCase = confirm("Shall we use uppercase characters?");
  var useNumericCase = confirm("Shall we use numeric characters?");

  // if they don't choose any they should get an error
  if (!useSpecial && !useNumericCase && !useLowerCase && !useUpperCase) {
    alert("Please select at least one character type.");
  }

  // We need to store users choices somewhere

  var passwordOptions = {
    length: length,
    useSpecial: useSpecial,
    useUpperCase: useUpperCase,
    useNumericCase: useNumericCase,
    useLowerCase: useLowerCase
  };

  return passwordOptions;
}

//getPasswordOptions() 
// helps me to see if the function above works 

// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
}

// console.log(getRandom(upperCasedCharacters))


// Function to generate password with user input

function generatePassword() {

  var options = getPasswordOptions();

  // User entered invalid options, but is it possible if almost every character is covered?
  if (!options) {
    return;
  }

  var availableCharacters = [];
  var selectedCharacters = [];

  // uses special characters to create the password with
  if (options.useSpecial) {
    availableCharacters = availableCharacters.concat(specialCharacters);
    selectedCharacters.push(getRandom(specialCharacters));
  }
  //adding numeric case, should work 
  if (options.useNumericCase) {
    availableCharacters = availableCharacters.concat(numericCharacters);
    selectedCharacters.push(getRandom(numericCharacters));
  }
  //adding the rest of available options
  if (options.useLowerCase) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
    selectedCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (options.useUpperCase) {
    availableCharacters = availableCharacters.concat(upperCasedCharacters);
    selectedCharacters.push(getRandom(upperCasedCharacters));
  }

  // Generate the rest of the password characters
  for (var i = selectedCharacters.length; i < options.length; i++) {
    selectedCharacters.push(getRandom(availableCharacters));
  }

  return selectedCharacters.join(''); // before using this method password was returned with commas. Took me a while to find this

}

// Did not touch this part below...
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate buttons
generateBtn.addEventListener('click', writePassword);