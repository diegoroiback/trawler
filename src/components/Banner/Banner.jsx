'use client'

import React from 'react'
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to the next generation of open finance</h1>
          <p className={styles.text}>Empowering the Next Generation of Fintech Startups with Enriched Data</p>
        </div>
      </div>
    </div>
  )
}

export default Banner