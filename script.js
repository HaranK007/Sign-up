var title = document.getElementById("title");
var nameField = document.getElementById("name");
var signUpBtn = document.getElementById("signUp");
var signInBtn = document.getElementById("signIn");

signInBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
}

signUpBtn.onclick = function(){
    nameField.style.maxHeight = "300px";
    title.innerHTML = "Sign Up";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
}
