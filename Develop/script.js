// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//get references to #password text element
var passwordText = document.querySelector("#password");

// var password = generatePassword();


// Write password to the #password input
function writePassword() {
  //prompt responses
  var selectedLength = Number(window.prompt("How many characters would you like your password to be? Enter a number between 8 and 128."));
  //if user doesn't enter correct number
  while(selectedLength < 8 || selectedLength > 128) {
    selectedLength = Number(window.prompt("Your input is invalid. Enter a number between 8 and 128."));
  }
  //confirm character type
  var includeLowerCase = window.confirm("Would you like to include LOWERCASE characters in your password?");
  var includeUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password?");
  var includeNumbers = window.confirm("Would you like to include NUMERIC characters in your password?");
  var includeSpecial = window.confirm("Would you like to include SPECIAL characters in your password?");
  //if user doesn't confirm any of the above
  while(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecial) {
    window.alert("You must confirm at least one character type to include in your password.");
    includeLowerCase = window.confirm("Would you like to include LOWERCASE characters in your password?");
    includeUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password?");
    includeNumbers = window.confirm("Would you like to include NUMERIC characters in your password?");
    includeSpecial = window.confirm("Would you like to include SPECIAL characters in your password?");
  }

// list options for each selection 
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// initial password if characters were included
  var initialPassword = "";
  (includeLowerCase) ? initialPassword += lowerCaseLetters: ""; 
  (includeUpperCase) ? initialPassword += upperCaseLetters: "";
  (includeNumbers) ? initialPassword += numbers: "";
  (includeSpecial) ? initialPassword += special: "";

  //generate actual password
  var finalPassword = "";
  for(var i = 0; i < selectedLength; i++) {
    finalPassword += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
  }
  console.log(finalPassword)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function tryThisFirst()  {
//   var letters = 'abcdefghijklmnopqrstuvwxyz';
//   var password = '';
//   for   (let i = 0; i < 26; i++) {
//   password += letters[Math.floor(Math.random() * 26)]
// }
// console.log(password);
// }
// tryThisFirst();