import {useRef, useState} from 'react';

export default function NewTask({name, description, date}){
  const inputTask=useRef(null);
  const [tasks, setAddTask]= useState([]);
  
  function handleTask(){
    setAddTask((tasks)=>{
      return [...tasks,inputTask.current.value];
    });
  }

  function handleClear(key){
    setAddTask((tasks)=>{
      return tasks.filter((task)=>task !== key ? task:null)
    })
  }
  function handleDelete(){
    
  }
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <button onClick={handleDelete}>Delete</button>
      <h2>Tasks</h2>
      <input type="text" ref={inputTask} />
      <button type="submit" onClick={handleTask}> Add Task</button>
      <ul>
        {tasks.map((task)=> <li key={task}>{task} <button onClick={()=>handleClear(task)}>Clear</button></li>)} 
      </ul>
    </>    
  )
  }
