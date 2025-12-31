const passwordBox = document.getElementById("password");
const password_length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqurstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*(<)[>-=]{_}/";
const allChars = upperCase + lowerCase + number + symbol;

//Shuffle function(randomely swap)
function shuffle(str) {
  return str
    .split("") // string -> array
    .sort(() => Math.random() - 0.5) // randomely swap
    .join(""); // array -> string
}

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password_length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = shuffle(password);
}

// old way:-->
// function copyPassword() {
//   passwordBox.select();
//   document.execCommand("copy");
// }

// 🚀 MODERN & RECOMMENDED WAY (Clipboard API) :----->
function copyPassword() {
  const passwordBox = document.getElementById("password");
  if (passwordBox.value === "") {
    alert("Generate password first!");
    return;
  }
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      alert("Password Copied!");
    })
    .catch(() => {
      alert("Copy failed!");
    });
}
