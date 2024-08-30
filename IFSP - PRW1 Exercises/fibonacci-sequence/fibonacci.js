var N = prompt("Digite quantos numeros de fibonacci deseja: ");

if (N >= 0 ){
    let a = 0;
    let b = 1;
    let c = 0;
    let i = 0;
    console.log("Os numeros da sequência são: ");
    console.log(a);
    console.log(b);
    for (b; i<N; i++) {
        c = b;
        b = b + a;
        a = c;
        console.log(b);
    }
}