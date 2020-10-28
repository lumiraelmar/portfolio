import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Footer.module.scss'

export default function Footer() {
  return (
    <>
      <div id='contact' className={styles.id}></div>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.wrapper}>
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        <p className={styles.email}>luciamirelmann@gmail.com</p>
      </div>
      <p className={styles.footer}>Made with ♥ by <a href='https://github.com/lumiraelmar' className={styles.link}>Lu Miraelmar</a></p>
    </>
  )
}