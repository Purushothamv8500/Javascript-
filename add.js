function add() {
    let x = 10;
    let y = 20;
    let z = x+y;

    let k = x-y
    console.log(k)

    console.log(z);
}

add();



let people = [
    { name: "Alice", age: 25, performance: true},
    { name: "Bob", age: 30, performance: false}
];
console.table(people);


console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

