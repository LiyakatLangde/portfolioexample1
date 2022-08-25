var usernama        = document.forms["vform"]["nama"];
var email           = document.forms["vform"]["email"];
var mobileno        = document.forms["vform"]["mobileno"];
var cname           = document.forms["vform"]["cname"];

var name_error      = document.getElementById("name_error");
var email_error     = document.getElementById("email_error");
var mobileno_error    = document.getElementById("mobileno_error");
var cname_error    = document.getElementById("cname_error");

usernama.addEventListener("blur", verifikasiNama, true);
email.addEventListener("blur", verifikasiEmail, true);
mobileno.addEventListener("blur", verifikasimobileno, true);
cname.addEventListener("blur", verifikasicname, true);
mobileno.addEventListener("keypress", verifikasimobileno, true);


function Validate(){
  var isvalid = true;
  if(usernama.value == ""){
    usernama.style.border = '1px solid red';
    name_error.textContent= 'Enter Full Name';
    usernama.focus();
    isvalid = false;
  }
  if(email.value == "" || !validateEmail(email.value)){
    email.style.border = '1px solid red';
    email_error.textContent = "Enter Valid E-mail";
    email.focus();
    isvalid = false;
  }
 
  if(mobileno.value.length  != 10 ){
    mobileno.style.border = '1px solid red';
    mobileno_error.textContent = "Enter Valid Phone Number";
    mobileno.focus();
    isvalid = false;
  }
  if(cname.value == ""){
    cname.style.border = '1px solid red';
    cname_error.textContent = "Enter Company Name";
    cname.focus();
    isvalid = false;
  }
if(isvalid){
var value = []
value.push(usernama.value);
value.push(email.value);
value.push(mobileno.value);
value.push(cname.value);

  localStorage.setItem("values", value )
  window.location = "thankyou-page.html"
}

}

function verifikasiNama(){
    if(usernama.value !=""){
    usernama.style.border = '1px solid silver';
    name_error.innerHTML="";
    return true;
  }
}
function verifikasiEmail(){
  if(email.value !="" && validateEmail(email.value)){
    email.style.border = '1px solid silver';
    email_error.innerHTML="";
    return true;
  }
}
function verifikasimobileno(){
  if(mobileno.value !="" && mobileno.value.length == 10){
    mobileno.style.border = '1px solid silver';
    mobileno_error.innerHTML="";
    return true;
  }
}
function verifikasicname(){
  if(cname.value !=""){
    cname.style.border = '1px solid silver';
    cname.style.border='1px solid silver';
    cname_error.innerHTML="";
    return true;
  }

  
}

function alpha(e) {
  var k = 0;
  document.all ? k = e.keyCode : k = e.which;
  return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};



