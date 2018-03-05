//function ValidateEmail(){
//    var x = document.getElementById("email").value;
//    var atpos = x.indexOf("@");
//    var dotpos = x.lastIndexOf(".");
//    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
//        alert("Not a valid e-mail address");
//        return false; }
//  else
//     validEmail =true;}
  
function ValidateForm(){
  var validFirstname = false;
  var validLastname = false;
  var validUsername = false;
  var validPassword = false;
  var validPhone = false;
  var validAddress = false;
  var validCity = false;
  var validCountry = false;
  var validZipcode = false;
 // var validEmail = false;
  
  
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  
  var errorMessages ="";  // All the error messages are going to stay in this variable

  
  
/************* VALIDATES FIRST NAME ***********/
 if (myContact.firstname.value.length > 20 || myContact.firstname.value===null || myContact.firstname.value==="" || !myContact.firstname.value.match(letters))
 errorMessages += "<p>Your first name must be less than 20 characters and it is required.</p>";
  else 
 validFirstname =true; 
  
/************* VALIDATES LAST NAME ***********/
 if (myContact.lastname.value.length > 50 || myContact.lastname.value===null || myContact.lastname.value==="" || !myContact.lastname.value.match(letters))
 errorMessages += "<p>Your last name must be less than 50 characters and it is required.</p>";
  else 
 validLastname =true; 

 /************* VALIDATES EMAIL ***********/

      
/************* VALIDATES PHONE ***********/
 if (myContact.phone.value.length > 15 || myContact.phone.value===null || myContact.phone.value==="" || !myContact.phone.value.match(numbers))
 errorMessages += "<p>Your phone number must be less than 15 characters and it is required.</p>";
  else 
 validPhone =true;  
  
/************* VALIDATES USERNAME ***********/
 if (myContact.username.value.length > 12 || myContact.username.value===null || myContact.username.value==="")
 errorMessages += "<p>Your username must be less than 12 characters and it is required.</p>";
  else 
 validUsername =true;

  //console.log(validUsername);
 
/************* VALIDATES PASSWORD ***********/
 if (myContact.password.value.length > 7 || myContact.password.value===null || myContact.password.value==="")
 errorMessages += "<p>Your password must be less than 7 numbers (no letters) and it is required.</p>";
  else 
 validPassword =true;
  
/************* VALIDATES ADDRESS ***********/
 if (myContact.address.value===null || myContact.address.value==="")
 errorMessages += "<p>Your address is required.</p>";
  else 
 validAddress =true; 
  
/************* VALIDATES CITY ***********/
 if (myContact.city.value===null || myContact.city.value==="")
 errorMessages += "<p>Your city is required.</p>";
  else 
 validCity =true; 

/************* VALIDATES COUNTRY ***********/
 if (myContact.countries.value===null || myContact.countries.value==="")
 errorMessages += "<p>Your city is required.</p>";
  else 
 validCountry =true; 
  
/************* VALIDATES ZIPCODE ***********/
/************* NEED TO FIGURE OUT HOW TO ADD USA ONLY ***********/
//myContact.countries.value=== "USA" && 
 
  if (myContact.zipcode.value.length >5 || myContact.zipcode.value===null || myContact.zipcode.value==="" || !myContact.zipcode.value.match(numbers))
  errorMessages += "<p>Your zip code is required and must be less than 5 numbers.</p>";
  else 
 validZipcode =true; 
  
 document.getElementById("errorMessages").innerHTML = errorMessages;
  
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validPassword && validPhone && validFirstname && validLastname && validAddress && validCity && validCountry && validZipcode); // && validEmail) ;

}
