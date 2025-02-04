import { ChevronRightIcon, DeleteIcon, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function Tasks(props){
    const navigate = useNavigate();

    function onSeeDetalesClick(task){

        navigate(`/task?title=${task.title}&description=${task.description}`)

    }

    return(
        <div className="bg-slate-300 p-4 rounded-md shadow">
            <ul className="space-y-4">
                {props.tasks.map((task) => 
                <li key={task.id}className="flex gap-2">
                    <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 text-left text-slate-800 w-full p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                        {task.title}
                    </button>
                    <button onClick={() => onSeeDetalesClick(task)} className='bg-slate-400 p-2 rounded-md'>
                        <ChevronRightIcon />
                    </button> 
                    <button onClick={() => {props.onDeleteTaskClick(task.id)}} className='bg-slate-400 p-2 rounded-md'>
                        <TrashIcon />
                    </button>
                    </li>
                )}
            </ul>
        </div>
    );

}
export default Tasks