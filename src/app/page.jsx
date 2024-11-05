import Bienvenida from "./components/publicas/Bienvenida";
import FotterHome from "./components/publicas/FotterHome";
import Servicios from "./components/publicas/Servicios";
import SobreNosotros from "./components/publicas/SobreNosotros";

export default function Home() {
  return (
    <>
      <Bienvenida />
      <Servicios />
      <SobreNosotros/>
      <FotterHome />
    </>
  );
}
