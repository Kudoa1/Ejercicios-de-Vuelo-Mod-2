import { Viaje } from "../entities/viaje";
import { Vuelo } from "../entities/vuelo";
import { Escala } from "../entities/escala";
import exp from "constants";

test("duracion del viaje me de 120 minutos",()=>{
    const unViaje= new Viaje();
    const Escala1= new Escala();
    const vuelo1= new Vuelo();
    const vuelo2= new Vuelo();

    vuelo1.duracionAproxEnMins=60;
    vuelo2.duracionAproxEnMins=20;
    Escala1.duracionAproxEnMins=40;
    
    unViaje.agregarEscala(Escala1);
    unViaje.agregarVuelo(vuelo1);
    unViaje.agregarVuelo(vuelo2);

    let duracionObtenida=unViaje.duracionTotalAproxEnMins();
    let duracionEsperada=120;

    expect(duracionObtenida).toBe(duracionEsperada);
})