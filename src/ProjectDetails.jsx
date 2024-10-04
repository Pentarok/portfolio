import { useParams, useLocation } from 'react-router-dom';
import './projectDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import profile5 from './assets/profile5.jpg'
const ProjectDetails = () => {
  const { id } = useParams();  // Still get the id for reference
  const location = useLocation();
  const project = location.state?.project;  // Retrieve project data

  console.log(project)
  return (
    <div className='details-container'>

        <div className="detail-wrapper">

       
      {project ? (
        <div>
          <h1 className='text-center text-primary'>{project.title}</h1>
          <p>{project.summary}</p>
          {/* Render other details */}
          <p>{project.content}</p>
          
{project.view_project_url && project.view_project_url !== "" ? (
  <div>
    <a href={`${project.view_project_url}`}>View project here</a>
  </div>
) : null}


{project.git_repo_url && project.git_repo_url !== "" ? (
  <div>
    <a href={`${project.git_repo_url}`}>View git repo</a>
  </div>
) : null}

{/* replace with project.photo */}
{project.view_project_url
?

<div className="project-image">
  <img src={profile5}></img>
</div>
:
null

}
        </div>
      ) : (
        <p>No project data available</p>
      )}
    </div>

    </div>
  );
};
export default ProjectDetails;
