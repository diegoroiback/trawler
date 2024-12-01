
'use client'

import { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';
import { motion } from "motion/react"
import styles from './Faqs.module.scss'

import { FaqsList } from '@/constants/Faqs'

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.info_title}>Frequently Asked questions</h3>
          <Link href={'/'} className={styles.btn}>Book a demo</Link>
        </div>
        <div className={styles.faqs}>
          {FaqsList.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.head} onClick={() => toggleFaq(index)}>
                <p className={styles.question}>{item.title}</p>
                <motion.div
                    animate={{
                      rotate: activeIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <MdOutlineKeyboardArrowDown />
                  </motion.div>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  activeIndex === index
                    ? { height: 'auto', opacity: 1, padding: '35px 32px' }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: .3, ease: 'easeInOut' }}
                className={styles.answer}
              >
                <p className={styles.text}>{item.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs