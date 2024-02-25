var atuendos = {manos:['guantes', 'anillos'], pies: ['zapatos', 'soquetes']};
/* console.log(atuendos.manos) */

atuendos['piernas'] = ['bermudas', 'pantalones']
/* console.log(atuendos) */

var comidas = {};
var diferenciasDeNotaciones = function(propUno, propDos){
    comidas.propUno = ["frutas", "vegetales"];
    comidas[propDos] = ["hamburguesas", "paspas fritas"]
};
diferenciasDeNotaciones('saludable', 'nosaludable');
console.log(comidas)

var comidas = {};
var diferenciasDeNotaciones = function(propUno, propDos){
    comidas[propUno] = ["frutas", "vegetales"];
    comidas[propDos] = ["hamburguesas", "paspas fritas"]
};
diferenciasDeNotaciones('saludable', 'nosaludable');
console.log(comidas)