import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import "./App.css";

const App = () => {
  const [taskList, setTaskList] = useState(() => {
    try {
      const storedTaskList = localStorage.getItem("tasklist");
      return storedTaskList ? JSON.parse(storedTaskList) : [];
    } catch (error) {
      console.error("Error parsing tasklist from localStorage:", error);
      return []; 
    }
  });
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <ShowTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default App;
