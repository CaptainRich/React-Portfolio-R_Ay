
import React, {useState} from 'react'
import projects from "./projects.json";

function ProjectCard( props ) {

  return (
    <div className="card">

      <div className="img-container">
         <img alt={props.name} src={require(`../../assets/images/${props.image}`)} />
      </div>

      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>GitHub Repository:</strong> {props.gitrepo}
            <li>
            <strong>Deployment Link:</strong> {props.deployment}
          </li>
          </li>
        </ul>
      </div>

    </div>
  )

}

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}


function Portfolio() {

    console.log( projects) ;

    // Declare a state variable to monitor which project is being viewed.
    const [projectList] = useState(projects);

    const renderProject = (project) => {

      return (
          // Setup the property data for the project card .
          <ProjectCard id={project.id}
                       name={project.name}
                       image={project.image}
                       description={project.description}
                       gitrepo={project.gitrepo}
                       deployment={project.deployment}
                       key={project.id}
          />
      );
    };


    return (

      <Wrapper>
        <h1 className="my-5" >
          Project Portfolio
        </h1>

        {/* Map over the projects and display them. */}
        {projectList.map( (project) => renderProject( project ))}
      </Wrapper>

    )


  
}

export default Portfolio