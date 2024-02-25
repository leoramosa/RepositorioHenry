/* var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
} */

function encontrarLetraP(string){
    var letras = string.split('');

    for (let i = 0; i < letras.length; i++){
        if (letras[i] === 'p'){
            console.log('si contiene la letra p');
            
        } 
    }
}

encontrarLetraP('javascript');
encontrarLetraP('Henry');


var arr = [];
while (arr.length <5){
    arr.push('boolom')
}
console.log(arr);


//bucle infinito

/* var arr = [];
var n = 1
while (n < 3){
    arr.push(Math.random());
} */