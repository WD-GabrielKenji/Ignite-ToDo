import logoToDo from '../../assets/logoToDo.svg'
import { PlusCircle } from 'phosphor-react'
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoToDo} alt="Icone App ToDo" />

      <form className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}