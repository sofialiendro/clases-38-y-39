const arrayNumeros = [0, 3, -5, -9, -2, 2, 5, 4, 8, -6]

let contador = 0

// Dado un array, informar cuando un numero es positivo

for (let numero of arrayNumeros) {  // el for se va a repetir 10 veces por cada numero del array
    if (numero >= 0) {
        contador++
    }
    console.log(contador)
}


// Dado un array, hacer una funcion que retorne true si al menos uno de ellos es negativo
// o false si ninguno de ellos lo es


const arrayDeNumeros = [3, 2, 4, 8, 6]


const hayNumeroNegativo = (array) => {
    for (let numero of array) {
        console.log("estamos en", numero)
        if (numero <= 0) {
            return true
        }
    }

    // solo se ejecuta el codigo de aca abajo si no hay ningun numero negativo
    // debo retornar false si no hay ningun numero negativo
    return false
}

console.log(hayNumeroNegativo(arrayNumeros))

// Ejemplo de como FOR simplifica:

const nombres = ["nombre1" , "nombre2", "nombre3"]

console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])

//esos console log x cada nombre es igual q hacer:

for (let nombre of nombres) {
    console.log(nombres)
}

// identificar datos en forma de grilla 

const arrayBidimensional = [
    ["nombre1" , "nombre2", "nombre3"]
    ["edad1" , "edad2", "edad3"]
]

const edad2 = arrayBidimensional[1][1] // es la posicion: fila y columna


// Asignar valores en un array

const arrayVacio = []

const nombres = ["nombre1" , "nombre2", "nombre3"]

console.log(arrayVacio)

arrayVacio[0] = "Ahora no esta vacio"

console.log(arrayVacio)

arrayVacio[1] = "otro elemento en el array vacio"

arrayVacio[2] = "tercer elemento en el array vacio"

console.log(arrayVacio)

arrayVacio[4] = "cuarto elemento en el array vacio"

console.log(arrayVacio) // va a mostrar el lugar 3 como empty, tendria 4 elementos y 5 espacios

nombres[1] = "nombreCambiado" // esto va a reemplazar nombre2 por nombreCambiado

console.log(nombres)

// Para agregar elementos al final del array

nombres[nombres.length] = "nombreAgregado"  // es lo mismo q poner nombres[4] = "nombreAgregado"

console.log(nombres)

// Metodos de array

nombreDelArray.push("lo que quiera agregar al array") // siempre se agrega al final

// ej: 
nombres.push("nombreAgregadoConMetodo")

console.log(nombres)



// Dos versiones de FOR, q son equivalentes

// FOR

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
    
}

// FOR OF

for (let nombre of nombres) {
    console.log(nombres)
}

