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
  
  return (
    <>
      <Header />
      <Tasks 
        tasks={tasks}
      />
    </>
  )
}