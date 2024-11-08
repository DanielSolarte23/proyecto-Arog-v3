import React from "react";
import Imagen from "./MapaAdministradorComponet";
import Estado from './EstadoAdministradorcomponent';
import Titulo from "./TituloAdministradorcomponent";
import Parrafo from "./ParrafoAdministradorcomponent";

const Comp = () => {
    return (
        <div className="border border-black rounded-2xl  ">
            <Imagen />
            <Estado />
            <Titulo />
            <Parrafo />
        </div>
    )
}

export default Comp