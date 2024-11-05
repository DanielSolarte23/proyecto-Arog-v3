import React from "react";
import Imagen from "./MapaAdministradorComponet";
import Estado from './EstadoAdministradorcomponent';
import Titulo from "./TituloAdministradorcomponent";
import Parrafo from "./ParrafoAdministradorcomponent";

const Comp = () => {
    return (
        <div className="  container flex-col mx-auto mt-9 border border-black rounded-3xl">
            <Imagen />
            <Estado />
            <Titulo />
            <Parrafo />
        </div>
    )
}

export default Comp