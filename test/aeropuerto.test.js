import { Aeropuerto } from "../entities/aeropuerto";
import { Vuelo } from "../entities/vuelo";
import {Escala} from "../entities/escala";
import { RankeadorDeAeropuertos } from "../entities/ranker_aeropuertos";

test("2 vuelos salieron el 2024/06/07 de Buenos Aires", ()=>{
    const aeropuerto=new Aeropuerto();
    const vuelo1=new Vuelo(40);
    const vuelo2=new Vuelo(50);
    
    vuelo1.aeropuertoSalida=aeropuerto;
    vuelo1.fechaHoraPartida= "2024-06-07";
    vuelo2.aeropuertoSalida=aeropuerto;
    vuelo2.fechaHoraPartida= "2024-06-07";
    aeropuerto.agregarVuelo(vuelo1);
    aeropuerto.agregarVuelo(vuelo2);

    const cantObtenida= aeropuerto.cantVuelosQuePartieron("2024-06-07");
    
    expect(cantObtenida).toBe(2)
});

//TODO
 test("1 vuelo llegó el 2024/06/07 a Berlin", ()=>{
     const aeropuerto= new Aeropuerto();
     const vuelo1= new Vuelo(80);

     vuelo1.aeropuertoDestino=aeropuerto;
     vuelo1.fechaHoraLlegada="2024-06-07";
     aeropuerto.agregarVuelo(vuelo1);

     const cantObtenida= aeropuerto.cantVuelosQueLlegaron("2024-06-07");

     expect(cantObtenida).toBe(1);
 });

//4
 test("Le paso 3 aereopuertos y me tiene que devolver el que tiene menos escalas, en este caso Aereopuerto Ciudad de Cordoba", () =>{
    let aeropuerto1 = new Aeropuerto();
    let aeropuerto2 = new Aeropuerto();
    let aeropuerto3 = new Aeropuerto();

    aeropuerto1.nombre = "Aeropuerto Ezeiza";
    aeropuerto2.nombre = "Aeroparque CABA";
    aeropuerto3.nombre = "Aeropuerto Ciudad de Cordoba";

    let escalas1 = new Escala(aeropuerto1,null);
    let escalas2 = new Escala(aeropuerto1,null);
    let escalas3 = new Escala(aeropuerto1,null);
    let escalas4 = new Escala(aeropuerto2,null);
    let escalas5 = new Escala(aeropuerto2,null);
    let escalas6 = new Escala(aeropuerto3,null);


    aeropuerto1.agregarEscalas(escalas1);
    aeropuerto1.agregarEscalas(escalas2);
    aeropuerto1.agregarEscalas(escalas3);
    aeropuerto2.agregarEscalas(escalas4);
    aeropuerto2.agregarEscalas(escalas5);
    aeropuerto3.agregarEscalas(escalas6);

    let rankingAereopuertos = new RankeadorDeAeropuertos();
    let aeropuertoConMenosEscalas = rankingAereopuertos.aeropuertoConMenorCantDeEscalas([aeropuerto1, aeropuerto2, aeropuerto3]).nombre;

    expect(aeropuertoConMenosEscalas).toBe(aeropuerto3.nombre);
});