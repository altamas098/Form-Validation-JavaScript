const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-pass");
const altamas = document.querySelector("#altamas")

// console.log(altamas);
// console.log(form);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validate();
});

const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

function validate() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const confirmPassVal = confirmPass.value.trim();

  //validating username
  if (usernameVal === "") {
    setErrorMsg(username, `username can't be empty`);
  } else if (usernameVal.length < 3) {
    setErrorMsg(username, `username should be minimum 3 char`);
  } else {
    setSuccessMsg(username);
  }

  //validation email
  if (emailVal === "") {
    setErrorMsg(email, `Email can't be empty`);
  } else if (!(isEmail(emailVal))) {
    setErrorMsg(email, `Enter a valid email`);
  } else {
    setSuccessMsg(email);
  }

  //validation phone Number
  if (phoneVal === "") {
    setErrorMsg(phone, `Phone Number can't be empty`);
  } else if (phoneVal.length != 10) {
    setErrorMsg(phone, `Phone Number should be 10 digits`);
  } else {
    setSuccessMsg(phone);
  }

  //validation password
  if (passwordVal === "") {
    setErrorMsg(password, `Password can't be empty`);
  } else if (passwordVal.length < 5) {
    setErrorMsg(password, `Passward should be atleast 5 digits`);
  } else {
    setSuccessMsg(password);
  }

  //validation Confirm password
  if (confirmPassVal === "") {
    setErrorMsg(confirmPass, `Confirm your Password`);
  } else if (confirmPassVal !== passwordVal) {
    setErrorMsg(confirmPass, `Password should match`);
  } else {
    setSuccessMsg(confirmPass);
  }

}

function setErrorMsg(input, setErrorMsg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerHTML = setErrorMsg;
  formControl.className = "form-control error";

}
function setSuccessMsg(input){
  const formControl  = input.parentElement;
  formControl.className = "form-control success";
  
}
