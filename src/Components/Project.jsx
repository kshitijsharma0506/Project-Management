import {useRef, useState} from 'react';
import NewTask from './NewTask';

export default function Project(){
  const name=useRef(null);
  const description=useRef(null);
  const date = useRef(null);
  const [projects, setAddProject] = useState([{
    name: "",
    description: "",
    date: ""
  }]);
  
  function handleCancel(){
    name.current.value = "";
    description.current.value = "";
    date.current.value="";
  }

  function handleSave(){
    setAddProject((projects)=>{
      return [...projects, {
        name: name.current.value,
        description: description.current.value,
        date: date.current.value
      }];
    })
  }

  return (
    <>
      <>
      <button onClick={handleCancel}>Cancel</button>      
      <button onClick={handleSave}>Save</button>
      <br/>
      <label>Title</label>
      <input type="text" ref = {name} />
      <br/>
      <label>Description</label>
      <textarea type="text" ref = {description} />
      <br/>
      <label>Due Date</label>
      <input type="date" ref = {date} />
      </>

      <ul>
        {projects.map((project)=> <li key={project.name}><button>{project.name} <NewTask name={project.name} description={project.description} date={project.date} /></button></li> )}
      </ul>
    </>
  )
}