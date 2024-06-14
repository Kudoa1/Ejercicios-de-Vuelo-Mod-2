import { RankerDeCiudades } from "../entities/ranker_ciudades";
import { Ciudad} from "../entities/ciudad";
import {Vuelo} from "../entities/vuelo";
import { Aeropuerto } from "../entities/aeropuerto";
import {Pasajero} from "../entities/pasajero";

//7
test("Ingreso ciudades y debe devolver la que tiene mas pasajeros, en este caso CABA", ()=>{
    let ciudad1 = new Ciudad("CABA");
    let ciudad2 = new Ciudad("Ciudad de Cordoba");

    let pasajero1 = new Pasajero();
    let pasajero2 = new Pasajero();
    let pasajero3 = new Pasajero();
    let pasajero4 = new Pasajero();

    let vuelo1 = new Vuelo(null);
    let vuelo2 = new Vuelo(null);

    vuelo1.llegasteEnFecha("14/06/2024");
    vuelo1.llegasteEnFecha("14/06/2024");
    
    vuelo1.agregarPasajero(pasajero1);
    vuelo1.agregarPasajero(pasajero2);
    vuelo1.agregarPasajero(pasajero3);
    vuelo2.agregarPasajero(pasajero4);

    let aeropuerto1 = new Aeropuerto();
    let aeropuerto2 = new Aeropuerto();

    aeropuerto1.agregarVuelo(vuelo1);
    aeropuerto2.agregarVuelo(vuelo2);

    ciudad1.agregarAeropuerto(aeropuerto1);
    ciudad2.agregarAeropuerto(aeropuerto2);
    let ciudadConMasPasajeros = new RankerDeCiudades();
    expect(ciudadConMasPasajeros.ciudadQueMasPasajerosRecibioEl("14/06/2024",[ciudad1, ciudad2]).nombre).toBe("CABA");
});