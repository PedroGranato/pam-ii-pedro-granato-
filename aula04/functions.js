const  TestImparpar = (n) => {
    let calcTest = n % 2 

    return calcTest == 1 ? "Número impar" : "Número par"
}
console.log(TestImparpar(17))
console.log(TestImparpar(64)) 
console.log(TestImparpar(1500))
