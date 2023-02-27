// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate password
function generatePassword() {
  var length = prompt("Choose a password length between 8 and 128 characters");
  length = parseInt(length);

  // Validate the password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please choose a length between 8 and 128.");
    return "";
  }

  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumeric = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");

  // Validate the character types selection
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type to include.");
    return "";
  }

  // Define all character types
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Define the possible character types based on user selection
  var possibleCharacters = "";
  if (includeLowercase) possibleCharacters += lowercaseLetters;
  if (includeUppercase) possibleCharacters += uppercaseLetters;
  if (includeNumeric) possibleCharacters += numbers;
  if (includeSpecial) possibleCharacters += specialCharacters;

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters.charAt(randomIndex);
  }

  return password;
}

 
