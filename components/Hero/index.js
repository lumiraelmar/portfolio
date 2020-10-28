import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.container} id='aboutme'>
      <section className={styles.section}>
        <img className={styles.img} src='https://i.postimg.cc/brhGTFxH/IMG-3369.jpg' />
        <h2 className={styles.name}>Lucia Mirelmann</h2>
        <h3 className={styles.title}>Frontend Developer</h3>
        <a className={styles.link} href='https://github.com/lumiraelmar' target="_blank"><FontAwesomeIcon className={styles.icon} icon={faGithub} /></a>
        <a className={styles.link} href='https://www.linkedin.com/in/luc%C3%ADa-mirelmann-b253051a3/' target="_blank"><FontAwesomeIcon className={styles.icon} icon={faLinkedin} /></a>
        <a className={styles.link} href='https://codepen.io/lumiraelmar' target="_blank"><FontAwesomeIcon className={styles.icon} icon={faCodepen} /></a>
        
      </section>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet augue eu est aliquam varius ut ac dolor. Proin dapibus libero eu risus consectetur dictum. Donec iaculis, dolor et bibendum imperdiet, sem orci auctor erat, eu finibus enim orci eu quam. Nunc justo tellus, mattis vel lectus consectetur, rhoncus ornare nunc. Sed pulvinar nulla ipsum, quis faucibus ipsum commodo eget. Pellentesque dictum tellus nec ante dapibus finibus. Nunc hendrerit finibus nulla eu aliquet.</p>
    </div>
  )
}
