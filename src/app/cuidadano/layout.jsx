import "../globals.css";


export const metadata = {
    title: "Administrador",
    description: "Sitio Administrador",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    );
}