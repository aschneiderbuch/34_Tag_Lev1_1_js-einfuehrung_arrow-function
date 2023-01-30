/* 
function vs arrow
*/

console.log("test");

function intro() {
    console.log("Hello World");
}

const intro2 = () => {
    console.log("arrow1: " + "Hello World");
};

const intro3 = () => console.log("arrow 2: " + "Hello World");

intro();

intro2();

intro3();

let multiply = (num1, num2) => {return num1 * num2};

console.log(multiply(2,10));

let multiply2 = (num1, num2) => num1 * num2;
console.log("Geht auch ohne return " + multiply2(2,10));