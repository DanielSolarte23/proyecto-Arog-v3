import React from 'react'

function Bienvenida() {
    return (
        <div className='h-screen' id="Inicio">
            <div className='h-1/6'></div>
            <div
                className="w-full contenedor-bienvenida px-5 h-5/6 md:px-28 items-center flex "
            >
                {/* Contenedor de la imagen y texto */}
                <section className="w-full h-5/6 flex  rounded-2xl bg-cover bg-center  bg-no-repeat hoja-verde">
                    <img
                        className="hidden lg:block absolute top-[105px] right-1  h-[83%]"
                        src="/gif-cell-phone.gif"
                        alt="cell phone"
                    />
                    <article className=" h-full flex flex-col justify-center w-full md:items-start items-center md:pl-14  p-2   text-white">
                        <div className="sm:w-1/2">
                            <p className="text-xl sm:text-3xl text-shadow-2xl">
                                Asociasion de <br />
                            </p>
                            <p className=" text-shadow-2xl -mt-3 text-xl sm:text-3xl text-nowrap">Recicladores de oficio</p>
                            <h1 className="text-shadow-2xl -mt-5 text-[2.8rem] sm:text-[4rem] font-bold">GOLEROS</h1>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Bienvenida
