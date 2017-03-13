console.log ("Sanity Check");

// Finding HTML Elements (ID)
// console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method"); //Giving it another name
console.log(idElement);

// Finding Tag Names
console.log(document.getElementsByTagName("script")); //Grabs all script tags - Shows as array [script]
console.log(document.getElementsByTagName("div")); //Grabs all div tags - Shows as array [div, div#use-id-method, div.use-class-me...]

// Finding HTML Elements (Class)
console.log(document.getElementsByClassName("use-class-method")); //Grabs "use-class-method" class element - Shows as array [div.use-class-method, div.use-class-method]
