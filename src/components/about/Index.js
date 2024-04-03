import React from "react";
import pimg from "../../assets/images/profile.jpg";
import './about.css'

const About = () => {
  return (
    <div className="container d-block background" id="about">
      <div className="d-block px-2">
       <br/>  <br/>
        <h1 className="title">About</h1>
        < div className="title-line mx-auto mb-2"></div>
        <p>
        Greetings, I'm Sewlesew, a seasoned front-end developer with a robust background in backend development as well.
         You've found the perfect partner to breathe life into your ideas. With expertise spanning HTML, CSS, JavaScript,
          React, Bootstrap, MUI, and beyond, 
         I specialize in crafting immersive and dynamic digital experiences. 
        Let's collaborate to turn your vision into a captivating reality.
        </p>
        <br/><br/>
        <div className="d-xs-block d-md-flex justify-content-between ">
         
          <div className="d-block ">
            <h3>Front-End Developer/ React Developer</h3>
            
            <p className="text-left">
            Over the past two years, I've been actively engaged in application development, 
            leveraging React to create resilient and intuitive user experiences. 
              
            </p>  <br/><br/>

            <img className=" me-4 profile-picture my-auto" width={300} height={300} src={pimg} />
            <div className=" d-xs-block d-md-flex flex-wrap basic-info ">
              <div className="me-2">                
                <tr>
                  <td>                   
                    <h5>Birthday:</h5>
                  </td>
                  <td>
                    <p>December 03 1997</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Phone Number:</h5>
                  </td>
                  <td>
                    <p>+251 947 367 528</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Address:</h5>
                  </td>
                  <td>
                    <p>Addis Ababa, Ethiopia</p>
                  </td>
                </tr>
                <tr className="flex-wrap">
                  <td>                   
                    <h5>Email Address:</h5>
                  </td>
                  <td>
                    <p>sewlesewbiazen65@gmail.com</p>
                  </td>
                </tr>                
              </div>

              <div className="ms-2">                
                <tr>
                  <td>                   
                    <h5>Degree:</h5>
                  </td>
                  <td>
                    <p>BSc</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Field of Study:</h5>
                  </td>
                  <td>
                    <p>Computer Science</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Work Experience:</h5>
                  </td>
                  <td>
                    <p>2+ years in Frontend development</p>
                  </td>
                </tr>
                <tr>
                  <td>                   
                    <h5>Institution:</h5>
                  </td>
                  <td>
                    <p>Addis Ababa University(AAU)</p>
                  </td>
                </tr>                
              </div>              
            </div>
           <br/>
            <p className="about-last-paragraph">
            Currently, I serve as a front-end developer at Addis International Bank while also freelancing.
            Throughout my journey, I've successfully delivered a range of projects, including the
            Agricultural Information System, Amhara Bank Internet Banking, User Request Handling Form at 
            Addis Bank, and Shemachoch E-commerce platform. These ventures vary in team size and project duration, 
            showcasing my adaptability and readiness for permanent and large-scale endeavors. 
            Moreover, I'm proficient in additional programming languages such as C#, ASP.NET, and Python, expanding the scope of possibilities for your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
