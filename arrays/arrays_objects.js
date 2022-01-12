

/// bilal has brown skin

let myarray = [{
    name: "Bilal",
    age: 10,
    education: "BA",
    married: true,
    skin: "brown"


},
{
    name: "sehrish",
    age: 20,
    education: "MA",
    married: true,
    skin: "black"

}
    , {
    name: "suleman",
    age: 30,
    education: "FA",
    married: false,
    skin: "brown"

},
{
    name: "ahmad",
    age: 25,
    education: "BA",
    married: true,
    skin: "brown"

}
    ,
{
    name: "khalid",
    age: 24,
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


    for (let i = 0; i < myarray.length; i++) {
        //  console.log(myarray[i].name)
        let obj = myarray[i]

        if ((obj.name != "ahmad" || (obj.married == true && obj.skin != "black")) || (education == "FA" && age > 24)) {
            console.log(obj.name)
        }
    }


    let mygrades = 80

    switch (mygrades) {
        case (mygrades > 50):
            console.log("you can get addmisssion in Islamic uni")
        case (mygrades > 60):
            console.log("you can get addmisssion in punjab uni")
        case (mygrades > 70):
            console.log("you can get addmisssion in Fast")
        case (mygrades > 80):
            console.log("you can get addmisssion Nust ")
            break;
        default: console.log("hello")
            break;



    }