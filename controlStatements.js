let number = 10;
if(number>=0);
console.log("positive")


///// if else

let  num = 7;
if (num%2===0){
    console.log("even")
}
else{
    console.log("odd")
}

console.log("==========================================")
// if else if

let n = 80;

if (n>60){
    console.log("average");
}else if (n>70){
    console.log("good");

}
else(n>=80) 
{
    console.log("very good")
}


console.log("--------------------------------------------")
/// nested if statement

let numberr = 8;

if (numberr > 0) {
    if (numberr % 2 === 0) {
        console.log("The number is positive and even.");
    } else {
        console.log("The number is positive but odd.");
    }
} else {
    console.log("The number is not positive.");
}
// Output: "The number is positive and even."
