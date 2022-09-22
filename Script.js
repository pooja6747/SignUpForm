function validateForm(event) {

   
  event.preventDefault();


  var emailError = document.getElementById("email-error");
  var fnameError = document.getElementById("fname-error");
  var lnameError = document.getElementById("lname-error");
  var passwordError = document.getElementById("password-error");
  var cpasswordError = document.getElementById("cpassword-error");


  var email = document.getElementById("email").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var pw = document.getElementById("pwd").value;
  var cpw = document.getElementById("cpwd").value;

///localstorage
localStorage.setItem("email", email);
localStorage.setItem("fname", fname);
localStorage.setItem("lname", lname);
localStorage.setItem("pw", pw);


  if (fname.length < 0 || fname.length == "") {
    fnameError.innerHTML = "**Please enter name atleast 2 character";
  }

  if (lname.length < 0 || lname.length == "") {
    lnameError.innerHTML = "**Please enter name atleast 2 character";
  }


  if (email.length == "") {
    emailError.innerHTML = "**Email is required";
   //  return false;
  }

//   if (!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
//     emailError.innerHTML = "**Email @ sign use";
//     return false;
//   }

  ///for password

  //check empty password field
//   if(pw.match((/?=.*[a-z])(?=.*[A-Z]).{8,}/))){
// passwordError.innerHTML = "**Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
//   }
console.log(pw);
if (pw.length == "") {
   console.log("pw validation");
   passwordError.innerHTML = "**Fill the password please!";
  
 }

  if(pw.length <6){
   passwordError.innerHTML = "**Password should be atleast 6 character long";
 

}

  //check empty password field
  if (cpw.length == "") {
    cpasswordError.innerHTML = "**Fill the password please!";
   
  }

  if (pw != cpw) {
    cpasswordError.innerHTML = "**Password does not match";
    return false;
  } 

  
 
  popUp();
}




function popUp() {
  let popup = document.getElementById("popup");

  popup.classList.add("open-popup");

  return false;
  
}
