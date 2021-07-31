// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt responses
  var selectedLength = parseInt(window.prompt("How many characters would you like your password to be? Enter a number between 8 and 128."));
  //if user doesn't enter correct number
  while(selectedLength < 8 || selectedLength > 128) {
    selectedLength = window.prompt("Your input is invalid. Enter a number between 8 and 128.");
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
  

  //password generator- if lowercase
  if(includeLowerCase) {
    var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    var password = "";
    for(let i = 0; i < selectedLength; i++) {
      password += lowerCaseLetters[Math.floor(Math.random) * selectedLength];
      console.log(password);
    }
  }



  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
