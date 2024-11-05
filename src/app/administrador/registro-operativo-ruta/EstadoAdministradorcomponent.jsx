import React from "react";
import Perfil from '../../../../public/perfil.jpg'

const Estado = () => {
    return (
        <section className="w-full border-b-2  h-1/4			">
            <h1 className="ml-8 text-gray-400">Estado</h1>
            <div className="flex ml-16 py-2">
                <img className="w-14	h-14 m	" src="/perfl.jpg" />
                <section className="flex-col  items-center	">
                    <h2 className="text-xl 	">Ricardo Erazo </h2>
                    <h3 className="text-xs	">Ricardo </h3>
                    <span className="text-teal-400 text-xs	"> Esperando Tarea </span>
                </section>
            </div>
        </section>
    )
}

export default Estado