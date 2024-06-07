export class Vuelo{
    tripulacion=[];
    pasajeros=[];
    avion;
    fechaHoraPartida;
    fechaHoraLlegada;
    AeropuertoSalida;
    AeropuertoDestino;
    duracionAproxEnMins;

    //ya que tiene una colección de pasajeros, solamente esta clase los deberia manipular
    agregarPasajero(pasajero){
        this.pasajeros.push(pasajero);
    }

    capacidadOcupadaPorPasajeros(){
        //porcentaje (regla de tres)
        return (this.pasajeros.length*100) /this.avion.cantAsientos;
    }

    partisteDe(unAeropuerto){
        return this.AeropuertoSalida==unAeropuerto;
    }
    llegasteDe(unAeropuerto){
        return this.AeropuertoLlegada==unAeropuerto;
    }

    salisteEnFecha(fecha){
        return this.fechaHoraPartida == fecha;
    }
    llegasteEnFecha(fecha){
        return this.fechaHoraLlegada == fecha;
    }
}