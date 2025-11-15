import React, { useState, useEffect, useMemo } from "react";
import styles from "./testimonios.module.css";

function Testimonios() {
  const testimoniosRaw = [
    {
      id: "bIiAa3l9ULE",
      nombre: "Didier Pereira",
      cargo: "Front‑End Developer",
      fecha: "11‑ago‑2024"
    },
    {
      id: "ugpMAkmdvIA",
      nombre: "Gamaliel Camey",
      cargo: "Frontend Developer",
      fecha: "25‑sept‑2024"
    },
    {
      id: "yVfWf0-drFU",
      nombre: "Luciana Rios",
      cargo: "Frontend & Mobile Developer",
      fecha: "05‑nov‑2024"
    },
    {
      id: "u2aGjlROjPc",
      nombre: "Mariano Hilario",
      cargo: "Full Stack Developer",
      fecha: "25‑nov‑2024"
    },
    {
      id: "z0duw6W6TIo",
      nombre: "Antonio Piatti Fadda",
      cargo: "Frontend Developer",
      fecha: "09‑ene‑2025"
    },
    {
      id: "Rfp2sS2lnj4",
      nombre: "Federico Hugenet",
      cargo: "Ejecutivo de Cuentas",
      fecha: "09‑ene‑2025"
    },
    {
      id: "koGC0-WB3qg",
      nombre: "Orlando Andaur",
      cargo: "Fullstack Developer",
      fecha: "10‑ene‑2025"
    },
    {
      id: "ydBP5t19-Do",
      nombre: "Fabrizio Villanueva",
      cargo: "Fullstack Developer",
      fecha: "27‑jul‑2025"
    },
    {
      id: "bKfCCo7w_YA",
      nombre: "Diego Alvarez",
      cargo: "Frontend Developer",
      fecha: "08‑sept‑2025"
    },
    {
      id: "PdAi08DGJ54",
      nombre: "Joaquín Brondo",
      cargo: "Desarrollador Fullstack",
      fecha: "02‑oct‑2025"
    },
    {
      id: "zzwg0UHL5dU",
      nombre: "Henry Bustamante",
      cargo: "Frontend Developer",
      fecha: "06‑nov‑2025"
    }
  ];

  // Función para parsear fechas en formato "DD-MMM-YYYY"
  const parseFecha = (fechaStr) => {
    const meses = {
      'ene': 0, 'feb': 1, 'mar': 2, 'abr': 3, 'may': 4, 'jun': 5,
      'jul': 6, 'ago': 7, 'sept': 8, 'oct': 9, 'nov': 10, 'dic': 11
    };
    
    const partes = fechaStr.split('‑');
    if (partes.length === 3) {
      const dia = parseInt(partes[0]);
      const mes = meses[partes[1].toLowerCase()];
      const año = parseInt(partes[2]);
      return new Date(año, mes, dia);
    }
    return new Date(0);
  };

  // Ordenar testimonios de más nuevos a más antiguos
  const testimonios = useMemo(() => {
    return [...testimoniosRaw].sort((a, b) => {
      const fechaA = parseFecha(a.fecha);
      const fechaB = parseFecha(b.fecha);
      return fechaB - fechaA; // Más recientes primero
    });
  }, []);

  const videosPerSlide = 3;
  const totalSlides = Math.ceil(testimonios.length / videosPerSlide);
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay - cambia de slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVideosForSlide = (slideIndex) => {
    const start = slideIndex * videosPerSlide;
    return testimonios.slice(start, start + videosPerSlide);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.carouselInner}>
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const videos = getVideosForSlide(slideIndex);
            return (
              <div
                key={slideIndex}
                className={`${styles.carouselItem} ${slideIndex === activeIndex ? styles.active : ""}`}
              >
                <div className={styles.videosContainer}>
                  {videos.map((testimonio) => (
                    <div key={testimonio.id} className={styles.videoWrapper}>
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${testimonio.id}`}
                        title={`Testimonio ${testimonio.nombre}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className={styles.video}
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.indicators}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
