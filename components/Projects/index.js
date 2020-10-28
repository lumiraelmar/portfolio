import data from '../../data/data.json'
import Project from '../Project'
import styles from '../../styles/Projects.module.scss'

export default function Projects() {
  const { projects } = data[0]
  return (
    <>
      <div id='projects' className={styles.id}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectsWrapper}>
          {projects.map((project, key) => {
            return (
              <Project project={project} key={key} />
            )
          })}
        </div>
      </div>
    </>
  )
}