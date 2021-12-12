// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

const input = require("prompt-sync")();
let n = input("enter a number")
//// body ke bahir sum ke value
let sum = 0
for (let i = 1; i <= n; i++) {


    // har dafa sum mei i ke value add hogi 
    sum = sum + i
}
console.log(sum)

