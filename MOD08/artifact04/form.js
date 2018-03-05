function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var validFirstName = false;
 var validlastName = false;
 var validEmail= false;
 var validPhoneNumber =false;
 var validAddress=false;
 var validCountry=false, validCity=false;
 var validzipcode=false;
 
 
 var letters=/^[A-Za-z]+$/;
 var numbers=/^[0-9]+$/;
 var x = myContact.email.value;
 var atpos = x.indexOf("@");
 var dotpos = x.lastIndexOf(".");
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
  if (myContact.username.value===null ||
 myContact.username.value=== "" ||
 myContact.username.value.length >12)
 errorMessages += "<p>The username must be less than 12 characters and it is required</p>";
 else 
 validUsername =true;
  //console.log(validUsername);  
 /*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value==null ||
 myContact.password.value=== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
 else
 validUserPassword = true; 
 
 /*********** VALIDATES FirstName ******** */
  if (myContact.firstname.value===null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >20||
 !myContact.firstname.value.match(letters))
 errorMessages += "<p>The Firstname must be less than 20 characters and it is required</p>";
 else 
 validFirstName =true;
  
  /*********** VALIDATES LastName ******** */
  if (myContact.lastname.value===null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >50||
 !myContact.lastname.value.match(letters))
 errorMessages += "<p>The Lastname must be less than 50 characters and it is required</p>";
 else 
 validLastName =true;
  
   /*********** VALIDATES Email ******** */ 

    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length || myContact.email.value===null ||
 myContact.email.value=== "") {
        errorMessages += "<p>Not a valid e-mail address and it is required</p>";
        }else{
        validEmail= true;
    }
  
    /*********** VALIDATES PhoneNumber ******** */
  if (myContact.phone.value===null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length >15||
 !myContact.phone.value.match(numbers))
 errorMessages += "<p>The Phone Number must be less than 15 characters and it is required. Only numbers are accepted</p>";
 else 
 validPhoneNumber =true;

    /*********** VALIDATES Address ******** */
  if (myContact.address.value===null ||
 myContact.address.value=== "")
 errorMessages += "<p>The Address is required</p>";
 else 
 validAddress =true;
  
   /*********** VALIDATES City ******** */
  if (myContact.city.value===null ||
 myContact.city.value=== "")
 errorMessages += "<p>The City is required</p>";
 else 
 validCity =true;
  
     /*********** VALIDATES Country ******** */
  if (myContact.countries.value===null ||
 myContact.countries.value=== "")
 errorMessages += "<p>The Country is required</p>";
 else 
 validCountry =true;
  
     /*********** VALIDATES Zipcode ******** */
  if (myContact.countries.value==="United States" &&
 myContact.zipcode.value=== "" && myContact.zipcode.value.length !=5 && !myContact.zipcode.value.match(numbers))
 errorMessages += "<p>The zip code is required</p>";
 else 
 validzipcode =true;
 
  document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword && validFirstName && validLastName && validEmail && validPhoneNumber) && validAddress && validCity && validCountry&& validzipcode;
}
