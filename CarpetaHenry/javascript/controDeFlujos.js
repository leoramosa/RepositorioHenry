function viajar(destino){
    if (destino === 'Brasil'){
        console.log('gire a la izquierda');
    } else if (destino === 'Argentina'){
        console.log('gire a Derecha');
    } else {
        console.log('me perdi')
    }
}

viajar('Perú')

function puedeManejar(edad){
    if (edad >= 18){
        console.log(true);
    } else {
        console.log(false);
    }
}

puedeManejar(14)