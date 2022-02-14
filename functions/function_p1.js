/* Write a Python program to convert temperatures to and from celsius, fahrenheit. Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
Expected Output :
60°C is 140 in Fahrenheit
45°F is 7 in Celsius */
function tofarenheit(c) {


    let f = (c / 5) * 9 + (32)
    console.log(c, "C is", f, "in fahrenheit")
    return (f)

}
let a = tofarenheit(60)

function celsius(f) {
    let c = ((f - 32) / 9) * 5
    console.log(f, "F is", c, "in celsius")
    return (c)
}
celsius(a)

/// uper yeh function declaration hota hai
function mybrother()    /// function parameters 
{
    console.log("kya haal hai") ///har dafa jab hum mybrother() likhen ge kya haal hai print hoga console me
}
mybrother()
speak = function () {       //// function expression jab hum function ko variable ke ander store krty 
    console.log("hellosir")

}

speak()    ///can invoke this function here 
