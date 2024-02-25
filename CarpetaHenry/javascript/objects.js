var deportes = {
    conBalon: ['Football', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

var persona = { nombre:'lucas', edad: 35, estudios:{esProgramador: true}};

/* console.log(persona.edad); */
persona.nombre ='martin';
console.log(persona.nombre);
persona.edad = 18;
console.log(persona.edad)

var autos = {};
autos.marcas = ['ford', 'audi', 'ferrari']; //agregar arreglos dentro de una propiedad
delete autos.marcas; //eliminar arreglos
console.log(autos);

//dentro de la propiedad de un objeto podemos guardar una funcion

var misFunciones = {
    saludar: function () {
        console.log('hola')
    },
};
misFunciones.saludar();