import BarraLateral from "../components/admin/BarraLateral";
import "../globals.css";


export const metadata = {
    title: "Administrador",
    description: "Sitio Administrador",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="h-screen">
                <div className="h-1/6 border border-red-500">barra</div>
                <main className="flex h-5/6">
                    <BarraLateral />
                    {children}
                </main>
            </body>
        </html>
    );
}