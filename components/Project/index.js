import styles from '../../styles/Project.module.scss'

export default function Project({project}) {
  const { title, desc, img, link, github, tech } = project
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} />
      <h3 className={styles.title}>{title}</h3>
      {/* <p className={styles.desc}>{desc}</p> */}
      <div className={styles.links}>
        <a className={styles.link} href={link} target="_blank">Link</a>
        <a className={styles.link} href={github} target="_blank">Github</a>
      </div>
      <ul className={styles.list}>
        {tech.map((item) => {
          return (
            <li className={styles.item}>#{item}</li>
          )
        })}
      </ul>
    </div>
  )
}