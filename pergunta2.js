// Dada a seguinte arvore binária de palavras, faça uma função que busque nessa arvore pela palavra-chave. 
// O output da sua função deve ser o caminho até chegar no item procurado. 
// Por exemplo, se o input de buscar for “goiaba” o output deve ser uma string “Maça -> morango -> Goiaba”


function caminho(arvore, fruta) {
    if (!arvore) return null;
    if (arvore.fruta === fruta) return arvore.fruta;
    
    let esquerda = caminho(arvore.esquerda, fruta);
    if (esquerda) return arvore.fruta + " -> " + esquerda;
    
    let direita = caminho(arvore.direita, fruta);
    if (direita) return arvore.fruta + " -> " + direita;
    
    return null;
}

// arvore 
let Tree = {
    fruta: 'Maçã',
    esquerda: {
        fruta: 'Morango',
        esquerda: {
            fruta: 'Goiaba',
        },
        direita: {
            fruta: 'Limão',
        },
    },
    direita: {
        fruta: 'Pera',
        esquerda: {
            fruta: 'Abacaxi',
            esquerda: {
                fruta: 'Laranja',
                esquerda: {
                    fruta: 'Banana',
                },
                direita: {
                    fruta: 'Cebola',
                },
            },
        },
    },
};



// testando 
console.log(caminho(Tree, 'Goiaba')); 
console.log(caminho(Tree, 'Morango')); 
console.log(caminho(Tree, 'Banana')); 
console.log(caminho(Tree, 'Abacaxi')); 
console.log(caminho(Tree, 'Pera'));   
console.log(caminho(Tree, 'Maçã'));   
console.log(caminho(Tree, 'Laranja')); 
console.log(caminho(Tree, 'Cebola'));
console.log(caminho(Tree, 'Limão')); 
console.log(caminho(Tree, 'Melancia')); // null
