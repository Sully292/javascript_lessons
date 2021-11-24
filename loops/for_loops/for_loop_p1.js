//1. Write  program to find those numbers which are
// divisible by 7 and multiple of 5, between 1500 and 2700 (both included)

for (let i = 1500; i <= 2700; i = i + 1){
if (i % 5 == 0 && i % 7 == 0 ){
    console.log(i,"number divisible hai")
}
/// else ki zururat nai hai 
else{ console.log("not divisible")  }
}
