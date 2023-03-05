import clipboard from '../../assets/Clipboard.svg'
import { Task } from '../Task'
import styles from './tasks.module.css'

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>0</span>
        </div>
      </header>

      <div className={styles.list}>
        <Task />
        <Task />
        <Task />
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