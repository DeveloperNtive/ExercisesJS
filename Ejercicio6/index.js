const repeatedString = (s, n) => {
    //init
    var numberLettersA = 0

    //Solucion

    s.split('').forEach(l => {
        if (l == 'a') {
            numberLettersA++
        }
    })
    const stringRepeated = s.repeat(n)
    const subString = stringRepeated.substring(0, n+1)

    console.log(s, n)

    return subString
}

//--------Case 1--------
// const s = 'aba'
// const n = 10

//----25% test cases----
const s = 'aba'
const n = 1000000000000


console.log(repeatedString(s, n))