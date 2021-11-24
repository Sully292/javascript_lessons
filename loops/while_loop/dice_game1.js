let loading = true

while (loading) {
    let dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (dice == 6) {
        console.log("chika aa gya")
    }
    else {
        console.log(dice)
    }
}

