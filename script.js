function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+{}[];:<>,.?/~';

  let passwordLength = 0;
  let selectedCharacters = '';

  do {
    passwordLength = parseInt(prompt('Please enter a password length between 8 and 128 characters'));
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

  let includeLowercase = confirm('Do you want to include lowercase characters?');
  let includeUppercase = confirm('Do you want to include uppercase characters?');
  let includeNumbers = confirm('Do you want to include numeric characters?');
  let includeSpecial = confirm('Do you want to include special characters?');

  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
    alert('Please select at least one character type.');
    return '';
  }

  if (includeLowercase) {
    selectedCharacters += lowercaseChars;
  }
  if (includeUppercase) {
    selectedCharacters += uppercaseChars;
  }
  if (includeNumbers) {
    selectedCharacters += numberChars;
  }
  if (includeSpecial) {
    selectedCharacters += specialChars;
  }

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    password += selectedCharacters[randomIndex];
  }

  return password;
}

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');
  passwordText.value = password;
}

const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);

