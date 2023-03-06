import { useState } from "react";

import { Header } from "./Header";
import { Tasks } from "./Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  
  function handleCreateTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function handleDeleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={handleCreateTask} />
      <Tasks 
        tasks={tasks}
        onDeleteTask={handleDeleteTaskById}
      />
    </>
  )
}