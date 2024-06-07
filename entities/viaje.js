export class Viaje{
    vuelos=[];
    escalas=[];

    agregarVuelo(vuelo){
        this.vuelos.push(vuelo);
    }
    agregarEscala(escala){
        this.escalas.push(escala);
    }

    duracionTotalVuelos(){
        let duracion=0;
        for(let i=0;i<this.vuelos.length;i++){duracion+=this.vuelos[i].duracionAproxEnMins};
        return duracion;
    }
    duracionTotalEscalas(){
        let duracion=0;
        //lo mismo que hacer un FOR
        this.escalas.forEach(escala => {duracion+=escala.duracionAproxEnMins});
        return duracion;
    }
    duracionTotalAproxEnMins(){
        return this.duracionTotalVuelos() + this.duracionTotalEscalas()
    }
}