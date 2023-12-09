const passwordBox = document.getElementById("password");
const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@^*()_+*$^&:{}|?<>";

const allchars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordBox.value = password;
}

// Define a function to copy the password to the clipboard
function copyPassword() {
  // Get the password value
  let password = passwordBox.value;
  // Use the writeText method to copy the password
  navigator.clipboard
    .writeText(password)
    .then(() => {
      // Log a success message
      console.log("Password copied to clipboard");
      // Display a message that says "copied"
      alert("Copied");
    })
    .catch((err) => {
      // Log an error message
      console.error("Failed to copy password: ", err);
    });
}

// Get the image element by its id
let copyImage = document.getElementById("copy");
// Add an event listener to the image element
copyImage.addEventListener("click", copyPassword);
