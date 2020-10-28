import styles from '../../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navbar}>
        <a href='/'><li className={styles.link}>Home</li></a>
        <a href='#aboutme'><li className={styles.link}>About me</li></a>
        <a href='#skills'><li className={styles.link}>Skills</li></a>
        <a href='#projects'><li className={styles.link}>Projects</li></a>
        <a href='#contact'><li className={styles.link}>Contact</li></a>
      </ul> 
    </nav>
  )
}