let n = 2;
let t = "oi";

console.log(typeof n);
console.log(typeof t);

let a = [0 , 1, 1, 2, 3, 4, 8, 13, 21];

console.log(typeof a);

let o = {nome: "Neymar", idade: "31"};

console.log(typeof o);

console.log(a);

console.log(a[7]);

a.forEach((el) => 
    console.log(`elementos ${el}`)
);

console.log(o);
console.log(o.nome, "tem", o.idade);
