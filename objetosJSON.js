const fs = require('fs')
const {argv} = require('yargs')
const {agregarVehiculos, modificarVehiculos, eliminarVehiculo,consultarVehiculo} = require('./funciones/acciones') 
var vehiculos = JSON.parse( fs.readFileSync('data.json') )

const accion = argv.accion
const datos = {'marca':argv.marca,'color':argv.color,'year':argv.year}
const busqueda = argv.busqueda
/*
let [,,parametro1,parametro2] = process.argv
const accion = parametro1.split('=')[1]
const datos = parametro2.split('=')[1].split(',')
console.log(datos)
//Recorrer un arreglo de la forma tradicional
/*for(let i=0;i<5;i++){
    console.log(`Vehiculo numero ${i+1}:${vehiculos[i].marca}`)
}
*/
switch(accion){
    case 'insertar':
        agregarVehiculos(datos)
        console.log('Vehculo agregado con exito')
        break;
    case 'modificar':
        modificarVehiculos(busqueda,datos)
        break;
    case 'eliminar':
        eliminarVehiculo(busqueda)
        break;
    case 'mostrar':
        consultarVehiculo()
        break;
    default:
        console.error('Accion no valida')
}

/*
agregarVehiculos({'marca':'Prueba1','color':'verde','year':2000})
modificarVehiculos('Jeep', {'marca':'Prueba2','color':'azul','year':2004})
eliminarVehiculo('Toyota')
*/
//SALVAR ARCHIVO
fs.writeFileSync('data.json',JSON.stringify(vehiculos))
