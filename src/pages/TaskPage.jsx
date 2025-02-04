import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function TaskPage(){
    const [searchPaarams] = useSearchParams();
    const title = searchPaarams.get("title");
    const description = searchPaarams.get("description");

    const navigate = useNavigate();

    return (
    <div 
    className="w-screen h-screen bg-slate-500 justify-center flex p-6">
        <div className="bg-slate-300 rounded-md space-y-5 p-4 flex-col w-[500px] h-52">
            <h1 className="bg-slate-400 p-1 rounded-md text-2xl text-center">
                {title}
            </h1>
            <p className="bg-slate-400 p-2 rounded-md text-1x1">
                {description}
            </p>
            <button onClick={() => {navigate("/");}} className="bg-slate-400 rounded-md p-2">
                Voltar
            </button>
        </div>
    </div>);
}
export default TaskPage