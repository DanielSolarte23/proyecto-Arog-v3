"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BarraLateral() {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 768); // Inicializa según el ancho de la ventana
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleToggle = () => {
        if (window.innerWidth < 768) {
            setIsOpen(prev => !prev);
        }
    };

    const toggleSubMenu = () => {
        setIsSubMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true); // Abrir la barra lateral en pantallas grandes
            } else {
                setIsOpen(false); // Cerrar en pantallas pequeñas
            }
        };

        // Llama a handleResize al cargar el componente para configurar el estado inicial
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize); // Limpiar el listener
    }, []);

    return (
        <>
            <div
                className={`sidebar shadow-xl h-full scrollbar bottom-0 xl:left-0 p-2 bg-white transition-all duration-700 ${isOpen ? "w-5/6" : "w-20"} md:w-1/5 overflow-y-auto text-center`}
            >
                <div className={`flex items-center justify-end mr-1`}>
                    <button
                        className="md:hidden py-2 px-4 bg-gray-300 rounded-lg font-bold"
                        onClick={handleToggle}
                    >
                        {isOpen ? <i className="fa-solid fa-chevron-left"></i> : <i className="fa-solid fa-chevron-right"></i>}
                    </button>
                </div>
                <hr className="my-2 text-gray-900" />

                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-100 text-gray-900">
                    <i className="fa-solid fa-magnifying-glass text-base"></i>
                    <input
                        type="text"
                        placeholder={isOpen ? "Buscar" : ""}
                        className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                    />
                </div>

                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 whitespace-nowrap">
                    <Link href="/administrador/rutas" className="flex whitespace-nowrap items-center">
                        <i className="fa-solid fa-route text-lg sm:text-xl"></i>
                        <span className={`md:text-[15px] ml-2 text-gray-900 ${isOpen ? "block" : "hidden"}`}>
                            Gestión de rutas
                        </span>
                    </Link>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 whitespace-nowrap">
                    <Link href="" className="flex whitespace-nowrap items-center">
                        <i className="fa-solid fa-list-check text-lg sm:text-xl "></i>
                        <span className={`md:text-[15px] ml-2 text-gray-900 ${isOpen ? "block" : "hidden"}`}>
                            Asignación de tareas
                        </span>
                    </Link>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 whitespace-nowrap">
                    <Link href="" className="flex whitespace-nowrap items-center">
                        <i className="fa-solid fa-user text-lg sm:text-xl "></i>
                        <span className={`md:text-[15px] ml-2 text-gray-900 ${isOpen ? "block" : "hidden"}`}>
                            Gestión de usuarios
                        </span>
                    </Link>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 whitespace-nowrap">
                    <Link href="" className="flex whitespace-nowrap items-center">
                        <i className="fa-solid fa-sack-dollar text-lg sm:text-xl "></i>
                        <span className={`md:text-[15px] ml-2 text-gray-900 ${isOpen ? "block" : "hidden"}`}>
                            Pagos
                        </span>
                    </Link>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 whitespace-nowrap">
                    <Link href="" className="flex whitespace-nowrap items-center">
                        <i className="fa-solid fa-circle-exclamation text-lg sm:text-xl"></i>
                        <span className={`md:text-[15px] ml-2 text-gray-900 ${isOpen ? "block" : "hidden"}`}>
                            Registro incidencias
                        </span>
                    </Link>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 whitespace-nowrap">
                    <Link href="" className="flex whitespace-nowrap items-center">
                        <i className="fa-solid fa-clock text-lg sm:text-xl"></i>
                        <span className={`md:text-[15px] ml-2 text-gray-900 ${isOpen ? "block" : "hidden"}`}>
                            Historial de Registro
                        </span>
                    </Link>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 whitespace-nowrap">
                    <Link href="" className="flex whitespace-nowrap items-center">
                        <i className="fa-solid fa-image text-lg sm:text-xl"></i>
                        <span className={`md:text-[15px] ml-2 text-gray-900 ${isOpen ? "block" : "hidden"}`}>
                            Registro fotográfico
                        </span>
                    </Link>
                </div>

                <hr className="my-4 text-gray-500" />

                <div
                    className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 ${isOpen ? undefined : "justify-start"}`}
                    onClick={isOpen ? toggleSubMenu : undefined}
                >
                    <i className={`fa-solid fa-file-lines text-xl`}></i>
                    <div className={`flex w-full items-center whitespace-nowrap ${isOpen ? "justify-between" : "hidden"}`}>
                        <span className={`text-sm ml-1 text-gray-900`}>
                            Formatos de registro
                        </span>
                        <span className={`text-sm rotate-180 transition-transform duration-100`}>
                            <i className="fa-solid fa-chevron-up"></i>
                        </span>
                    </div>
                </div>
                <div
                    className={`text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-900 ${isSubMenuOpen ? "block" : "hidden"} transition-all duration-300`}
                >
                    <Link href="Formulario1">
                        <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
                            Registro de recolección <br /> en fuentes
                        </h1>
                    </Link>
                    <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
                        Formato registro <br /> operativo en ruta
                    </h1>
                </div>
                <div
                    className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 justify-between ${isOpen ? undefined : "justify-start"}`}
                    onClick={isOpen ? toggleSubMenu : undefined}
                >
                    <i className={`fa-solid fa-chart-simple text-xl`}></i>
                    <div className={`flex w-full items-center whitespace-nowrap ${isOpen ? "justify-between" : "hidden"}`}>
                        <span className={`text-sm ml-1 text-gray-900`}>
                            Estadisticas y metricas
                        </span>
                        <span className={`text-sm rotate-180 transition-transform duration-100`}>
                            <i className="fa-solid fa-chevron-up"></i>
                        </span>
                    </div>
                </div>
                <div
                    className={`text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-900 ${isSubMenuOpen ? "block" : "hidden"} transition-all duration-300`}
                >
                    <Link href="Formulario1">
                        <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
                            Estadisticas
                        </h1>
                    </Link>
                    <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
                        Metricas
                    </h1>
                </div>
                <div
                    className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900 ${isOpen ? "justify-between" : "justify-start"}`}
                    onClick={isOpen ? toggleSubMenu : undefined}
                >
                    <i className={`fa-solid fa-circle-check text-xl`}></i>
                    <div className={`flex w-full items-center whitespace-nowrap ${isOpen ? "justify-between" : "hidden"}`}>
                        <span className={`text-sm ml-1 text-gray-900`}>
                            Informes y Certificados
                        </span>
                        <span className={`text-sm rotate-180 transition-transform duration-100`}>
                            <i className="fa-solid fa-chevron-up"></i>
                        </span>
                    </div>
                </div>
                <div
                    className={`text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-900 ${isSubMenuOpen ? "block" : "hidden"} transition-all duration-300`}
                >
                    <Link href="Formulario1">
                        <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
                            Informes
                        </h1>
                    </Link>
                    <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
                        Certificados
                    </h1>
                </div>
                <div className="h-10">
                    <hr className="my-2 text-gray-900" />
                </div>
            </div>
        </>
    );
}