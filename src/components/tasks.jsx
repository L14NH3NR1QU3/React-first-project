import { ChevronRightIcon } from 'lucide-react';
function Tasks(props){
    console.log(props);
    return(
        <div className="bg-slate-300 p-4 rounded-md shadow">
            <ul className="space-y-4">
                {props.tasks.map((task) => 
                <li key={task.id}className="flex gap-2">
                    <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 text-left text-slate-800 w-full p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                        {task.text}
                    </button>
                    <button className='bg-slate-400 p-2 rounded-md'>
                        <ChevronRightIcon />
                    </button> 
                    </li>
                )}
            </ul>
        </div>
    );

}
export default Tasks