import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucia Mirelmann</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}
