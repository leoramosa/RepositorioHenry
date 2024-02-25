function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
   return nombre;
}

function otraFuncion() {
    return (
        "el nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsoleLog('camilo')
    );
}

function cuidadoConElReturn(nombre){
    return nombre;
    console.log(nombre);
}