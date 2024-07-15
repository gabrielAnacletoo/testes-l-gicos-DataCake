// Dado o array [9, 2, 3, 1, 4] encontre todos os números que estão faltando para completar o intervalo 0 a n, 
// onde n é o maior número dentro do array. Adicione os números faltando dentro do array. 

let arr = [9, 2, 3, 1, 4];

function encontrarNumeros(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let diferenca = max - min;
    for (let i = 0; i <= diferenca; i++) {
        if (!arr.includes(i + min)) {
            arr.push(i + min);
        }
    }
    return arr;
}


// teste
console.log(encontrarNumeros(arr))