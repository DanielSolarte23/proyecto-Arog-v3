import React from "react";
import LogoArog from "../components/publicas/LogoArog";
import "@fortawesome/fontawesome-free";
import Link from "next/link";

function page() {
  return (
    <div className="h-full">
      <div className="h-1/8"></div>
      <main className="h-7/8 flex fondo-logo bg-white">
        <div className="w-1/2"></div>
        <div className="w-1/2 h-full flex pl-14 justify-start items-center">
          <div className="w-4/5 h-7/8 bg-white px-14 rounded-lg py-10 border-2 flex flex-col justify-center shadow-xl">
            <h2 className="text-3xl font-bold">Inicia sesión</h2>

            <form class="mt-6">
              <div>
                <label
                  for="correo"
                  class="block text-sm text-gray-800  lg:text-lg"
                >
                  Correo
                </label>
                <input
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-verde-principal focus:ring-verde-principal focus:outline-none focus:ring focus:ring-opacity-40 "
                />
              </div>

              <div class="mt-4">
                <div class="flex items-center justify-between">
                  <label
                    for="contraseña"
                    class="block text-sm text-gray-800  lg:text-lg"
                  >
                    Contraseña
                  </label>
                  <Link
                    href="#"
                    class="text-xs text-verde-principal  hover:underline lg:text-lg"
                  >
                    Olvido su contraseña?
                  </Link>
                </div>

                <input
                  type="password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-verde-principal focus:ring-verde-principal focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <Link href="/administrador">
                  <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-verde-principal rounded-lg hover:bg-lime-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 lg:text-lg">
                    Iniciar sesión
                  </button>
                </Link>
              </div>
            </form>

            <div class="flex items-center mt-6 -mx-2">
              <Link
                href="#"
                type="button"
                class="flex items-center justify-center w-1/2 px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
              >
                <i class="fa-brands fa-google text-xl"></i>

                <span class="hidden mx-2 sm:inline md:text-lg">
                  Continua con Google
                </span>
              </Link>

              <Link
                href=""
                class="py-2 text-2xl w-1/2 gap-3 font-medium text-gray-500 transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-gray-200 flex justify-center items-center"
              >
                <i class="fa-brands fa-facebook text-white"></i>
                <p className="hidden mx-2 sm:inline md:text-lg text-white">
                  Continuar con facebook
                </p>
              </Link>
            </div>

            <p class="mt-8 text-xs font-light text-center text-gray-400 lg:text-lg">
              {" "}
              No tienes una cuenta?{" "}
              <Link
                href="registro"
                class="font-medium text-verde-principal hover:underline"
              >
                Crear una
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
