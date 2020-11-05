import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container} lang="es">
      <Head>
        <title>Lucia Mirelmann</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://use.fontawesome.com/releases/v5.12.1/css/svg-with-js.css" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}
