

/// bilal has brown skin

let myarray = [{
    name: "Bilal",
    age: 10,
    education: "BA",
    married: true,
    skin: "brown"

},
{
    name: "Ahmad",
    age: 20,
    education: "FA",
    married: true,
    skin: "black"

}
    , {
    name: "suleman",
    age: 30,
    education: "FA",
    married: false,
    skin: "white"
},
{
    name: "sadaf",
    age: 25,
    education: "FA",
    married: true,
    skin: "brown"
}
    ,
{
    name: "khalid",
    age: 25,
    education: "FA",
    married: true,
    skin: "brown"
}
]
for (let i = 0; i < myarray.length; i++) {
    myarray[i].name = "johnny " + myarray[i].name
    myarray[i].age = myarray[i].age + 5
    if (myarray[i].name == "johnny Bilal") {
        myarray[i].age = myarray[i].age + 5

    }
    myarray[i].married = myarray[i].married == true ? false : true

    console.log(myarray[i].name + " has " + myarray[i].skin + " skin and age is " + myarray[i].age + "is married " + myarray[i].married)
}


