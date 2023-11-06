//? Ejercicio 1: Contar la can*dad de palabras en un texto
// Implementa la función 'contarPalabras' que reciba un texto y devuelva la can*dad de
// palabras que con*ene.
// Considera que las palabras están separadas por espacios y puede haber signos de
// puntuación.
    // func*on contarPalabras(texto) {
    // Tu código aquí
    // }

cadena = '    Aquí  hay solamente  siete palabras , nada más !!     '


// function contarPalabras(texto){

//     contador=0
//     for (i=0; i<texto.length; i++){
//         if(texto[i]==' '){
//             contador++
//         }
//     }

//     return contador+1
// }


function contarPalabras(texto){

    let listaPalabras = texto.split(' ') //dividir el texto por cada espacio que encuentre
    let contador=0 //contador de palabras
    let signos = /[!¡@#$¿?~;,.]/ //  algunos signos para NO contarlos

    for(i=0; i< listaPalabras.length;i++){
        if(listaPalabras[i]!=""){  //por si hay alguna palabra en blanco 
            if(!signos.test(listaPalabras[i])){ // test() devulve true si encuentra alguno de esos signos
                contador++
            }
            
            
        }
    }

    return contador
}


//probar funcion
console.log('El texto dado contiene ',contarPalabras(cadena), ' palabras. ')