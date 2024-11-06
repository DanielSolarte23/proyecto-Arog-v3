"use client"

import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import LogoArog from "./LogoArog";
// import { useAuth } from "../../context/AuthContext";


function BarraHeader({ className }) {
    // const { isAuthenticated, logout, user } = useAuth();
    return (
        <header
            id="header1"
            className={`w-full h-1/8 shadow-lg z-50 flex items-center bg-white  px-8 justify-between ${className}`}
        >
            {/* Contenedor de logo y texto */}
            <Link href="/" className="flex">
                <section className="flex w-5/6 h-full flex-shrink-0">
                    {/* Contenedor del logo */}
                    <LogoArog className={"w-20 h-20"} />
                </section>
            </Link>

            {/* Contenedor del menú */}
            <nav className="flex items-center navegacion">
                <ul className="flex w-full justify-between gap-14 md:px-8 font-semibold text-lg">
                    {/* {isAuthenticated ? ( */}
                    {/* <div className="flex items-center gap-2">
                        <p className="text-lg font-medium text-gray-600">
                            {user?.nombre || "Usuario"}
                        </p>
                        <i className="fa-solid fa-user-large text-white bg-verde-principal p-4 rounded-full"></i>
                        <button
                            onClick={logout}
                            className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md"
                        >
                            Cerrar sesión
                        </button>
                    </div> */}
                    {/* ) : (  */}
                    <div className="flex gap-10">
                        <div className="md:flex hidden">
                            <li>
                                <a className="font-light" href="#servicios">
                                    Servicios <span className="p-2">|</span>
                                </a>
                            </li>
                            <li>
                                <a className="font-light" href="#SobreNosotros">
                                    Nosotros
                                </a>
                            </li>
                        </div>
                        <div className="flex gap-2">
                            <li>
                                <Link
                                    className="bg-lime-600 px-3 py-1 rounded-md text-white whitespace-nowrap"
                                    href="/login"
                                >
                                    Iniciar sesión
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="px-3 py-1 border border-lime-600 rounded-md text-lime-600 whitespace-nowrap"
                                    href="/registro"
                                >
                                    Crear cuenta
                                </Link>
                            </li>
                        </div>
                    </div>
                    {/* )} */}
                </ul>
            </nav>
        </header>
    );
}

export default BarraHeader
