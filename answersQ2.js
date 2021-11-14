///Q2 write a function which takes three numbers as parameters and tell which one 
///is smallests function should not print that a is smallest , it should print the
// exact number like 8 is smallest hint : use your code "a,b,c which one is smaller.js" 
/// hint : to call your function you will do myfunc(55,85,8)

function findsmallest(x,y,z){
if (x < y && x < z){
    console.log("smallest number is",x)
}

else if(y < x && y < z){
    console.log("smallest number is" ,y)

}
else if(z < x && z < y){
    console.log("smallest number is" ,z)
}
findsmallest(10,40,20)}