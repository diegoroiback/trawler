'use client'

import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import Logos from '@/components/Logos/Logos'
import Stack from '@/components/Stack/Stack'
import Provider from '@/components/Provider/Provider'
import Tabs from '@/components/Tabs/Tabs'
import Faqs from '@/components/Faqs/Faqs'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Logos />
      <Stack />
      <Tabs />
      <Provider />
      <Faqs />
      <Footer />
    </>
  );
}
