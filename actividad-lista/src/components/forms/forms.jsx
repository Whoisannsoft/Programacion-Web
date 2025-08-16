import { useState } from 'react'
import './forms.css'

function Formulario() {
 
        const [ taskInput, setTaskInput ] = useState ("")
        const [task, setTask] = useState ([])
        const [ priority, setPriority ] = ("baja")

        function handleSubmit(e) {
            e.preventDefault();
            setTask([...task, taskInput]);
            setTaskInput ("")
            setPriority ("baja");
        }


        const handleDelete = (id) => {
        const taskFiltered = tasks.filter((task, index) => id !== index);
        setTask(taskFiltered);
    }

  return (
    <>
        <form onSubmit={(e) => sendForm(e)}>
                <input  value={taskInput} placeholder='Nueva tarea :3' onChange={(e) => setTask (e.target.value)}/>

                <select value={priority}>

                    <option value="alto"> Alta importancia </option>
                    <option value="media"> Media importancia </option>
                    <option value="baja"> Baja importancia  </option>

                </select>

                <button type='submit'> Agregar Tarea </button>
        </form>   

        {task.length > 0 && task.map((task,index) => (
            <div key={index}>
                <li>
                    {task}
                </li>
                 <button onClick={() => handleDelete(index)}>Borrar :c</button>
            </div>
        ))}
    </>
  )
}

export default Formulario
