import { CheckCircle, Trash } from 'phosphor-react'
import styles from './task.module.css'

export function Task() {
  let task = "false"
  const isCompleted = "true";

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        {task === isCompleted ? <CheckCircle size={21} /> : <div />}
      </button>

      <p className={styles.textCompleted}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>

      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>  
  )
}