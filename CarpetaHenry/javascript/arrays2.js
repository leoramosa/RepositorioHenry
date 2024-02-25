// agregar y eliminar lista en arreglos
var colores = ['amarillo', 'azul'];

colores.push('rojo') //agregar al final
colores.unshift('verde'); //agregar al inicio
colores.pop(); //eliminar al final
colores.shift(); //eliminar al inicio

console.log(colores);


var pintores = ['picasso', 'velazquez', 'van gogh', 'dali'];
var incluyeDali = pintores.includes('dali') //metodo incluye
console.log(incluyeDali)

var numeros = [19, 6, 8, 9];
var cumpleCondicion = numeros.every((num) => { //every si todos cumple la condicion mayor a 5
    return num > 5;
})

console.log(cumpleCondicion)