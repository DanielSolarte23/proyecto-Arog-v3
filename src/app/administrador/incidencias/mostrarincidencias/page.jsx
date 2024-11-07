// app/administrador/incidencias/mostrarincidencias/page.jsx
import React from 'react';

function page() {
    return (
  <main className='flex items-center justify-center w-full bg-gray-100'>
    <div className='w-full max-w-screen-xl p-8 bg-white shadow-md rounded'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Lista de incidencias</h2>
<div className='overflow-x-auto'>
    <table className='min-w-full table-auto'>
        <thead>
             <tr>
                <th className='px-4 py-2 text-left'>Nombre completo</th>
                <th className='px-4 py-2 text-left'>Fecha</th>
                <th className='px-4 py-2 text-left'>Cedula</th>
                <th className='px-4 py-2 text-left'>Tipo de incidencia</th>
                <th className='px-4 py-2 text-left'>Descripcion</th>
            </tr>
        </thead>
        <tbody>
           
         <tr>
                <td className='px-4 py-2'>Juan Perez</td>
                <td className='px-4 py-2'>2022-01-01</td>
                <td className='px-4 py-2'>123456789</td>
                <td className='px-4 py-2'>fallo en la ruta</td>
                <td className='px-4 py-2'>No se establecio la ruta correctamente</td>
            </tr> 
        </tbody>
    </table>
    </div>
    </div>
  </main>
    )
  }
  

export default page;
