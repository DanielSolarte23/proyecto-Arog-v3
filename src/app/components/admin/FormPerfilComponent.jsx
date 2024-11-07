"use client";

import "@fortawesome/fontawesome-free";
// import { useAuth } from "../../context/AuthContext";

export default function Perfil() {
  // const { user } = useAuth();
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <header className="bg-verde-principal rounded-b-lg border-b-2 shadow-lg flex items-center gap-4 px-4 py-10 sm:px-6 h-14 lg:h-30">
        <div className="flex items-center gap-4">
          <span className="relative border-2 z-[2] flex justify-center items-center shrink-0 overflow-hidden bg-gray-200 rounded-full h-8 w-8 sm:h-10 sm:w-10">
            <i className="fa-solid fa-user text-2xl"></i>
          </span>
          <div className="grid gap-0.5">
            <div className="font-medium">{/*user.nombre*/ <p>Nombress</p>}</div>
            <div className="text-sm text-muted-foreground">
              {/*user.email*/ <p>correo</p>}
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 grid gap-6 p-4  sm:p-6">
        <div
          className="rounded-lg border-2 shadow-lg bg-card text-card-foreground"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Perfil
            </h3>
            <p className="text-sm text-muted-foreground">
              Actualiza tu informacion del perfil.
            </p>
          </div>
          <div className="p-6 grid gap-6">
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="name"
              >
                Nombre
              </label>
              <input
                className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Nombre"
                // value={user.nombre}
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Correo
              </label>
              <input
                className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                type="email"
                // value={user.email}
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="bio"
              >
                Biografia
              </label>
              <textarea
                className="flex w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                id="bio"
              ></textarea>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Foto de perfil
              </label>
              <div className="flex items-center gap-4">
                <span className="relative border-2 border-gray-300 items-center justify-center flex shrink-0 overflow-hidden bg-gray-200 rounded-full h-20 w-20 z-[1]">
                  <i className="fa-solid fa-user text-5xl"></i>
                </span>
                <button className="inline-flex items-center bg-gray-200 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Cargar
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6">
            <button className="inline-flex items-center bg-gray-200 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
              Guardar
            </button>
          </div>
        </div>
        <div
          className="rounded-lg border-2 bg-card text-card-foreground shadow-lg"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Seguridad
            </h3>
            <p className="text-sm text-muted-foreground">
              Actualiza tus datos de configuracion.
            </p>
          </div>
          <div className="p-6 grid gap-6">
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
              >
                Contraseña
              </label>
              <input
                className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                type="password"
                value="********"
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="2fa"
              >
                Autenticacion en dos pasos
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  data-state="checked"
                  value="on"
                  className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                  id="2fa"
                >
                  <span
                    data-state="checked"
                    className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                  ></span>
                </button>
                <span className="text-sm">Habilitado</span>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-gray-200 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
              Guardar
            </button>
          </div>
        </div>
        <div
          className="rounded-lg border-2 bg-card text-card-foreground shadow-lg"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Notificaciones
            </h3>
            <p className="text-sm text-muted-foreground">
              Administra tu configuración de notificaciones.
            </p>
          </div>
          <div className="p-6 grid gap-6">
            <div className="flex items-center justify-between gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col gap-1"
                for="email-notifications"
              >
                <span>Notificaciónes de Correo</span>
                <span className="text-sm text-muted-foreground">
                  Reciba notificaciones por correo electrónico de
                  actualizaciones importantes.
                </span>
              </label>
              <button
                type="button"
                role="switch"
                aria-checked="true"
                data-state="checked"
                value="on"
                className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                id="email-notifications"
              >
                <span
                  data-state="checked"
                  className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                ></span>
              </button>
            </div>
            <div className="flex items-center justify-between gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col gap-1"
                for="push-notifications"
              >
                <span>Notificaciones importantes</span>
                <span className="text-sm text-muted-foreground">
                  Reciba notificaciones automáticas de actualizaciones
                  importantes.
                </span>
              </label>
              <button
                type="button"
                role="switch"
                aria-checked="false"
                data-state="unchecked"
                value="on"
                className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                id="push-notifications"
              >
                <span
                  data-state="unchecked"
                  className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
