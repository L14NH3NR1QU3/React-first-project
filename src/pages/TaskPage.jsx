import { useSearchParams } from "react-router-dom";

function TaskPage(){
    const [searchPaarams] = useSearchParams();
    const title = searchPaarams.get("title");
    const description = searchPaarams.get("description");
    return (
    <div 
    className="w-screen h-screen bg-slate-500 justify-center flex p-6">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>);
}
export default TaskPage