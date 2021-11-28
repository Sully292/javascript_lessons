// let loading = true

// while (loading) {
//     let dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//     if (dice == 6) {
//         console.log("chika aa gya")
//     }
//     else {
//         console.log(dice)
//     }
// }

function divide(dividend, divisor) {
    for (let i = 1; i <= dividend; i = i + divisor) {
        console.log(i);
    }
}

divide(50, 6);
