// arithmetic operators

let a = 3, b = 4;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


console.log("_______________________________")

// assignment operators

let x = 5;
x= 10;

x+=10; 
console.log(x);
x-=3;
console.log(x)

x*=3;
console.log(x)

x/=4
console.log(x)

console.log(x);
console.log(x++);
console.log(x--);
console.log(++x);
console.log(--x);

console.log("**********************************")
// comparision operators

let p = 5, q = "10";

console.log(p==q);
console.log(p===q);
console.log(p!=q);
console.log(p>q);
console.log(p<q);
console.log(p>=q);
console.log(p<=q)


console.log("---------------------------------")

// logical operators

let isAdmin = true;
let isLoggedIn = false;


console.log(isAdmin && isLoggedIn); 


console.log(isAdmin || isLoggedIn); 

console.log(!isAdmin); 


console.log("___________________________________________-")
/// string conversions


let str1 = "hello hiii";
let str2 = "good morning";

console.log(str1+ " " +str2);


// ternary operators

let age = 18;
let status = age>=18? "eligible for vote": "not eligible";
console.log(status);



