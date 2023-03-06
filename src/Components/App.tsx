import { useEffect, useState } from "react";

import { Header } from "./Header";
import { Tasks } from "./Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

const LOCAL_STORAGE_KEY = '@ignite-todo:tasks-state-1.0.0';

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  
  function loadSavedTasks() {
    const storedStateAsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    if (storedStateAsJSON) {
      setTasks(JSON.parse(storedStateAsJSON));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function handleCreateTask(taskTitle: string) {
    setTasksAndSave([
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
    setTasksAndSave(newTasks);
  }

  function handleCompleteTaskById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={handleCreateTask} />
      <Tasks 
        tasks={tasks}
        onDeleteTask={handleDeleteTaskById}
        onCompleteTask={handleCompleteTaskById}
      />
    </>
  )
}