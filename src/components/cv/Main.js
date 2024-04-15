import './cv.css'
import resume from '../../assets/images/resume-cv.png'
import { experience,projects,trainings } from '../../constants/cv';

const Main = () => {
  return (
      <div className="d-block">
        <div className="resume mt-3 ">
        <img src={resume} width="80%" height="50%"/>
        <p className='mt-3'>for more scroll down...</p>
      </div>
   
    <div className=""style={{background:"#333"}}>
      {/* Mapping over the categories */}

      <h2 className='text-center text-white'>Work Experiences</h2>
      <div className="d-flex justify-content-evenly flex-wrap">   
      
      {experience.map((workex,index)=>(
        <ul className="card col-xs-12 col-sm-5 col-md-4 col-lg-3 ">        
          <h5>{workex.title}</h5>
        <li>
          <p>Company: {workex.company}</p>
        </li>
        <li>
          <p>Duration:{workex.period} </p>
        </li>
        <li>
          <p>Description: {workex.employementType} </p>
        </li>        
        </ul>       
      ))}        
      </div>
      </div>
      {/* projects */}
      <div className=" ">
      <h2 className='text-center'>Projects</h2>
      <div className='d-flex flex-wrap justify-content-evenly '>
        {projects.map((project,index)=>(
          <ul className="card col-xs-12 col-sm-5 col-md-4 col-lg-3 ms-4">
          <h5>{project.name}</h5>
          <li>
            <p>Title: {project.title}</p>
          </li>
          <li>
            <p>Duration : {project.duration}</p>
          </li>
          <li>
            <p>Technology Stack :</p>  {project.techStack.map((tech)=>(
              <li style={{listStyle:'none', margin:"auto"}}>{tech} </li>
            ))}
          </li>
          <li>
            <p>Description: {project.description}</p>
          </li>        
        </ul>

        ))}
      
      </div>
      
      </div>
      
    {/* trainings */}
    <div className=" " style={{background:"#333"}}>
      <h2 className='text-center text-white'>Trainings</h2>
      <div className='d-flex flex-wrap justify-content-evenly '>
        {trainings.map((training,index)=>(
          <ul className="card col-xs-12 col-sm-5 col-md-4 col-lg-3 ms-4">
          <h5>{training.title}</h5>
          <li>
            <p>Mode: {training.mode}</p>
          </li>
          <li>
            <p>Duration : {training.duration}</p>
          </li>
          <li>
            <p>Instractor: {training.Instractor}</p> 
          </li>
          <li>
            <p>Period: {training.period}</p> 
          </li>
          <li>
            <p>Description: {training.description}</p>
          </li>        
        </ul>

        ))}
      
      </div>
      
      </div>
    
    
      
      </div>
  );
};

export default Main;
