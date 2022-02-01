//Recorrear arreglo usando la funcion foreach de tipo flecha
function consultarVehiculo(){
    vehiculos.forEach( item => console.log(item) );
}
//Agregar datos al arreglo

function agregarVehiculos(item){
    vehiculos.push(
        //{'marca':'Kia','color':'gris','year':2022}
        item
        )
}

var obtenerIndice=(item)=>vehiculos.findIndex((vehiculo)=>vehiculo.marca===item)

function modificarVehiculos(itemABuscar,itemNuevo){
    indice = obtenerIndice(itemABuscar)
    vehiculos[indice] = itemNuevo
}

function eliminarVehiculo(itemAEliminar){
    indice = obtenerIndice(itemAEliminar)
    vehiculos.splice(indice,1)
}

module.exports = {
    consultarVehiculo,
    modificarVehiculos,
    eliminarVehiculo,
    agregarVehiculos
}