import { ITask } from '../App';

import { CheckCircle, Trash } from 'phosphor-react'
import styles from './task.module.css'

interface TaskProps {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Task({ 
  task, 
  onDeleteTask, 
  onCompleteTask 
}: TaskProps) {
  return (
    <div className={styles.task}>
      <button onClick={() => onCompleteTask(task.id)} className={styles.checkContainer}>
        {task.isCompleted ? <CheckCircle size={21} /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button onClick={() => onDeleteTask(task.id)} className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>  
  )
}