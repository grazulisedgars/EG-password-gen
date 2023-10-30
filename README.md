# EG-password-gen

## Description 

Module 5 Challenge - password generator. A complicated task, heavily relied on the internet research this time. Had to research quite a few functions to make this work. 

Firstly I’m asking a prompt (“Provide a number in between 8 to 128”) but since I’m working with a number I want the computer to use the number. If anyone will enter anything else than number it will show NaN  https://www.w3schools.com/jsref_parseint.asp#:~:text=Definition%20and%20Usage,number%20to%20a%20decimal%20number 

When we check the result of parseInt, if it’s NaN we can identify that the user's input is not a valid number and alert them to enter a valid number.https://www.w3schools.com/jsref/jsref_isnan.asp#:~:text=isNaN()%20method%20returns%20true%20if%20a%20value%20is%20Not,a%20number%20before%20testing%20it.

Later I define length < 8 || length > 128 and if it doesn’t respond to the appropriate values then it gives alert too. 
These functions above will make sure that the prompt receives a value that’s valid.

Afterwards I’m using confirm statements and variables to each character group.  Confirmation would include those numbers otherwise exclude. 
var useSpecial = confirm("Shall we include special characters? "); same goes for all the rest of the character groups.

Then I use an alert in case if the user doesn’t pick any of the character groups. If that’s the case return early to the beginning.

Additionally, I’m storing user’s choices in an object. 
    * User-selected password length,
    * Whether special characters should be included 
    * Whether numeric characters should be included
    * Whether uppercase and lowercase characters should be used

Lastly return the object with user’s choices.
Quite often during the assignment I used console.log and the function to see if that thing even works.

Next, we have Math.random function to get a random element from the array.

function generatePassword() was the hardest one to build. With var options we get the user’s password options (length, character types, etc.) Before moving forward checking if the user has entered invalid options or cancelled the input. If so then we return to the beginning. 

var availableCharacters and var selectedCharacters are used to manage and organise the characters used in generating the password.
If the user choose specialCharacters then those are added to availableCharacters pool. https://www.w3schools.com/jsref/jsref_concat_array.asp  To make this work we have to use .concat function that adds one array to the other one (sums up). Then we are picking a random special character and adding it to the selected characters. https://www.w3schools.com/jsref/jsref_push.asp (push - pushes a new element to an array). The same goes for all the other character sets. 

We use for loop where var i = selectedCharacters.length (These are the characters we have chosen out of all available options)
var options = getPasswordOptions() function (Where we asked the user to define the length, character set etc.)
And the line below it says that from selectedCharacters we should add a random integer to available characters

for (var i = selectedCharacters.length; i < options.length; i++) {
    selectedCharacters.push(getRandom(availableCharacters));
  }

Lastly, return selectedCharacters.join('')
At first I wrote return selectedCharacters without join, but that gave me password with commas in it (in between each element)
Then I found https://www.w3schools.com/jsref/jsref_join.asp  function to get rid of commas. This function joins everything into an array.

## Comments 
Click generate password button to activate the series of functions

## Link
https://grazulisedgars.github.io/EG-password-gen/ 

## Screenshot 
![Alt text](<assets/Screenshot 2023-10-30 at 14.08.23.png>)

## License 
MIT
