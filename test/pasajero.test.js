import { Pasajero} from "../entities/pasajero";
import { Vuelo} from "../entities/vuelo";
import { Aeropuerto } from "../entities/aeropuerto.js";
import { Ciudad } from "../entities/ciudad";

//5
test("Le paso un pasajero con 3 vuelos y me tiene que devolver 3", ()=>{
    let pasajero = new Pasajero();
    
    let vuelo1 = new Vuelo(null);
    let vuelo2 = new Vuelo(null);
    let vuelo3 = new Vuelo(null);

    pasajero.agregarVuelo(vuelo1); 
    pasajero.agregarVuelo(vuelo2); 
    pasajero.agregarVuelo(vuelo3);

    expect(pasajero.cantVuelos()).toBe(3);
}); 

//8
 test("Ingreso un pasajero, dos vuelos, una ciudad y me tiene que decir que la visito 2 veces", () =>{
     let aeropuerto = new Aeropuerto();

     let vuelo1 = new Vuelo(null);
     let vuelo2 = new Vuelo(null);

     vuelo1.aeropuertoSalida = aeropuerto;
     vuelo2.aeropuertoSalida = aeropuerto;

     let ciudad = new Ciudad(null);
     ciudad.agregarAeropuerto(aeropuerto);

     let pasajero = new Pasajero();

     pasajero.agregarVuelo(vuelo1);
     pasajero.agregarVuelo(vuelo2);

     expect(pasajero.cantVecesQueVisitaste(ciudad)).toBe(2);
 });