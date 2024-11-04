import React from 'react'
// import { Archivo } from "next/font/google"

function Servicios() {
    return (
        <div className='h-screen' id='servicios'>
            <div className='h-1/8'></div>
            <section className="bg-white h-7/8" >
                <div className="container px-6 py-12 mx-auto h-full">
                    <div className='flex justify-center items-center h-1/8'>
                        <h1 className="text-center w-full text-5xl font-bold">Nuestros Servicios</h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3 h-6/8">
                        <div className="w-full ">
                            <div className="w-full h-64 bg-gray-300 rounded-lg md:h-80 ">
                                <img src="/imagenRecoleccion.jpg" alt="ventas" className='h-full w-full rounded-lg' />
                            </div>

                            <h1 className="mt-4 text-2xl font-medium">Recoleccion</h1>
                            <p className="mt-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam, laborum, consequatur expedita molestias consequuntur incidunt repudiandae cupiditate vero quaerat sint. Omnis laudantium quasi distinctio quo nam non labore in?</p>
                        </div>

                        <div className="w-full">
                            <div className="w-full h-64 bg-gray-300 rounded-lg md:h-80 dark:bg-gray-600">
                                <img src="/venticas.jpg" alt="ventas" className='h-full w-full rounded-lg' />
                            </div>

                            <h1 className="mt-4 text-2xl font-medium">Estudio</h1>
                            <p className="mt-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam, laborum, consequatur expedita molestias consequuntur incidunt repudiandae cupiditate vero quaerat sint. Omnis laudantium quasi distinctio quo nam non labore in?</p>
                        </div>

                        <div className="w-full ">
                            <div className="w-full h-64 bg-gray-300 rounded-lg md:h-80 dark:bg-gray-600">
                                <img src="/imagenVenta.jpg" alt="ventas" className='h-full w-full rounded-lg' />
                            </div>

                            <h1 className="mt-4 text-2xl font-medium">Venta</h1>
                            <p className="mt-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam, laborum, consequatur expedita molestias consequuntur incidunt repudiandae cupiditate vero quaerat sint. Omnis laudantium quasi distinctio quo nam non labore in?</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicios
