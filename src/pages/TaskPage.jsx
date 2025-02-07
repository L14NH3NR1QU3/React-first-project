import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function TaskPage(){
    const [searchPaarams] = useSearchParams();
    const title = searchPaarams.get("title");
    const description = searchPaarams.get("description");

    const navigate = useNavigate();

    return (
    <div className="w-screen h-screen bg-slate-500 justify-center flex p-6">
        <div className="space-y-4 w-[500px]">
            <div className="flex justify-center relative mb-6">
                <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                    <ChevronLeftIcon />
                </button>
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Detalhes da tarefa
                </h1>
            </div>
            <div className="bg-slate-200 p-2 rounded-md">
                <h2 className="text-xl text-slate-600 font-bold">
                {title}
                </h2>
                <p className="text-slate-600">
                    {description}
                </p>
            </div>
        </div>
    </div>);
}
export default TaskPage