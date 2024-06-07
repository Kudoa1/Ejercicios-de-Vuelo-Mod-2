export class Ciudad{
    nombre;
    aeropuertos=[];

    constructor(nombre){
        this.nombre=nombre;
    }

    agregarAeropuerto(aeropuerto){
        this.aeropuertos.push(aeropuerto);
    }

    cantAeropuertos(){
        return this.aeropuertos.lenght;
    }
}