import React from 'react'

function SobreNosotros() {
    return (
        <div className='h-screen' id='SobreNosotros'>
            <div className='h-1/6'></div>
            <section className="bg-white h-5/6">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-black text-center">Sobre Nosotros</h1>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="/imagenactividad.jpg" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-sm text-verde-principal uppercase">AROG</p>

                            <h3 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline">
                                Asociasion de recicladores de oficio goleros
                            </h3>

                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                laudantium quia tempore delect
                            </p>

                            <a href="#" className="inline-block mt-2 text-verde-principal underline hover:text-blue-400">leer mas</a>

                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Maria Anaya</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Recicladora</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SobreNosotros
