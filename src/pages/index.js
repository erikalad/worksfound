import styles from "@/styles/Home.module.css";
import Head from "next/head";
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
      <Head>
        <title>Consigue trabajo en IT en menos de 60 días - WorksFound</title>
        <meta 
          name="description" 
          content="Con WorksFound, postula automáticamente a todos los puestos de trabajo en plataformas de empleo reconocidas como LinkedIn, Bumeran, Indeed, Glassdoor y más. Mejora tu calidad de vida encontrando el empleo que estás buscando." 
        />
        <meta name="keywords" content="trabajo, empleo, postulación automática, LinkedIn, Bumeran, Indeed, Glassdoor, CV optimizado, búsqueda de empleo" />
        <meta property="og:title" content="Consigue trabajo en IT en menos de 60 días - WorksFound" />
        <meta 
          property="og:description" 
          content="Con WorksFound, postula automáticamente a todos los puestos de trabajo en plataformas de empleo reconocidas como LinkedIn, Bumeran, Indeed, Glassdoor y más." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.worksfound.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consigue trabajo en IT en menos de 60 días - WorksFound" />
        <meta 
          name="twitter:description" 
          content="Con WorksFound, postula automáticamente a todos los puestos de trabajo en plataformas de empleo reconocidas como LinkedIn, Bumeran, Indeed, Glassdoor y más." 
        />
      </Head>
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
