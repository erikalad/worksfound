import React from 'react'
import styles from './nav.module.css'
import logo from './../../../public/assets/logo.png'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={styles.container}>
        <Image src={logo} className={styles.image} width={200}/>
        <div className={styles.items}>
        <Link href="#empresas" passHref className={styles.a}>
        <div className={styles.item}>Empresas</div>
        </Link>
        <Link href="#beneficios" passHref className={styles.a}>
        <div className={styles.item}>Beneficios</div>
        </Link>
        <Link href="#portales" passHref className={styles.a}>
        <div className={styles.item}>Portales</div>
        </Link>
        <Link href="#sobre-nosotros" passHref className={styles.a}>
        <div className={styles.item}>Sobre Nosotros</div>
        </Link>
        </div>
        <Button title={'Contactanos'}/>
    </div>
  )
}
