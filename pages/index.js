import Footer from '../Components/Footer'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import Head from 'next/head'
import Service from '../Components/Service'
import Stat from '../Components/Stat'

const index = () => {
  return (
    <>
    <Head>
      <title>Home Builder</title>
    </Head>
    <Navbar />
    <Home />
    <Service />
    <Stat />
    <Footer />
    </>
  )
}

export default index