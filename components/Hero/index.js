import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.container} id='aboutme'>
      <section className={styles.section}>
        <img className={styles.img} src='https://i.postimg.cc/brhGTFxH/IMG-3369.jpg' />
        <h2 className={styles.name}>Lucia Mirelmann</h2>
        <h3 className={styles.title}>Front-end Developer</h3>
        <a className={styles.link} href='https://github.com/lumiraelmar' target="_blank"><FontAwesomeIcon className={styles.icon} icon={faGithub} /></a>
        <a className={styles.link} href='https://www.linkedin.com/in/luc%C3%ADa-mirelmann-b253051a3/' target="_blank"><FontAwesomeIcon className={styles.icon} icon={faLinkedin} /></a>
        <a className={styles.link} href='https://codepen.io/lumiraelmar' target="_blank"><FontAwesomeIcon className={styles.icon} icon={faCodepen} /></a>
        
      </section>
      <p className={styles.desc}>Hola! Soy Lucía, una desarrolladora front-end buscando su primera experiencia en el mundo de la programación. Actualmente utilizo React.js pero me encanta aprender cosas nuevas todos los días. <br />
      Soy fan de los gatos, Doctor Who y los pingüinos marinela.
      </p>
    </div>
  )
}
