import { Ciudad } from "../entities/ciudad";
import {Aeropuerto} from "../entities/aeropuerto";

///TO DO
//6. La cantidad de aeropuertos que tiene una ciudad.
test("La cantidad de aeropuertos que tiene una ciudad debería ser 3", () => {
    // Crear una ciudad
    const ciudad = new Ciudad();

    // Crear aeropuertos
    const aeropuerto1 = new Aeropuerto();
    const aeropuerto2 = new Aeropuerto();
    const aeropuerto3 = new Aeropuerto();

    // Agregar aeropuertos a la ciudad
    ciudad.agregarAeropuerto(aeropuerto1);
    ciudad.agregarAeropuerto(aeropuerto2);
    ciudad.agregarAeropuerto(aeropuerto3);

    // Verificar la cantidad de aeropuertos
    const cantidadAeropuertos = ciudad.cantAeropuertos();
    expect(cantidadAeropuertos).toBe(3);
});
