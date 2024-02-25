var libro = {autor: 'borges', genero: 'policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad)

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades)

//for in
var mundo = {contienentes: 7, paises:197, oceanos:5};
for (var prop in mundo){
    console.log('esta es la propiedad: ' + prop);
    console.log('este es el valor: ' + mundo[prop])
}

var mascota = {
    animal:'perro',
    raza:'ovejero aleman',
    amistoso:true,
    dueño:'maria lopez',
    info: function(){
        console.log('mi perro es un ' + this.raza);
    }
}

mascota.info();