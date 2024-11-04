import React from 'react'

function SobreNosotros() {
    return (
        <div className='h-screen' id='SobreNosotros'>
            <div className='h-1/8'></div>
            <section className="bg-white h-7/8">
                <div className="container px-6 py-14 mx-auto h-full">
                    <div className='h-1/8 flex items-center justify-center'>
                        <h1 className="text-2xl text-gray-800 capitalize lg:text-5xl font-bold text-center">Sobre Nosotros</h1>
                    </div>
                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center h-7/8">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-4/5" src="/imagenactividad.jpg" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-base text-verde-principal uppercase">AROG</p>

                            <h3 className="block mt-4 text-3xl font-semibold text-gray-800 hover:underline">
                                Asociasion de recicladores de oficio goleros
                            </h3>

                            <p className="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit et qui, neque at itaque maiores debitis velit maxime fugit id cumque architecto temporibus ratione praesentium rem aliquid voluptates modi magnam accusamus eveniet. Officia distinctio vitae magnam explicabo qui ipsa? Debitis excepturi possimus corrupti harum cum reiciendis quo dolorem at saepe?
                            </p>

                            <a href="#" className="inline-block mt-2 text-verde-principal underline text-base">leer mas</a>

                            <div className="flex items-center mt-6">
                                <img className="object-cover object-center w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-4">
                                    <h1 className="text-base text-gray-700 ">Maria Anaya</h1>
                                    <p className="text-base text-gray-500 dark:text-gray-400">Recicladora</p>
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
