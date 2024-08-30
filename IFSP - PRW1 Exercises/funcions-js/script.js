// Retorna uma lista com os "qtde" primeiros números primos, começando em 1.
function primos(qtde) {
    let i, number = 2, primos = [];

    while (primos.length < qtde) {
        let primo = true;
        for (i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            primos.push(number);
        }
        number++;
    }
    return primos;
}

// Retorna a lista de palavras palíndromas
// Deve ser implementada usando map/filter/reduce
function palindromo(palavras) {
    return palavras
        .map(word => word.toLowerCase())
        .filter(word => {
            const reversedWord = word.split('').reverse().join('');
            return word === reversedWord;
        });
}

// Retorna se dois aviões estão com perigo de colisão.
// Em geral, a margem de segurança entre dois aviões é de 1000 pés.
// Cada pé é igual a 0.3048 metros.
function perigoAcidente(altura_pes_aviao1, altura_pes_aviao2) {
    const margem_de_segurança = 1000; // em pés
    const diferenca = Math.abs(altura_pes_aviao1 - altura_pes_aviao2);
    return diferenca <= margem_de_segurança;
}

// Função que retorna uma lista sem nenhum item duplicado.
function apenasUnicos(lista) {
    let unicos=[];
    const tamanho = lista.length;
    
    for (i = 0; i < tamanho; i++){
        let count = 0;
        for (j = 0; j < tamanho; j++){
            count++;
            break;}
        if (count === 0){
            unicos.push(lista[i]);
        } 
    }
    return unicos;
}

// Retorna a soma dos "qtde" primeiros números pares (zero é um número par!)
function somaNumerosPares(qtde) {
    let pares = [];
    for (let i = 0; pares.length < qtde; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    return pares.reduce((acc, num) => acc + num, 0);
}

// Recebe uma lista numérica e retorna uma lista cujos valores foram multiplicados por 2.
// Deve ser implementada usando map/filter/reduce
function dobro(valores) {
    return valores.map(x => x * 2);
}

// Recebe duas listas e retorna uma lista com a união das listas de entrada, sem repetições.
function uniao(v1, v2) {
    let v3 = [];
    
    for (let i = 0; i < v1.length; i++) {
        if (!v3.includes(v1[i])) {
            v3.push(v1[i]);
        }
    }
    
    for (let j = 0; j < v2.length; j++) {
        if (!v3.includes(v2[j])) {
            v3.push(v2[j]);
        }
    }
    
    return v3;
}

// Função que recebe duas listas e retorna os elementos da primeira lista que não estejam na segunda lista.
function diff(v1, v2) {
    return v1.filter(item => !v2.includes(item));
}

/*
    Recebe duas listas numéricas e retorna o vetor cuja soma dos valores é maior que a outra lista. Caso ambas as listas tenham mesmo valor, retorna FALSE. Considere vetor vazio com soma zero.
    Deve ser implementada usando map/filter/reduce
*/
function maior(v1, v2) {
    const somaV1 = v1.reduce((acc, num) => acc + num, 0);
    const somaV2 = v2.reduce((acc, num) => acc + num, 0);
    if (somaV1 > somaV2) return v1;
    if (somaV2 > somaV1) return v2;
    return false;
}

/*
    Recebe um valor e uma lista. Retorna a lista sem nenhuma ocorrência do valor de entrada.
    Deve ser implementada usando map/filter/reduce
*/
function removeValores(valor, lista) {
    return lista.filter(number => number !== valor);
}