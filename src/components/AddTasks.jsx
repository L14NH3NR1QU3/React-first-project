import { useState } from "react";

function AddTasks(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="bg-slate-300 p-4 rounded-md shadow flex flex-col space-y-4">
            
            <input 
            className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
            type="text" 
            placeholder="Digite o titulo da tarefa"
            value={title}
            onChange={(event) => {setTitle(event.target.value)}}>
            </input>
            <input 
            className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
            type="text" 
            placeholder="Digite o descrição da tarefa"
            value={description}
            onChange={(event) => {setDescription(event.target.value)}}>
            </input>

            <button 
            onClick={() => {
                if(!title || !description){
                    return alert("Preencha o titulo e a descrição");
                }
                props.onAddTasksSubmit(title, description)
                }}
            className="bg-slate-500 text-white px-4 py-2 rounded-md">
                Adicionar
            </button>

        </div>
    );

}
export default AddTasks