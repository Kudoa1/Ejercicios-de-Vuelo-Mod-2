export class Pasajero{
    nombre;
    apellido;
    vuelos=[];

    agregarVuelo(unVuelo){
        this.vuelos.push(unVuelo);
    }

    cantVuelos(){
        return this.vuelos.length;
    }
}