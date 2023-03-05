import { useState } from "react";

import { Header } from "./Header";
import { Tasks } from "./Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "1",
      title: "teste",
      isCompleted: true
    },
    {
      id: "2",
      title: "teste 2",
      isCompleted: false
    }
  ]);
  
  return (
    <>
      <Header />
      <Tasks 
        tasks={tasks}
      />
    </>
  )
}