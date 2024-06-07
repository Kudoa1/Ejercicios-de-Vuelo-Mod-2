export class Aeropuerto{
    nombre;
    vuelos=[];
    escalas=[];

    agregarEscalas(escala){
        this.escalas.push(escala);
    }

    agregarVuelo(vuelo){
        this.vuelos.push(vuelo);
    }

    //nos quedamos con los vuelos que partieron/llegaron de este aeropuerto (filtrando y usando el metedo de vuelo)
    vuelosQuePartieronDeMi(){
        return this.vuelos.filter((v)=> v.partisteDe(this))
    }
    vuelosQueLlegaronHastaAqui(){
        return this.vuelos.filter((v)=> v.llegasteA(this))
    }

    vuelosQueLlegaronHastaAquiElDia(dia){
        return this.vuelosQueLlegaronHastaAqui().filter(v=>v.llegasteEnFecha(dia))
    }

    cantVuelosQuePartieron(fecha){
        let cant=0;
        //usamos los filtrados que partieron de mi, y los filtramos de nuevo pero para la FECHA dada.
        const vuelosDeLaFecha = this.vuelosQuePartieronDeMi().filter(v=> v.salisteEnFecha(fecha));
        cant=vuelosDeLaFecha.length;
        return cant;
    }

    cantVuelosQueLlegaron(fecha){
        //lo mismo que arriba, pero en 1 sola linea y para los que llegaron.
        return this.vuelosQueLlegaronHastaAquiElDia(fecha).length;
    }

    
    cantEscalas(){
        return this.escalas.length;
    }
}