// Dado o array de números inteiros [1, 15, 2, 7, 2, 5, 7, 1, 4] crie uma função que recebe um argumento X e retorne true ou false 
// caso haja no array uma combinação de soma entre dois números que resulte no input X. Exemplo: Se X=2, 
// a função deve retornar true pois existem dois números 1 dentro do array 1+1 = 2. 
// Caso X=1231 a função deve retornar false pois não existe uma combina de dois números capazes de somar 1231.


function encontrarSoma(numeros, X) {
    for (let i = 0; i < numeros.length; i++) { // Loop para percorrer todos os indices
        for (let j = i + 1; j < numeros.length; j++) { // Loop para percorrer os indices posteriores 
            if (numeros[i] + numeros[j] === X) { // Verifica se a soma dos dois indices e igual ao input
                return true;
            }
        }
    }
    return false;
}


// testes 
console.log(encontrarSoma([1, 15, 2, 7, 2, 5, 7, 1, 4], 2));
console.log(encontrarSoma([1, 15, 2, 7, 2, 5, 7, 1, 4], 1231));
console.log(encontrarSoma([1, 15, 2, 7, 2, 5, 7, 1, 4], 22)); 
console.log(encontrarSoma([1, 15, 2, 7, 2, 5, 7, 1, 4], 9)); 
console.log(encontrarSoma([1, 15, 2, 7, 2, 5, 7, 1, 4], 30)); 
