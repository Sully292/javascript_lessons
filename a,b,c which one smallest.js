///write a program which compares 3 numbers a,b,c and print 
//which one is smaller
/// write a program which ask user for the marks of 3 students and print which student got least marks 
const input = require("prompt-sync")();
let a = parseInt(input("enter sulemans marks ")) // 50
let b = parseInt(input("enter bilals marks ")) //40
let c = parseInt(input("enter ahmad marks ")) // 10

if (a < b && a < c) {
    console.log("suleman got least marks" + a)

    if (b < c) {
        console.log("bilal got medium marks", b)
        console.log("ahmad got maxiumum marks", c)
    }
    else if (b > c) {
        console.log("ahmad got medium marks")
        console.log("bilal got maxiumum marks")
    }
    else if (c == b) {
        console.log("ahmad and bilal got same marks")
    }
}
else if (b < a && b < c) {
    console.log("bilal got least marks")
    if (c > a) {
        console.log("suleman got medium marks ")
        console.log("ahmad got maximum marks ")
    }
    else if (a > c) {
        console.log("Ahmad  got medium marks ")
        console.log("Suleman got maximum marks ")
    }
    else if (a == c) {
        console.log("ahmad and suleman got same marks")
    }

}
else if (c < a && c < b) {
    console.log("ahmad got least marks")
    if (a < b) {
        console.log("suleman got medium marks")
        console.log(" bilal got max marks")
    }
    else if (b < a) {
        console.log("bilal got medium marks ")
        console.log("suleman got max marks ")
    }
    else if (a == b) {
        console.log(" bilal and suleman got same marks ")
    }

}