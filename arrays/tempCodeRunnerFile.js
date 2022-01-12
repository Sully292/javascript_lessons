



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
    //  console.log(myarray[i].name)

    if (i == 3) {
        break;
    }
}


let myclass = 1


switch (myclass) {

    case 1: console.log("your are in class one ")
        

    case 2 || 1: console.log("your are in class two ")
        break;
    case 3: console.log("your are in class three ")
        break;
    case 4: console.log("your are in class four ")
        break;

    default: console.log("invalid class")

}