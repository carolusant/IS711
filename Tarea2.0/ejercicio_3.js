//? Ejercicio 3: Encontrar duplicados
//* Implementa la función 'encontrarDuplicados' que reciba un arreglo de números y
//* devuelva un nuevo arreglo con los números que se repiten en el arreglo original.
// todo        function encontrarDuplicados(numeros) {
// todo            Tu código aquí
//  todo       }

// numeros=[1,2,3,4,5,6,7,8,9,1,2,3]

numeros=[18,16,15,23,15,17,8,18,8,6,17,25,13,6,25,18,19,1,3,12,22,21,9,12,17,23,15,25,24,16]

function encontrarDuplicados(numeros) {
    repetidos =[] //array a retornar

    for(i=0;i<numeros.length;i++){
        apariciones=0 //contar apariciones de cada numero en el array
        for(j=0;j<numeros.length;j++){
            if(numeros[i]==numeros[j]){apariciones++} //contar
        }

        if(apariciones>1 && !repetidos.includes(numeros[i])){ // si hay mas de una aparicion y la si palabra NO esta en repetido
                repetidos.push(numeros[i]) //agregar a repetidos
            }
    }

    return repetidos
}





console.log('Lista de numeros: ', numeros)
console.log('Los numeros repetidos son: ', encontrarDuplicados(numeros))