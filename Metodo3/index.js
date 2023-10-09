
//Metodo Splice: pode inserir e retirar elementos na posição informada

const troca = ['A', 'B', 'C', 'D'];

troca.splice(1, 0, 2);  //vai inserir 2 na posição 1 e não remove nada
console.log(troca);     // mostra o novo array months: Array ["A", 2, "B", "C", "D"]

troca.splice(4, 1, "Z");  // remove D e no lugar dele vai inserir Z na posição 4
console.log(troca);     // mostra o novo array: Array ["A", 2, "B", "C", 5]

troca.splice(5, 0, 6, 7);  // não remove nada e insere 6 e 7 a partir da posição 5
console.log(troca);     // mostra o novo array: Array ["A", 2, "B", "C", 5, 6,7]