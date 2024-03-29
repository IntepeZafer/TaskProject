import { useState } from "react";
function TaskCreate({onCreate , task , taskFormUpdate , onUpdate}) {
    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    const handleClick = (event) => {
        setTitle(event.target.value);
        event.preventDefault();
    }
    const handleTaskClick = (event) => {
        setTaskDesc(event.target.value);
        event.preventDefault();
    }
    const handleSubmit = (event) => {
        onCreate(title , taskDesc);
        setTitle("");
        setTaskDesc("");
        if(taskFormUpdate){
            onUpdate(task.id , title , taskDesc)
        }else{
            onCreate(title , taskDesc);
        }
        event.preventDefault();
    }
    return (
        <div>{taskFormUpdate ? <div>
            <form className="task-update">
                <h3>Lütfen Taskı Düzenleyiniz!</h3>
                <label className="task-label">Başlğı Düzenleyiniz</label>
                <input value={title} onChange={handleClick} type="text" placeholder="Lütfen Başlığı Giriniz" />
                <label>Taskı Düzenleğiniz</label>
                <textarea value={taskDesc} onChange={handleTaskClick} placeholder="Lütfen Bir Task Giriniz"></textarea>
                <button className="taskButtonUpdate" onClick={handleSubmit}>Oluştur</button>
            </form>
        </div> : <div>
            <form className="task-create">
                <h3>Lütfen Task Ekleyiniz</h3>
                <label className="task-label">Başlık</label>
                <input value={title} onChange={handleClick} type="text" placeholder="Lütfen Başlığı Giriniz" />
                <label>Task</label>
                <textarea value={taskDesc} onChange={handleTaskClick} placeholder="Lütfen Bir Task Giriniz"></textarea>
                <button onClick={handleSubmit}>Oluştur</button>
            </form>
        </div>}</div>
        
     );
}

export default TaskCreate;