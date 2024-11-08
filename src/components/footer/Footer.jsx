import React from "react";
import styles from "./footer.module.css";
import logo from "./../../../public/assets/logo2.png";
import Image from "next/image";
import { BiLogoInstagram } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.fila1}>
          <div
            className={styles.containerImage}
            style={{ marginBottom: "50px" }}
          >
            <Image src={logo} width={200} style={{ marginBottom: "35px" }} />
            <div className={styles.contenido}>
              Mejora tu salario y calidad de vida con oportunidades
              internaciones
            </div>
          </div>
          <div className={styles.contacto}>
            <div className={styles.datos}>
              <CiMail />
              <Link href="mailto:info@worksfound.com" className={styles.a}>
                info@worksfound.com
              </Link>
            </div>
            <div className={styles.rrss}>
              <Link
                href="https://www.instagram.com/worksfound/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.a}
              >
                <div>
                  <BiLogoInstagram className={styles.icon} />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@WorksFound"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.a}
              >
                <div>
                  <FaYoutube className={styles.icon} />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/worksfound/posts/?feedView=all&viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.a}
              >
                <div>
                  <FaLinkedin className={styles.icon} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.contacto}>
          <div className={styles.titleSecciones}>Secciones</div>
          <div className={styles.hr2}/>
          <Link href="#empresas" passHref className={styles.a}>
            <div className={styles.item}>Empresas</div>
          </Link>
          <Link href="#beneficios" passHref className={styles.a}>
            <div className={styles.item}>Beneficios</div>
          </Link>
          <Link href="#portales" passHref className={styles.a}>
            <div className={styles.item}>Portales</div>
          </Link>
          <Link href="#testimonios" passHref className={styles.a}>
            <div className={styles.item}>Testimonios</div>
          </Link>
          <Link href="#sobre-nosotros" passHref className={styles.a}>
            <div className={styles.item}>Sobre Nosotros</div>
          </Link>
        </div>

        <div className={styles.contacto}>
        <div className={styles.titleSecciones}>Contacto</div>
        <div className={styles.hr2}/>
          <div className={styles.datos}>
            <FaMapMarkerAlt />
            <Link
              className={styles.a}
              href="https://www.google.com/maps/place/Buenos+Aires,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buenos Aires, Argentina
            </Link>
          </div>
          <div className={styles.datos}>
            <IoIosPhonePortrait />
            <Link
              className={styles.a}
              href="https://wa.me/541122533256"
              target="_blank"
              rel="noopener noreferrer"
            >
              (+54) 11 2253-3256
            </Link>
          </div>
          <div className={styles.datos}>
            <IoIosPhonePortrait />
            <Link
              href="https://wa.me/541138606683"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.a}
            >
              (+54) 11 3860-6683
            </Link>
          </div>
          <div className={styles.datos}>
            <CiMail />
            <Link href="mailto:info@worksfound.com" className={styles.a}>
              info@worksfound.com
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.copy}>
        © Copyright 2024 WorksFound. Todos los derechos reservados
      </div>
    </div>
  );
}
