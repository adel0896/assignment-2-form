document.querySelector("#button").addEventListener("click", checkValidation);
function checkValidation(event) {
  let mydate = new Date();
  if (mydate.getDay() === 5 || mydate.getDay() === 6 || mydate.getDay() === 7) {
    alert("You can not send emails during the weekend");
  } else {
    let valid;
    let email = document.querySelector("#email").value.trim();
    let name = document.querySelector("#name").value.trim();
    let message = document.querySelector("#message").value.trim();
    console.log(email);
    console.log(name);
    console.log(message);
    if (email.includes("cphbusiness.dk")) {
      console.log("email is correct");
      valid = true;
    } else {
      alert("Your email is incorrect, it needs to be a 'cphbussines.dk' account");
      document.querySelector("#email").classList.add("error");
      valid = false;
      console.log(valid);
    }
    console.log(valid);
    if (valid === true) {
      document.querySelector("#myForm").action = "mailto:" + email;
    } else {
      console.log("Info is incorrect");
    }
  }
}
