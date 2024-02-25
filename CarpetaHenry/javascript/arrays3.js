//split and join

var palabra = 'Henri';
var palabraSeparada = palabra.split(''); //separar una palabra
palabraSeparada.pop();
palabraSeparada.push('y');
/* console.log(palabraSeparada) */
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada)


//forEach and Map

var numeros = [1, 2, 3, 4];
/* numeros.forEach((num) => console.log(num)); */

numeros.forEach((num)=> {
    if (num === 3){
        console.log(num);
    }
})

//cambios en el arreglo, sumar +1
var masUno = numeros.map((num) => {
    return num + 1;
})
console.log(masUno)
