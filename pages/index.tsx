import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div className='px-10'>
      <Head>
        <title>Mofajjal Rasul | Full-Stack Web Developer</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
      </Head>
      <Banner />
    </div>
  )
}

export default Home
