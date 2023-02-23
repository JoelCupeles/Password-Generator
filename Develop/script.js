// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function to generate password//

function generatePassword() {
  var length = prompt("Choose a password length between 8 and 128 characters");
  length = parseInt(length);


//Validate the password lenth

 if(isNaN(length) || length < 8 || length > 128) {
  alert('Invdalid password length. Please choose a length between 8 and 128');

 return '';
 }

 var includeLowercase = confirm("Do you want to include lowercase letters?");
 var includeUppercase = confirm("Do you want to include Uppercase letters?");
 var includeNumeric = confirm("Do you want to include numbers?");
 var includeSpecial = confirm("Do you want to include special charcteres letters?")

 if(!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert("Please select at least one character type to include.");
  return "";
 }

 //Charcter types 
 var includeLowercase = "abcdefghijklmnopqrstuvwxy";
 var includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var includeNumeric = "0123456789";
 var includeSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}"



 
}

 



