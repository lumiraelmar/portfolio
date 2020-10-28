import data from '../../data/data.json'
import styles from '../../styles/Skills.module.scss'

export default function Skills() {
  const { skills } = data[0]
  return (
    <>
      <div id='skills' className={styles.id}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.iconWrapper}>
          {skills.map((skill, key) => {
            return (
              <div className={styles.icon} key={key}>
                <img className={styles.img} src={skill.img} alt={skill.title}/ >
                <h5 className={styles.name}>{skill.title}</h5>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}