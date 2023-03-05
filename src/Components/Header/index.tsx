import { ChangeEvent, FormEvent, useState } from 'react';

import logoToDo from '../../assets/logoToDo.svg'
import { PlusCircle } from 'phosphor-react'
import styles from './header.module.css';

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logoToDo} alt="Icone App ToDo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}