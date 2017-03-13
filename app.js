console.log ("Sanity Check");

// Finding HTML Elements (ID)
// console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method"); //Giving it another name
console.log(idElement);

// Finding Tag Names
console.log(document.getElementsByTagName("script")); //Grabs all script tags - Showss as array [script]
console.log(document.getElementsByTagName("div")); //Grabs all div tags - Shows as array [div, div#use-id-method, div.use-class-me...]

var tagName = document.getElementsByTagName("div");
console.log (tagName);

// Finding HTML Elements (Class)
// console.log(document.getElementsByClassName("use-class-method")); //Grabs "use-class-method" class element - Shows as array [div.use-class-method, div.use-class-method]
var classElements = document.getElementsByClassName("use-class-method");
console.log(classElements);

// Changing HTML Elements
console.log(idElement.innerHTML);
idElement.innerHTML = "I have been changed";

console.log(classElements[1]);

classElements[1].innerHTML = "I have been changed by className and array location";


