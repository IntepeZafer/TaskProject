import './App.css'
import { useState } from 'react'
import TaskCreate from './Companets/TaskCreate'
import TaskList from './Companets/TaskList'
function App() {
  const [task, setTask] = useState([])
  const createTask = (title , taskDesc) => {
    const createdTask = [
      ...task,
      {
        id : Math.round(Math.random() * 999999),
        title : title,
        taskDesc : taskDesc
      }
    ]
    setTask(createdTask);
  }
  const deleteTaskById = (id) => {
    const afterDeletingTask = task.filter((task) => {
      return task.id !== id
    })
    setTask(afterDeletingTask);
  }
  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h4>Görevler</h4>
      <TaskList tasks={task} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
