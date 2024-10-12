import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HospitaL Management System (Full - Stack)"
              description="A Hospital Management System using the MERN stack, which streamlined patient data management, appointment scheduling, and billing. The system featured user authentication, role-based access for staff, and real-time updates on patient records, improving overall efficiency and ensuring secure medical data handling."
              // ghLink="https://github.com/KRISHkg31/Hospital_Managment_System1"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Crop Yield Prediction (MERN - Stack)"
              description="Developed a comprehensive web application using React, Node.js, Postman, and MongoDB to assist farmers in predicting and selling crops efficiently. The application predicts crop yields based on various environmental and agricultural data, helping farmers make informed decisions about which crops to plant. This solution empowers farmers with actionable insights and streamlined market access, ultimately enhancing their productivity and profitability."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Desktop - Agent Application (Full - Stack)"
              description="I developed a full-stack Desktop Agent Application using Python (FastAPI) and React.js. It monitors user activity and captures screenshots at configurable intervals (1, 5, or 10 minutes). The system handles large file uploads efficiently using chunking or compression and ensures secure, encrypted data transfer with robust error handling mechanisms."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-Commerce API "
              description="Developed a robust eCommerce API using Node.js, Express, and MongoDB. This API supports essential functionalities such as user authentication, product management, order processing, and payment integration. Designed with scalability and security in mind, it provides a solid backend for any eCommerce platform, ensuring seamless user experiences and efficient transaction handling."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Deployed Static Website Using AWS"
              description="Successfully deployed a static website using AWS, leveraging S3 for storage, CloudFront for CDN distribution, and Route 53 for DNS management. This deployment ensures high availability, scalability, and low latency, providing a seamless user experience. The website showcases modern web development practices and AWS best practices for hosting static content efficiently."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
