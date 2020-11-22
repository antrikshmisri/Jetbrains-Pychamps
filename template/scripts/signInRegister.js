var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf("/") + 1);
let emailElementId = "";
let passElementId = "";
let userErrorElementId = "";
let passErrorElementId = "";
if (sPage == "request-demo.html") {
  passElementId = "userPassword";
  emailElementId = "userEmail";
  userErrorElementId = "userEmailError";
  passErrorElementId = "userPasswordError";
} else if (sPage == "sign-in.html") {
  passElementId = "userSIPassword";
  emailElementId = "userSIEmail";
  userErrorElementId = "userSIEmailError";
  passErrorElementId = "userSIPasswordError";
}
// Working for SignUp validation
function checkUserEmail() {
  if (sPage == "request-demo.html") {
    userEmail = document.getElementById(emailElementId).value;
  } else if (sPage == "sign-in.html") {
    userEmail = document.getElementById(emailElementId).value;
  }
  let userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let flag;

  if (userEmail.match(userEmailFormate)) {
    flag = false;
  } else {
    flag = true;
  }

  if (flag) {
    document.getElementById(userErrorElementId).style.display = "block";
    // console.log(flag);
  } else {
    document.getElementById(userErrorElementId).style.display = "none";
    // console.log(flag);
  }
}

function checkUserPassword() {
  let userPassword = document.getElementById(passElementId);
  let userPasswordFormulate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
  let flag;

  if (userPassword.value.match(userPasswordFormulate)) {
    flag = false;
  } else {
    flag = true;
  }

  if (flag) {
    document.getElementById(passErrorElementId).style.display = "block";
  } else {
    document.getElementById(passErrorElementId).style.display = "none";
  }
}

function signUp() {
  let userPassword = document.getElementById(passElementId).value;
  console.log(`UserPassword ${userPassword}`);

  let userEmail = document.getElementById(emailElementId).value;
  console.log(`UserEmail ${userEmail}`);

  let userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;

  let checkUserEmailValid = userEmail.match(userEmailFormate);
  console.log(`CheckUserEmailValid ${checkUserEmailValid}`);
  let checkUserPasswordValid = userPassword.match(userPasswordFormate);
  console.log(`CheckUserPasswordValid ${checkUserPasswordValid}`);

  if (checkUserEmailValid == null) {
    return checkUserEmail();
  } else if (checkUserPasswordValid == null) {
    return checkUserPassword();
  } else {
    console.log(userEmail);
    console.log(userPassword);
    firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((success) => {
        console.log(success);
        let user = firebase.auth().currentUser;
        let uid;
        if (user != null) {
          uid = user.uid;
        }
        console.log("Created");
        window.alert("Registered");
        window.location.replace("sign-in.html");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Something Went wrong");
      });
  }
}

function checkUserSIEmail() {
  let userSIEmail = document.getElementById("userSIEmail");
  let userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let flag;

  if (userSIEmail.value.match(userSIEmailFormate)) {
    flag = false;
  } else {
    flag = true;
  }

  if (flag) {
    document.getElementById("userSIEmailError").style.display = "block";
  } else {
    document.getElementById("userSIEmailError").style.display = "none";
  }
}

function checkUserSIPassword() {
  let userSIPassword = document.getElementById("userSIPassword");
  let userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
  let flag;
  if (userSIPassword.value.match(userSIPasswordFormate)) {
    flag = false;
  } else {
    flag = true;
  }
  if (flag) {
    document.getElementById("userSIPasswordError").style.display = "block";
  } else {
    document.getElementById("userSIPasswordError").style.display = "none";
  }
}

function signIn() {
  let userSIEmail = document.getElementById("userSIEmail").value;
  console.log(`userSIEmail ${userSIEmail}`);
  let userSIPassword = document.getElementById("userSIPassword").value;
  console.log(`userSIPassword ${userSIPassword}`);
  let userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;

  let checkUserEmailValid = userSIEmail.match(userSIEmailFormate);
  console.log(`checkUserEmailValid ${checkUserEmailValid}`);
  let checkUserPasswordValid = userSIPassword.match(userSIPasswordFormate);
  console.log(`checkUserPasswordValid ${checkUserPasswordValid}`);

  if (checkUserEmailValid == null) {
    return checkUserSIEmail();
  } else if (checkUserPasswordValid == null) {
    return checkUserSIPassword();
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(userSIEmail, userSIPassword)
      .then((success) => {
        console.log("Signed IN");
        window.location.replace("landing.html");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error " + error);
        window.alert("User does not exits");
      });
  }
}
