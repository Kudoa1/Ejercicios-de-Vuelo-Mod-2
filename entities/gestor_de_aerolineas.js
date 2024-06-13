export class GestorDeAerolineas {
    static aerolineaConMasPasajerosEnMes(aerolineas, anio, mes) {
        let aerolineaConMasPasajeros = null;
        let maxPasajeros = 0;

        aerolineas.forEach(aerolinea => {
            const pasajeros = aerolinea.pasajerosEnMes(anio, mes);
            if (pasajeros > maxPasajeros) {
                maxPasajeros = pasajeros;
                aerolineaConMasPasajeros = aerolinea;
            }
        });

        return aerolineaConMasPasajeros;
    }
}
