import styles from '../../styles/Project.module.scss'

export default function Project({project}) {
  const { title, desc, img, link, github, tech } = project
  return (
    <div className={styles.container}>
      {img ?
        <img className={styles.img} src={img} />
        :
        <img className={styles.img} src='https://images.unsplash.com/photo-1585166169032-551d4ea843fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' alt='project preview'/>
      }
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
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