import AddTasks from "./components/AddTasks";
import Tasks from "./components/tasks";
import { useState } from "react";
import {v4} from "uuid";

function App(){
  const [tasks, setTasks] = useState([{
    id: v4(),
    title: "Estudar programação",
    description: "Precisa estudar programação",
    isCompleted: false
  },{
    id: v4(),
    title: "Fazer compras",
    description: "Precisa fazer compras",
    isCompleted: false
  },{
    id: v4(),
    title: "Ler um livro",
    description: "Precisa ler um livro",
    isCompleted: false
  }]);

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