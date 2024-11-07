import BarraLateral from "../components/admin/BarraLateral";
import BarraHeader from "../components/publicas/BarraHeader";
import "../globals.css";

export const metadata = {
  title: "Administrador",
  description: "Sitio Administrador",
};

export default function AdministradorLayout({ children }) {
  return (
    <>
      <div className="h-1/8"></div>
      <main className="flex h-7/8">
        <div className="w-1/5">
          <BarraLateral />
        </div>
        <div className="w-4/5">{children}</div>
      </main>
    </>
  );
}
