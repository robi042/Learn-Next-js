import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import styles from '../styles/Home.module.css'
 
const Home: NextPage = () => {
  return (
    //[rgb(36, 36, 36)]
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Robi's Portfolio</title>
        
      </Head>
      <Header/>

      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>
      

     
    </div>
  )
}

export default Home
