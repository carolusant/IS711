//? Ejercicio 2: 
//   !Calcular el promedio de notas
// Implementa la función 'calcularPromedioNotas' que reciba un arreglo de objetos que
// representan estudiantes.
// Cada estudiante tiene una propiedad 'nombre' (string) y 'notas' (arreglo de números).
// La función debe devolver un nuevo objeto que contenga el nombre del estudiante y el
// promedio de sus notas.
//        ! EJEMPLO:
//         const estudiantes = [
                                // {nombre: "Juan",notas: [98, 96, 87, 88],},
                                // {nombre: "María",notas: [94, 95, 86, 87]}];
//     todo    Valor de Retorno
//     todo    [{nombre: "Juan", promedio: 92.25},{nombre: "María", promedio: 90.5}]
//         
//  todo     funcion calcularPromedioNotas(estudiantes) {
//              Tu código aquí
//  todo        }

const estudiantess = [{nombre: "Carlos", notas:[98,96,87,88]},
                     {nombre:"Antonio", notas:[94,95,86,87]},
                     {nombre:"Milton", notas:[65,68,77,70]},
                     {nombre:"Danilo", notas:[61,73,77,47]},
                     {nombre:"Jose", notas:[98,97,99,93]}
                    ]

function calcularPromedioNotas(estudiantes){
    promedios=[] 

    for(i=0;i<estudiantes.length;i++){ //recorrer cada estudiante
        //console.log(estudiantes[i])
        promedio=0
        notas=0
        for(j=0;j<estudiantes[i].notas.length;j++){ //recorrer las notas de cada estuadiante
           //console.log(estudiantes[i].notas[j])
           notas+=estudiantes[i].notas[j] //sumatoria de notas de cada estudiante
        }
        promedio=notas/estudiantes[i].notas.length //sacar promedio
        promedios.push({nombre:estudiantes[i].nombre, promedio:promedio}) // anadir registros 
    }

    return promedios
}


console.log(calcularPromedioNotas(estudiantess))