const interestElement = document.getElementById("interest");
const hobbiesElement = document.getElementById("hobbies");
const boroughElement = document.getElementById("borough");
const zipcodeElement = document.getElementById("zipcode");
const ageElement = document.getElementById("age");
// const youElement = document.getElementById("youput");
document.querySelector("#button").addEventListener("click", updateDB);
//Set database object here
var database = firebase.database().ref();
/**
* Updates the database with the username and message.
*/
function updateDB(event) {
   event.preventDefault();
   const interest = interestElement.value;
   const hobbies = hobbiesElement.value;
   const borough = boroughElement.value;
   const zipcode = zipcodeElement.value;
   const age = ageElement.value;
   console.log(interest);
   interestElement.value = "";
   hobbiesElement.value = "";
   boroughElement.value = "";
   zipcodeElement.value = "";
   ageElement.value = "";
   let obj = {
       INTEREST: interest,
       HOBBIES: hobbies,
       BOROUGH: borough,
       ZIPCODE: zipcode,
       AGE: age
   };
   database.push(obj);
}
// Set database "child_added" event listener here
database.on("child_added", addEvent);
const msgContainer = document.querySelector("#fetchData");
function addEvent(rowData) {
   const row = rowData.val();
   const interest = row.INTEREST;
   const hobbies = row.HOBBIES;
   const borough = row.BOROUGH;
   const zipcode = row.ZIPCODE;
   const age = row.AGE;
   const pElement = document.createElement("p");
   pElement.classList.add("show");
   pElement.innerText = `${interest}   ${hobbies}    ${borough}     ${zipcode}    ${age}`;
   msgContainer.appendChild(pElement);
   console.log(title);
}