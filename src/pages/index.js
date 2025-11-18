import styles from "@/styles/Home.module.css";
import Principal from "@/components/principal/Principal";
import Propuesta from "@/components/propuesta/Propuesta";
import Mapa from "@/components/mapa/Mapa";
import Portales from "@/components/portales/Portales";
import Sobrenostros from "@/components/sobrenosotros/Sobrenostros";
import Linea from "@/components/linea/Linea";
import Testimonios from "@/components/testimonios/Testimonios";
import JourneyTimeline from "@/components/journeyTimeline/JourneyTimeline";
import CVShowcase from "@/components/cvSection/CVShowcase";
import DynamicApplications from "@/components/dynamicApplications/DynamicApplications";
import StatsShowcase from "@/components/statsShowcase/StatsShowcase";


export default function Home() {
  return (
    <>
    <div>
    <Principal />
    </div>
    <Linea title={'Mejora tu calidad de vida encontrando el empleo que estás buscando'}/>
    <div id="portales">
    <Portales />
    </div>
    <JourneyTimeline />
    <Linea title={'Sus logros, nuestros logros'}/>
    <div id="testimonios" className="testimonios-home">
      <Testimonios variant="home" cardHeight={220} />
    </div>
    <StatsShowcase />
    <CVShowcase />
    <DynamicApplications />
    <div id="empresas">
    <Mapa />
    </div>
    <div id="beneficios">
    <Propuesta />
    </div>
    {/* <Linea title={'Tus años de experiencia sí cuentan'}/> */}
    <div id="sobre-nosotros">
{/*     <Sobrenostros />
 */}    </div>
    </>
  );
}
