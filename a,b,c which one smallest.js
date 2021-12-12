///write a program which compares 3 numbers a,b,c and print 
//which one is smaller
/// write a program which ask user for the marks of 3 students and print which student got least marks 
const input = require("prompt-sync")();
let a = input("enter sulemans marks")
let b = input("enter bilals marks")
let c = input("enter ahmad marks")

if (a < b && a < c) {
    console.log("suleman got least marks")

    // if (b < c) {
    //     console.log("bilal got medium marks")
    //     console.log("ahmad got maxiumum marks")
    // }
    // else if (b > c) {
    //     console.log("ahmad got medium marks")
    //     console.log("bilal got maxiumum marks")
    // }
    // else if (c == b) {
    //     console.log("ahmad and bilal got same marks")
    // }
}
else if (b < a && b < c) {
    console.log("bilal got least marks")
    if (c > a) {
        console.log("suleman got medium marks ")
    }
    else if (c < a && c < b) {
        console.log("ahmad got least marks")
