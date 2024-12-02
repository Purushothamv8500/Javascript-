let element1 = document.getElementById("myElement");
console.log(element1);


let element2 = document.getElementsByClassName("myClass");
console.log(element2[0]); // Access the first element with the class "myClass"


let element3 = document.getElementsByTagName("p");
console.log(element3[0]); // Access the first <p> element


let element4 = document.querySelector(".myClass");
console.log(element4)



document.getElementById("myElement").innerHTML = "New Content";
document.getElementById("myElement").textContent = "Text Content Only";



