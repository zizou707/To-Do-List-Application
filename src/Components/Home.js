import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context';

export default function Home() {
    const {taskList,setTaskList} = useContext(GlobalContext);
    const [status,setStatus]=useState();

    const handleCheckTask = (task) => {
      // Toggle completion status of the task
      const updatedTasks = taskList.map(t => 
        t.title === task.title ? { ...t, status: !t.status } : t
      );
      setTaskList(updatedTasks); // Update task list state
    };
  
    
    const handleDeleteTask = (x)=>{

        if (window.confirm('Are you sure you want to delete this task?')) {
          const updatedTasks = taskList.filter(task => task.title !== x);
          setTaskList(updatedTasks);
          console.log(updatedTasks);
        }
      };
    
  return (
    <div className='tasks-wrapper'>
      <select /* onChange={()=>handleChange} */>
         <option>Active</option>
         <option>Completed</option>
      </select>
      {taskList.map(task => (
        <div key={task.title} className="task-item">
          <h1>{task.title}</h1>
          <h3>{task.description}</h3>
          {/* Button to toggle task completion */}
          <button
            onClick={() => handleCheckTask(task)}  // Pass task to handleCheckTask function
            className={`check-btn ${task.status}` ? 'completed' : 'Active'}
            style={{ float: "left", backgroundColor: "white", border: "none" }}
            disabled={false} // Update based on your condition
          >
            {/* SVG or text for completion */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
            </svg>
          </button>

          {/* Button to delete task */}
          <button onClick={() => handleDeleteTask(task.title)} className='btn delete-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}
