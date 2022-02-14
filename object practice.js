let person = [{
    name: "mushtaq",
    age: 31, colour: "red",
    kad: 6.3,
    school: "Government",
    dob: "050791",
    marks: 21 / 25

},
{
    name: "jamil",
    age: 45, colour: "blue",
    kad: 6.9,
    school: "private",
    dob: "210885",
    marks: 23 / 25
},
{
    name: "bilal",
    age: 65, colour: "green",
    kad: 7,
    school: "bahria",
    dob: "150589",
    marks: 18 / 25

}
]
// console.log(person.kad)
for (let i = 0; i < person.length; i++) {
    // console.log(person[i].age)
    if (person[i].name == "jamil") { ////how to acess indvidual property and add into property 
        console.log(person[i].name + " khan")
    }
}
    // person[i].name = person[i].name + 5
    // person[i].age = person[i].age * 2
    // console.log(person[i].age)
    // console.log(person[i].name)






// if (person.marks == 23 / 25 || person.name != "bilal" && person.age < 44) {
//     console.log(person.name, "yeh banda hai")

// }
// else { console.log("aisa koi banda nai") }