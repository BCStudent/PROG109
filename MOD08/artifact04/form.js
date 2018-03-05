function ValidateForm(){
var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhoneNumber = false;
var validUsername = false;
var validUserPassword = false;
var validPhone = false;
var validAddress = false;
var validCity = false;
var validCountries = false;
var validZipCode = false;
var validEmail = false;
 
 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;
 
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
        //Required. Maximum 12 characters.
 if (myContact.username.value.length > 12 || myContact.username.value===null || myContact.username.value==="")
 errorMessages += "<p>The username must be less than 12 characters and it is required.</p>";
  else 
 validUsername =true;
 
   //console.log(validUsername); 
 
 /*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value==null ||
 myContact.password.value=== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password must be less than 7 characters and it is required.</p>";
 else
 validUserPassword = true; 
 
  /*********** VALIDATES FIRSTNAME ******** */
 if (myContact.firstname.value==null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >20 || !myContact.firstname.value.match(letters))
 errorMessages += "<p>The first name must be less than 20 characters and it is required. Only letters and numbers are accepted.</p>";
 else
 validFirstName = true; 
 
   /*********** VALIDATES LASTNAME ******** */
 if (myContact.lastname.value==null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >50 || !myContact.lastname.value.match(letters))
 errorMessages += "<p>The last name must be less than 50 characters and it is required. Only letters and numbers are accepted.</p>";
 else
 validLastName = true;
 
   /*********** VALIDATES PHONE NUMBER ******** */
 if (myContact.phone.value==null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length >15 || !myContact.phone.value.match(numbers))
 errorMessages += "<p>The phone number must be less than 15 characters and it is required. Only numbers are accepted.</p>";
 else
 validPhone = true; 

   /*********** VALIDATES ADDRESS ******** */
 if (myContact.address.value==null ||
 myContact.address.value=== "")
 errorMessages += "<p>The address must be less than 50 characters and it is required. Only letters and numbers are accepted.</p>";
 else
 validAddress = true; 

   /*********** VALIDATES CITY ******** */
 if (myContact.city.value==null ||
 myContact.city.value=== "" ||
 myContact.city.value.length >15 || !myContact.city.value.match(letters))
 errorMessages += "<p>The city must be less than 15 characters and it is required. Only letters are accepted.</p>";
 else
 validCity = true; 

   /*********** VALIDATES COUNTRIES ******** */
 if (myContact.countries.value==null ||
 myContact.countries.value=== "")
 errorMessages += "<p>Please select a country.</p>";
 else
 validCountries = true; 
 
    /*********** VALIDATES ZIP CODE ******** */
 if (myContact.countries.value=== "USA" &&
 
 myContact.zipcode.value.length !=5 && !myContact.zipcode.value.match(numbers))
 errorMessages += "<p>The zip code must be 5 characters and it is required. Only numbers are accepted.</p>";
 else
 validZipCode = true;
  
    /*********** VALIDATES EMAIL ******** */
if (myContact.email.value == null ||
myContact.email.value === "" ||
myContact.email.value.length > 50) {
var x = myContact.email.value;
var atpos = x.indexOf("@");
var dotpos = x.lastIndexOf(".");
if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length)
errorMessages += "<p>A valid email address is required.</p>";
else
validEmail = true;
} 
else
validEmail = true;

 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validFirstName && validLastName  && validEmail  && validPhoneNumber && validUsername && validUserPassword && validAddress && validCity && validCountries && validZipCode) ;
}

function validateEmail() {
    var x = document.getElementById("email").value;
  {
 errorMessages += "<p>A valid email address is required.</p>";       
        return false;
    }
}

