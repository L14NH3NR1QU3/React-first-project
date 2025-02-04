import AddTasks from "./components/AddTasks";
import Tasks from "./components/tasks";
import { useState } from "react";

function App(){
  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Estudar programação",
    description: "15 de julho às 10:00",
    isCompleted: true
  },{
    id: 2,
    text: "Fazer compras",
    description: "15 de julho às 15:00",
    isCompleted: true
  },{
    id: 3,
    text: "Ler um livro",
    description: "15 de julho às 18:00",
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

  return (
    <div className="w-screen h-screen bg-slate-500 justify-center flex p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks tasks = {tasks} onTaskClick = {onTaskClick}/>
        <AddTasks />
      </div>
    </div>
    );

}
export default App