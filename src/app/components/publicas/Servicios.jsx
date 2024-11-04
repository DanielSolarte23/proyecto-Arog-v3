import React from 'react'
// import { Archivo } from "next/font/google"

function Servicios() {
    return (
        <div className='h-screen' id='servicios'>
            <div className='h-1/6'></div>
            <section className="bg-white h-5/6" >
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-center w-full text-4xl  font-bold">Nuestros Servicios</h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="w-full ">
                            <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 ">
                                <img src="/imagenRecoleccion.jpg" alt="ventas" className='h-full w-full rounded-lg' />
                            </div>

                            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        </div>

                        <div className="w-full ">
                            <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600">
                                <img src="/venticas.jpg" alt="ventas" className='h-full w-full rounded-lg' />
                            </div>

                            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        </div>

                        <div className="w-full ">
                            <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600">
                                <img src="/imagenVenta.jpg" alt="ventas" className='h-full w-full rounded-lg' />
                            </div>

                            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicios
