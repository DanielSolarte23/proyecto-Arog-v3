import React from 'react'
import Link from 'next/link'

function page() {
    return (
        <div className='h-full '>
            <div className='h-1/8'></div>
            <main className='h-7/8 flex fondo-logo'>
                <div className='w-1/2 hidden md:block'>
                </div>
                <div className='md:w-1/2 h-full mt-10 md:mt-0 w-full flex pl-14 justify-start items-center'>
                    <div className='w-4/5 md:h-7/8 h-full bg-white px-14 rounded-lg md:py-16 py-2 border-2 flex flex-col justify-center shadow-xl'>
                        <h2 className='text-3xl font-bold mt-5 md:mt-0'>Registro</h2>
                        <form className="grid grid-cols-1 md:gap-6 gap-2 md:mt-8 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 lg:text-lg">Nombre</label>
                                <input type="text" placeholder="ingrese su nombre" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-verde-principal focus:ring-verde-principal focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600  lg:text-lg">Apellido</label>
                                <input type="text" placeholder="Ingrese su apellido" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg     focus:border-verde-principal focus:ring-verde-principal focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 lg:text-lg">Numero de telefono</label>
                                <input type="text" placeholder="ingrese su numero telefonico" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-verde-principal focus:ring-verde-principal focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 lg:text-lg">Correo</label>
                                <input type="email" placeholder="ejemplo@gmail.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-verde-principal focus:ring-verde-principal focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 lg:text-lg">Contraseña</label>
                                <input type="password" placeholder="Ingrese su contraseña" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-verde-principal focus:ring-verde-principal focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 lg:text-lg">Confirmar contraseña</label>
                                <input type="password" placeholder="Confirme su contraseña" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-verde-principal focus:ring-verde-principal focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                        </form>
                        <button class="mt-6 w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-verde-principal rounded-lg hover:bg-lime-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 lg:text-lg">
                            Registrarse
                        </button>
                        <div class="flex items-center justify-between mt-4">
                            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                            <p href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline lg:text-base">
                                o Registrarse con
                            </p>

                            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                        </div>

                        <div class="flex items-center mt-6 -mx-2">
                            <button type="button" class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                                <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                    </path>
                                </svg>

                                <span class="hidden mx-2 sm:inline md:text-lg">Continua con Google</span>
                            </button>

                            <Link href="#" class="p-2 text-2xl w-10 h-10 font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200 flex justify-center items-center">
                                <i class="fa-brands fa-facebook"></i>
                            </Link>
                        </div>

                        <p class="mt-8 text-xs font-light text-center text-gray-400 lg:text-lg"> Ya tienes una cuenta? <Link href="login" class="font-medium text-verde-principal hover:underline">Inicia sesión</Link></p>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default page