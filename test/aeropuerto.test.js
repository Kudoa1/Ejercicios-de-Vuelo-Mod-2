import { Aeropuerto } from "../entities/aeropuerto";
import { Vuelo } from "../entities/vuelo";

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
// test("1 vuelo llegó el 2024/06/07 a Berlin", ()=>{
//     const aeropuerto= new Aeropuerto();
//     const vuelo1= new Vuelo(80);

//     vuelo1.aeropuertoDestino=aeropuerto;
//     vuelo1.fechaHoraLlegada="2024-06-07";
//     aeropuerto.agregarVuelo(vuelo1);

//     const cantObtenida= aeropuerto.cantVuelosQueLlegaron("2024-06-07");

//     expect(cantObtenida).toBe(1);
// });