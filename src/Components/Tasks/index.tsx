import clipboard from '../../assets/Clipboard.svg'
import { ITask } from '../App'
import { Task } from '../Task'
import styles from './tasks.module.css'

interface TasksProps {
  tasks: ITask[];
}

export function Tasks({ tasks }: TasksProps) {
  const tasksQuantify = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantify}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{completedTasks} de {tasksQuantify}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task 
            key={task.id}
            task={task}
          />
        ))}
      </div>

      <section className={styles.empty}>
        <img src={clipboard} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
      </section>
    </section>
  )
}