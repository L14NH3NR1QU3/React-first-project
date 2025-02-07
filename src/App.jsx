import AddTasks from "./components/AddTasks";
import Tasks from "./components/tasks";
import { useEffect, useState } from "react";
import {v4} from "uuid";

function App(){
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*useEffect(() => {
    async function fetchTasks() {
      //chamar api
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      method: 'GET'
    });
    //pegar dados da api
    const data = await resp.json();
    //armazenar/percistir dados da api
    setTasks(data);
    }
    //usar api para dar as tasks
    fetchTasks();
  }, [])*/

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if(task.id == taskId){
        return {...task, isCompleted: !task.isCompleted};
      }
      return task;
    });

    setTasks(newTasks);

  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks);
  }

  function onAddTasksSubmit(title, description){
    const newTasks = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 justify-center flex p-6">
      <div className="space-y-4 w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks onAddTasksSubmit = {onAddTasksSubmit}/>
        <Tasks tasks = {tasks} onTaskClick = {onTaskClick} onDeleteTaskClick = {onDeleteTaskClick}/>
      </div>
    </div>
    );

}
export default App