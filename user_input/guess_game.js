const input = require('prompt-sync')();
let guess = input("enter your guess ")
let answer = "bumper to bumper"
let tries = 1
while (guess != answer && tries < 3) {
    console.log("your guess is wrong ")
    guess = input("enter your guess again ")
    tries++
}
if (guess == answer) {
    console.log("guess is right", tries, "tries")
}
else {
    console.log("you have failed")
}
