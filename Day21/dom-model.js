// Selecting Elements

// getElementById

let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");

console.log(heading1);
console.log(heading2);


// getElementByTagName

let listItems = document.getElementsByTagName("li");
console.log(listItems);

console.log(listItems[1].innerHTML);


// getElementByClassName

let paragraphs = document.getElementsByClassName("para");
console.log(paragraphs);


// Creating Elements

// createElement

let paraNew = document.createElement("p");
paraNew.innerHTML = "<i>Mumbai</i>";

// append Child
document.body.appendChild(paraNew);


// append
document.body.append(paraNew);

// append vs appendChild

let head1 = document.createElement("h1");
// head1.innerHTML = "Heading 1";

let bold1 = document.createElement("b");
bold1.innerHTML = "Bold";

head1.appendChild(bold1);

let head2 = document.createElement("h1");
head2.innerHTML = "Heading 2";

// Using appendChild


// document.body.appendChild(head1, head2);


// Using append

document.body.append(head1, head2);



// Delete an Element


// remove

let ol1 = document.getElementById("orderedList1");
// ol1.remove(); // It removes the completed node/


// removeChild

ol1.removeChild(document.getElementById("html"));

