import NewProject from "./Components/NewProject";
import ProjectSidebar from "./Components/ProjectSidebar";
import NoProjectSelected from "./Components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[]
  });

  function handleStartAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  let content;
  if(projectState.selectedProjectId === null){
    content=<NewProject/>
  } else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject}/>
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAddProject = {handleStartAddProject}/>
        {content}
      </main>
      {/* <Project/> */}
    </>
  );
}

export default App;
