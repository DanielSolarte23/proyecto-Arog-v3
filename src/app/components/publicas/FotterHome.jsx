import Link from 'next/link'
import React from 'react'

function FotterHome() {
    return (
        <footer className=" bg-Cafe-Footer">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Links</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#Inicio" className=" transition-colors duration-300 text-white hover:underline hover:text-verde-principal">Inicio</a>
                            <a href="#servicios" className=" transition-colors duration-300 text-white hover:underline hover:text-verde-principal">Nuestros Servicios</a>
                            <a href="#SobreNosotros" className=" transition-colors duration-300 text-white hover:underline hover:text-verde-principal">Sobre Nosotros</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Ubicaciones</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="#" className="text-white transition-colors duration-300 hover:underline hover:text-verde-principal">Planta de tratamiento</Link>
                            <Link href="#" className="text-white transition-colors duration-300 hover:underline hover:text-verde-principal">Galeria Barrio Bolivar</Link>
                            <Link href="#" className="text-white transition-colors duration-300 hover:underline hover:text-verde-principal">Galeria La esmeralda</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">servicios</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p href="#" className="text-white transition-colors duration-300 hover:text-verde-principal  hover:underline">Recoleccion</p>
                            <p href="#" className="text-white transition-colors duration-300 hover:text-verde-principal  hover:underline">Tratamiento</p>
                            <p href="#" className="text-white transition-colors duration-300 hover:text-verde-principal  hover:underline">Venta</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Contacto</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p href="#" className="text-white transition-colors duration-300 hover:text-verde-principal  hover:underline">+57 3145677880</p>
                            <p href="#" className="text-white transition-colors duration-300 hover:text-verde-principal  hover:underline">arog@gmail.com</p>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-10 " />

                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <Link href="#">
                        <img className="w-auto h-16" src="/Arogbl.png" alt="" />
                    </Link>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2024.</p>
                </div>
            </div>
        </footer>
    )
}

export default FotterHome
