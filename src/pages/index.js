import styles from "@/styles/Home.module.css";
import Nav from './../components/nav/Nav'
import Principal from "@/components/principal/Principal";
import Propuesta from "@/components/propuesta/Propuesta";
import Mapa from "@/components/mapa/Mapa";
import Portales from "@/components/portales/Portales";
import Footer from "@/components/footer/Footer";
import Sobrenostros from "@/components/sobrenosotros/Sobrenostros";
import Linea from "@/components/linea/Linea";
import Testimonios from "@/components/testimonios/Testimonios";


export default function Home() {
  return (
    <>
    <Nav />
    <div>
    <Principal />
    </div>
    <Linea title={'Mejora tu calidad de vida encontrando el empleo que estás buscando'}/>
    <div id="empresas">
    <Mapa />
    </div>
    <div id="beneficios">
    <Propuesta />
    </div>
    <div id="portales">
    <Portales />
    </div>
    <Linea title={'Sus logros, nuestros logros'}/>
    <div id="testimonios">
      <Testimonios />
    </div>
    <Linea title={'Tus años de experiencia sí cuentan'}/>
    <div id="sobre-nosotros">
    <Sobrenostros />
    </div>
    <Footer />
    </>
  );
}
