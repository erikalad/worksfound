import React from 'react'
import styles from './principal.module.css'
import img1 from './../../../public/assets/img2.png'
import Image from 'next/image'
import Button from '../button/Button'

export default function Principal() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.containerTitle}>
      <div className={styles.title}>
      Automatiza tu <span className={styles.spam}>búsqueda y postulación</span> y encuentra tu próximo trabajo en 60 días <span className={styles.spam}>sin invertir tu tiempo</span>
      </div>
      <div className={styles.subtitle}>No esperes a tener tiempo libre para buscar empleo</div>
      <div><Button title={'Comenzar'}/></div>
      </div>
      <div className={styles.imagen}>
         <Image src={img1} className={styles.img}/>
      </div>
    </div>
    </>
  )
}
