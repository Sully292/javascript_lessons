function encrypt(text) {
    let a = ""
    // console.log(text.length)
    for (let i = 0; i < text.length; i++) {
        //console.log(text[i], i)
        let asc = text[i].charCodeAt(0) + 4
        let encrypted = String.fromCharCode(asc)
        a = a + encrypted

        // console.log(asc)
    }
    return a

}
let e = encrypt("hello suleman kya hal ha kuch samj ai ha ya nai ai")

console.log("encrypted text is ", e)
let d = decrypt(e)

console.log("you  message was ", d)

function decrypt(text) {
    let a = ""
    // console.log(text.length)
    for (let i = 0; i < text.length; i++) {
        //console.log(text[i], i)
        let asc = text[i].charCodeAt(0) - 4
        let encrypted = String.fromCharCode(asc)
        a = a + encrypted

        // console.log(asc)
    }
    return a

}

