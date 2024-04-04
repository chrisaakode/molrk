//create a variable that saves data.the data is getting an eliment from the HTML dokumantwith an ID.
const cardContainer = document.querySelector("#card");
console.log(cardContainer);

//create a variable that saves data.the data is creating a new HTML eliment.

const h2Title = document.createElement ("h2");

//giving our nevariable content to be displayd.
h2Title.textContent = "my oc karma";
console.log(h2Title);

//appending the HTML element we created in JS to our HTML dokument.
cardContainer.appendChild(h2Title);

//repet.
const pDescription = document.createElement("p");


pDescription.textContent ="highbyid";

console.log(pDescription)

cardContainer.appendChild(pDescription);