import logo from '../assets/no-projects.png';
import {useState} from 'react';

export default function NewProject() {
    const [newProject, setNewProject] = useState(false);
    function handleProjectCreation(){
        return (
        setNewProject((prevProject)=> !prevProject)
        )
    }
    return(
        <>
        <img src={logo} alt="" />
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <button>Create new project</button>

        <h3>Your Project</h3>
        <button> + Add Project </button>

        {newProject?
        <form>
            <label>Please add a new Project:- </label>
            <input type="text" />
        </form>: ""}
        </>
    )
}

