import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

export default function Button({title}) {
  return (
    <Link href="https://api.leadconnectorhq.com/widget/bookings/worksfound-demo" passHref target="_blank" rel="noopener noreferrer">
        <div className={styles.container}>
          <div className={styles.title}>{title}</div>
        </div>
    </Link>
  )
}
