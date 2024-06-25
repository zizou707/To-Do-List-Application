import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';

export default function AddTodo() {
    const {title,description,setTitle,setDescription,taskList,setTaskList,status,setStatus} =
    useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => localStorage.setItem("taskList", JSON.stringify(taskList)), [taskList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, description ,completed:false };
    setTaskList([...taskList, newTask]);
    setTitle('');
    setDescription('');
    navigate('/')
    console.log(taskList);
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className="form">
        <h1>Add a Task</h1>
        <input
          onChange={e=>setTitle(e.target.value)}
          type="text"
          value={title}
          placeholder="Enter Task Title"
        />
        <textarea
          onChange={e=>setDescription(e.target.value)}
          type="text"
          value={description}
          placeholder="Enter Task Description"
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  )
}
