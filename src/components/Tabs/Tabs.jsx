
'use client'

import { useState, useEffect } from 'react';
import { motion } from "motion/react"
import styles from './Tabs.module.scss'

import { TabsList } from '@/constants/Tabs'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleButtonClick = (index) => {
    setActiveTab(index)
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div className={styles.section}>
      <div className={styles.container}>
        {isDesktop ? (
          <>
            <div className={styles.tabs}>
              {TabsList.map((item, index) => (
                <div className={styles.tabs_item} key={index}>
                  <button
                    className={`${styles.tabs_btn} ${activeTab === index ? styles.active : ''}`}
                    onClick={() => handleButtonClick(index)}
                  >
                    {item.title}
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.content}>
              {TabsList.map((item, index) => (
                activeTab === index && (
                  <motion.div
                    key={index}
                    className={styles.item}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    transition={{ duration: .9, ease: "easeInOut" }}
                  >
                    <img src={item.image} alt={item.title} className={styles.item_img} />
                    <div className={styles.item_content}>
                      <h4 className={styles.item_title}>{item.title}</h4>
                      <p className={styles.item_text}>{item.text}</p>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </>
        ) : (
          <div className={styles.content}>
            {TabsList.map((item, index) => (
              <div className={styles.item} key={index}>
                <img src={item.image} alt={item.title} className={styles.item_img}/>
                <div className={styles.item_content}>
                  <h4 className={styles.item_title}>{item.title}</h4>
                  <p className={styles.item_text}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Tabs