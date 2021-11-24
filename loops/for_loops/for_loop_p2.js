// Write a Python program which iterates the integers
//from 1 to 50. For multiples of three print "Fizz" instead of the number
// and for the multiples of five print "Buzz". For numbers which are multiples
// of both three and five print "FizzBuzz".
// Sample Output :
// fizzbuzz
// 1
// 2
// fizz
// 4
// buzz

for (let i = 1; i <= 50; i = i + 1) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "fizzbuzz")
    }

    else if (i % 3 == 0) {
        console.log(i, "fizz")

    }
    else if (i % 5 == 0) {
        console.log(i, "buzz")
    }

    else {
        console.log(i)
    }
}