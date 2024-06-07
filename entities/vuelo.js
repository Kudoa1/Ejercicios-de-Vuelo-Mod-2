export class Vuelo{
    tripulacion=[];
    pasajeros=[];
    avion;
    fechaHoraPartida;
    AeropuertoPartida;
    AeropuertoSalida;
    AeropuertoDestino;

    //ya que tiene una colección de pasajeros, solamente esta clase los deberia manipular
    agregarPasajero(pasajero){
        this.pasajeros.push(pasajero);
    }

    capacidadOcupadaPorPasajeros(){
        //porcentaje (regla de tres)
        return (this.pasajeros.length*100) /this.avion.cantAsientos;
    }
}