import { faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Footer.module.scss'

export default function Footer() {
  return (
    <>
      <div id='contact' className={styles.id}></div>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.wrapper}>
        <div className={styles.fontawesomeWrapper}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          <p className={styles.email}>luciamirelmann@gmail.com</p>
        </div>
        <div className={styles.fontawesomeWrapper}>
          <FontAwesomeIcon className={styles.icon} icon={faMapMarkedAlt} />
          <p className={styles.location}>Madrid, España</p>
        </div>
      </div>
      <p className={styles.footer}>Made with ♥ by <a href='https://github.com/lumiraelmar' className={styles.link}>Lu Miraelmar</a></p>
    </>
  )
}