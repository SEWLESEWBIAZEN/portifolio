import React from "react";

const Main = () => {
  return (
    <div className="main  flex-wrap">
      {/* Mapping over the categories */}
      <div className="work  col-xs-12 col-sm-6 col-md-5 col-lg-3">
      <h2> Work Experiences</h2>
      <ul className="work__experiences">
        <h5>Trainee Programmer</h5>
        <li>
          <p>Company: AdIB</p>
        </li>
        <li>
          <p>Duration:15th December 2023 ---Current</p>
        </li>
        <li>
          <p>Description: Full-Time </p>
        </li>

        <h5>Intern Programmer</h5>
        <li>
          <p>Company: ABa</p>
        </li>
        <li>
          <p>Duration:15th January 2023 ---30th February 2023</p>
        </li>
        <li>
          <p>Description: Internship </p>
        </li>
      </ul>
      </div>
      {/* projects */}
      <div className="project col-xs-12 col-sm-6 col-md-5 col-lg-3">
      <h2>Projects</h2>
      <ul className="">
        <h5>LSeth2023</h5>
        <li>
          <p>Title: managing landslide sites and visualization</p>
        </li>
        <li>
          <p>Duration : 6 monthes</p>
        </li>
        <li>
          <p>Technology Stack :C#, .NET, MS SQL server</p>
        </li>
        <li>
          <p>Description: It was a desktop application</p>
        </li>

        <h5>Agro App</h5>
        <li>
          <p>Title: Boosting Agricultural Sector of Ethiopia</p>
        </li>
        <li>
          <p>Duration : 6 monthes</p>
        </li>
        <li>
          <p>
            Technology Stack :HTML5, Bootstrap, React, Expressjs, Nodejs and
            MongoDB
          </p>
        </li>
        <li>
          <p>Description: It was a web-based application</p>
        </li>

        <h5>Shemachoch E-commerce</h5>
        <li>
          <p>Title: Automating Shemachoch manual services</p>
        </li>
        <li>
          <p>Duration : 3 monthes</p>
        </li>
        <li>
          <p>
            Technology Stack :HTML5, Bootstrap, React, Expressjs, Nodejs and
            MongoDB
          </p>
        </li>
        <li>
          <p>Description: It was a web-based application</p>
        </li>
      </ul>
      </div>
      
    {/* trainings */}

    <div className="training col-xs-12 col-sm-6 col-md-5 col-lg-3">
      <h2>Trainings</h2>
      <ul className="">
        <h5>DevOps Master Class</h5>
        <div>
          <li>
            <p>Mode: Online</p>
          </li>
          <li>
            <p>Duration: 71hrs</p>
          </li>
          <li>
            <p>Instractor: Anshul on Udemy</p>
          </li>
          <li>
            <p>Period: 2/02/2024 --- current</p>
          </li>
          <li>
            <p>
              Description: It was an intensive course on DevOps tools, including
              but not limited to, Ansible, Git, Terraform and Jenkins
            </p>
          </li>
        </div>

        <h5>Windows Server 2022 Administration</h5>
        <li>
          <p>Mode: Online</p>
        </li>
        <li>
          <p>Duration: 37hrs</p>
        </li>
        <li>
          <p>Instractor: Udemy</p>
        </li>
        <li>
          <p>Period: 1/02/2024 --- 2/20/2024</p>
        </li>
        <li>
          <p>
            Description: It was an interesting course on Windows server
            Administration, including but not limited to, creating domain,
            profiles, roles
          </p>
        </li>

        <h5>Modern Software development</h5>
        <li>
          <p>Mode: On-Site</p>
        </li>
        <li>
          <p>Duration: 3 Days</p>
        </li>
        <li>
          <p>Instractor: oDC Ethiopia</p>
        </li>
        <li>
          <p>Period: 2/07/2021 --- 2/10/2021</p>
        </li>
        <li>
          <p>
            Description: It was a highlight course to modern software
            development. It teaches me about collaboration, SDLC and writing
            clean code
          </p>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Main;
