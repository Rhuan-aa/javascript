// Retorna uma lista com os "qtde" primeiros números primos, começando em 1.
function primos(qtde) {
    let i;
    let n=2;
    let primos =[];
    if(qtde>=1)
        {primos.push(1);}
    while(primos.length<qtde)
        {
        let primo =true;
        for(i=2; i<=Math.sqrt(n) && primo==true;i++)
            {
            if(n%i===0)
                {
                primo = false;
                }
            }
        if(primo==true)
            {
            primos.push(n);
            }
        n++;     
        }
        return primos; 
}

// Retorna a lista de palavras palíndromas
// Deve ser implementada usando map/filter/reduce
function palindromo(palavras) {
    return palavras.filter(word => {
        const lowerCased = word.toLowerCase();
        const length = lowerCased.length;
        let i=0;
        for(i=0; i < Math.floor(length/2); i++){
            if(lowerCased[i]!== lowerCased[length-1-i]){
                return false;
            }
        }
        return true;
    });
}

// Retorna se dois aviões estão com perigo de colisão.
// Em geral, a margem de segurança entre dois aviões é de 1000 pés.
// Cada pé é igual a 0.3048 metros.
function perigoAcidente(altura_pes_aviao1, altura_met_aviao2) {
  const altura_pes_aviao2=altura_met_aviao2/0.3048;
  if (altura_pes_aviao1 >= altura_pes_aviao2 + 1000 || altura_pes_aviao2 >= altura_pes_aviao1 + 1000){
    return false;
  } else{ 
    return true;
  }
}
// Função que retorna uma lista sem nenhum item duplicado.
function apenasUnicos(lista) {
    let unicos=[];
    let i=0;
    let j=0;
    const tamanho = lista.length;
    for(i=0;i<tamanho;i++){
        let cont=0;
        for(j=0;j<tamanho;j++){
            if(lista[i]===lista[j] && i!=j){
                cont++;
                break;
            }
        }
        if(cont===0){
            unicos.push(lista[i]);
        }
    }
    return unicos;
}

// Retorna a soma dos "qtde" primeiros números pares (zero é um número par!)
function somaNumerosPares(qtde) {
  if(qtde===0){return 0};
  let i=0;
  let soma_par=0
  for(i=0;i<qtde;i++){
    soma_par += i * 2;
  }
  return soma_par;
}

// Recebe uma lista numérica e retorna uma lista cujos valores foram multiplicados por 2.
// Deve ser implementada usando map/filter/reduce
function dobro(valores) {
    const resultado_dobro= valores.map(x => x*2);
    return resultado_dobro;
}

// Recebe duas listas e retorna uma lista com a união das listas de entrada, sem repetições.
function uniao(v1, v2) {
   let lista_uniao=[];
   let i=0;
   for(i=0;i<v1.length;i++){
    if(!lista_uniao.includes(v1[i])){
        lista_uniao.push(v1[i]);
     }
    }
    for(i=0;i<v2.length;i++){
        if(!lista_uniao.includes(v2[i])){
            lista_uniao.push(v2[i]);
        }
    }
   return lista_uniao;
}

// Função que recebe duas listas e retorna os elementos da primeira lista que não estejam na segunda lista.
function diff(v1, v2) {
    let lista_apenas_v1 = []
    let i=0, j=0;
    for(i=0;i<v1.length;i++){
        let duplicado = false;
        for(j=0;j<v2.length;j++){
            if(v1[i]===v2[j]){
                duplicado=true;
                break;
            }
        }
        if(duplicado==false){
            lista_apenas_v1.push(v1[i]);
        }
    }
    return lista_apenas_v1;
}

/*
    Recebe duas listas numéricas e retorna o vetor cuja soma dos valores é maior que a outra lista. Caso ambas as listas tenham mesmo valor, retorna FALSE. Considere vetor vazio com soma zero.
    Deve ser implementada usando map/filter/reduce
*/
function maior(v1, v2) {
   if(v1.length>0 && v2.length>0)
    {
        const soma_v1 = v1.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
        }, 0);
        const soma_v2 = v2.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
        }, 0);
        if(soma_v1>soma_v2){
            return v1;
        } else if(soma_v2>soma_v1){
            return v2;
        } else if(soma_v1==soma_v2){
            return false;
        }
    } else if(v1.length==0 && v2.length!=0){
        return v2;
    } else if(v2.length==0 && v1.length!=0){
        return v1;
    } else return false;
}

/*
    Recebe um valor e uma lista. Retorna a lista sem nenhuma ocorrência do valor de entrada.
    Deve ser implementada usando map/filter/reduce
*/
function removeValores(valor, lista) {
    let lista_sem_valor = lista.filter(elemento => elemento !== valor);
    return lista_sem_valor;
}

/*
    Gera uma lista numérica única de um vetor de entrada que pode conter multiplas sublistas.
*/
function flatten(lista) {
   let lista_unica = lista.reduce((acumulador, item) => { 
   if(Array.isArray(item)){
    return acumulador.concat(flatten(item));
   } else{
    return acumulador.concat(item);
   }
  }, []);
   return lista_unica;
}

module.exports = { primos, palindromo, perigoAcidente, apenasUnicos, somaNumerosPares, dobro, uniao, diff, maior, removeValores, flatten }