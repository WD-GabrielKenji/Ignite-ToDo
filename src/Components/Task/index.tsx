import { ITask } from '../App';

import { CheckCircle, Trash } from 'phosphor-react'
import styles from './task.module.css'

interface TaskProps {
  task: ITask;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        {task.isCompleted ? <CheckCircle size={21} /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>  
  )
}