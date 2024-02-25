var devuelveUsuario = function (){
    return 'leonardo';
};

var devuelveSaludo = function(){
    return 'Hola';
};

var saludar = function (call1, call2) {
    return call1() + ' ' + call2();
};

var resultado = saludar(devuelveSaludo, devuelveUsuario);
console.log(resultado)

//segundo ejemplo

var devuelvoFrase = function(comida){
    return 'Hoy quiero comer: ' + comida;
}

var hablar = function (cmid, cb){
    return cb(cmid)
}

var fraseFinal = hablar('Pizza', devuelvoFrase);
console.log(fraseFinal)
