"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from 'react';

function Page() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Ana María Sarria', email: 'Anamariasarria@gmail.com', location: 'Planta de Tratamiento', role: 'Administrador' },
        { id: 2, name: 'Juan Pérez', email: 'juanperez@gmail.com', location: 'Planta de Tratamiento', role: 'Recolector' },
        { id: 3, name: 'María López', email: 'marialopez@gmail.com', location: 'Calle 8# 21 a 56', role: 'Ciudadano' },
        { id: 4, name: 'Carlos Sánchez', email: 'carlossanchez@gmail.com', location: 'Planta de Tratamiento', role: 'Recolector' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState("add");
    const [currentUser, setCurrentUser] = useState({ name: "", email: "", location: "", role: "" });
    const [searchTerm, setSearchTerm] = useState("");

    const openModal = (mode, user = { name: "", email: "", location: "", role: "" }) => {
        setModalMode(mode);
        setCurrentUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleSaveUser = () => {
        if (modalMode === "add") {
            setUsers([...users, { ...currentUser, id: users.length + 1 }]);
        } else {
            setUsers(users.map(u => (u.id === currentUser.id ? currentUser : u)));
        }
        closeModal();
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-4/5 p-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Historial de Registro</h1>
                <button onClick={() => openModal("add")} className="bg-verde-principal text-white px-4 py-2 rounded">
                    Nuevo Usuario +
                </button>
            </header>

            <div className="bg-white shadow-md rounded">
                <div className="flex items-center p-4">
                    <input
                        type="text"
                        placeholder="Buscar por nombre, correo, ubicación o rol..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-gray-300 rounded p-2 flex-grow"
                    />
                    <button className="ml-2 p-2 border border-gray-300 rounded">
                        <i className="fas fa-magnifying-glass"></i>
                    </button>
                </div>

                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4 border">Nombre Completo</th>
                            <th className="p-4 border">Correo Electrónico</th>
                            <th className="p-4 border">Ubicación</th>
                            <th className="p-4 border">Rol</th>
                            <th className="p-4 border">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-100">
                                <td className="p-4 border">{user.name}</td>
                                <td className="p-4 border">{user.email}</td>
                                <td className="p-4 border">{user.location}</td>
                                <td className="p-4 border">{user.role}</td>
                                <td className="p-4 border flex space-x-2">
                                <button
    onClick={() => openModal("edit", user)}
    className="text-black hover:text-black mr-7 justify-center" // margen a la derecha
>
    <i className="fas fa-edit"></i>
</button>
<button
    onClick={() => handleDeleteUser(user.id)}
    className="text-verde-principal hover:bg-verde-principal mr-10 justify-center"
>
    <i className="fas fa-trash"></i>
</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">
                            {modalMode === "add" ? "Agregar Nuevo Usuario" : "Editar Usuario"}
                        </h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Nombre Completo"
                                value={currentUser.name}
                                onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="email"
                                placeholder="Correo Electrónico"
                                value={currentUser.email}
                                onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Ubicación"
                                value={currentUser.location}
                                onChange={(e) => setCurrentUser({ ...currentUser, location: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Rol"
                                value={currentUser.role}
                                onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </form>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 mr-2 border rounded bg-gray-200"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSaveUser}
                                className="px-4 py-2 bg-verde-principal text-white rounded"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
