import "../globals.css";


export const metadata = {
    title: "Administrador",
    description: "Sitio Administrador",
};

export default function PublicasLayout({ children }) {
    return (
        <body>
            {children}
        </body>
    );
}