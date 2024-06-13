export class Aerolinea{
    vuelos=[];
    nombre="";

    constructor(nombre) {
        this.nombre = nombre;
        this.vuelos = [];
    }

    agregarVuelo(vuelo) {
        this.vuelos.push(vuelo);
    }

    vuelosEnMes(anio, mes) {
        return this.vuelos.filter(vuelo => {
            const fecha = new Date(vuelo.fechaHoraPartida);
            return fecha.getFullYear() === anio && fecha.getMonth() + 1 === mes;
        });
    }

    pasajerosEnMes(anio, mes) {
        return this.vuelosEnMes(anio, mes).reduce((total, vuelo) => total + vuelo.cantPasajeros(), 0);
    }

}