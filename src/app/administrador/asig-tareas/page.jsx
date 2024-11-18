"use client";
import React, { useState } from 'react';

export default function Lista() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [empleados, setEmpleados] = useState([]);
  const [tareas, setTareas] = useState([]); // Nuevo estado para las tareas
  const [formData, setFormData] = useState({
    nombre: '',
    estado: 'activo', 
    asignacion: '',
  });

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddEmployee = () => setShowForm(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Agregar empleado
    setEmpleados((prevEmpleados) => [...prevEmpleados, formData]);
    // Agregar tarea para el nuevo empleado
    const nuevaTarea = {
      fecha: new Date().toLocaleDateString(),
      asignadoPor: 'Admin', // Cambiar esto según tu lógica
      descripcion: `Tarea para ${formData.nombre}`,
      plazo: 'Sin plazo', //  Cambiar esto según tu lógica
      estado: 'Pendiente',
    };
    setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
    setFormData({ nombre: '', estado: 'activo', asignacion: '' });
    setShowForm(false);
  };

  const handleViewTasks = () => setShowModal(true); 
  const closeModal = () => setShowModal(false); 

  return (
    <>
      <div className="w-full">
        <div className="relative overflow-x-auto shadow-md">
          <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-zinc-300">
            <div className="relative z-20">
              <button
                id="dropdownDelayButton"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="z-20 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border-solid text-black transition ease-in-out delay-150 bg-lime-600 hover:-translate-y-1 hover:scale-110 hover:bg-lime-700 duration-300 mt-5 ml-2"
                type="button"
              >
                Filtrar Por
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div
                id="dropdownDelay"
                className={`absolute z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 shadow w-32 dark:bg-neutral-700 opacity-100 ml-2  `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ul className="px-5 py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-lime-600 dark:hover:text-white duration-300">Nombre</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-lime-600 dark:hover:text-white duration-300"> A-Z</a></li>
                </ul>
              </div>
            </div>

            <div className="relative group z-10">
              <button
                onClick={handleAddEmployee}
                className="hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-full mt-6 mr-10 transition ease-in-out delay-150 bg-zinc-600 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                +
              </button>

              <button
                onClick={handleViewTasks}
                type="button"
                className="focus:outline-none text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Ver Tareas
              </button>
            </div>
          </div>

          {showForm && (
            <form onSubmit={handleFormSubmit} className="p-4 bg-gray-200 dark:bg-neutral-600 rounded-lg mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-white mb-2">Nombre del Empleado</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-white mb-2">Estado</label>
                <select
                  name="estado"
                  value={formData.estado}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                >
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-white mb-2">Asignación</label>
                <input
                  type="text"
                  name="asignacion"
                  value={formData.asignacion}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <button type="submit" className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">Añadir Empleado</button>
            </form>
          )}

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table border border-collapse bg-zinc-300" id="tabla">
            <thead className="text-xs text-gray-900 uppercase dark:bg-neutral-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" className="w-6 h-6 text-red-500 bg-gray-100 border-gray-300 rounded focus:ring-2 transition-opacity duration-300 ease-in-out checked:opacity-50" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h1 className="text-white">Empleado</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h1 className="mr-10 text-white">Estado</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h1 className="text-white">Acción</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-200 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded duration-500">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="w-6 h-6 text-red-500 bg-gray-100 border-gray-300 rounded focus:ring-2 transition-opacity duration-300 ease-in-out checked:opacity-50" />
                    </div>
                  </td>
                  <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black">
                    <div className="text-base font-semibold">{empleado.nombre}</div>
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`h-2.5 w-2.5 rounded-full ${empleado.estado === 'activo' ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                    </div>
                  </td>
                  <td>
                    <h1 className="text-black">{empleado.asignacion}</h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-neutral-400 p-6 rounded-lg w-3/4 max-w-md shadow-lg">
            <h2 className="text-lg font-bold text-center mb-4">Tareas del Empleado</h2>
            <article>
              <div className="relative overflow-x-auto shadow-md rounded-lg mt-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3">Fecha</th>
                      <th scope="col" className="px-6 py-3">Asignada por</th>
                      <th scope="col" className="px-6 py-3">Descripción</th>
                      <th scope="col" className="px-6 py-3">Plazo</th>
                      <th scope="col" className="px-6 py-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tareas.map((tarea, index) => (
                      <tr key={index} className="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300 text-black">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-black whitespace-nowrap">
                          {tarea.fecha}
                        </th>
                        <td className="px-6 py-4">{tarea.asignadoPor}</td>
                        <td className="px-6 py-4">{tarea.descripcion}</td>
                        <td className="px-6 py-4">{tarea.plazo}</td>
                        <td className="px-6 py-4 text-right">
                          <div>
                            <input type="checkbox" id={`task-${index}`} name={`task-${index}`} />
                            <label htmlFor={`task-${index}`} className="ml-2">Completada</label>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Cerrar
            </button>
          </div>
        </div>      
      )}
    </>
  );
}