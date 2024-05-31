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
              title="Health Safety Application (MERN-STACK)"
              description="A Health Safety Application built with React.js, Material-UI, and Firebase. This application helps individuals in emergencies by allowing them to quickly contact local police, hospitals, and relatives. Users can stay informed about the latest health guidelines, share important resources, and ensure they can reach out for help when needed."
              // ghLink="https://github.com/soumyajit4419/Chatify"
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
              title="Crop Yield Prediction (MERN-STACK)"
              description="Developed a comprehensive web application using React, Node.js, Postman, and MongoDB to assist farmers in predicting and selling crops efficiently. The application predicts crop yields based on various environmental and agricultural data, helping farmers make informed decisions about which crops to plant. This solution empowers farmers with actionable insights and streamlined market access, ultimately enhancing their productivity and profitability."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Banking System Application (BACK-END)"
              description="Led the end-to-end development of a cutting-edge Banking Application, incorporating advanced features like balancechecking and fund transfer, resulting in a 30(%) increase in user engagement.Achieving 100(%) funtionality with 50(%) enhanced scalability through DevOps."
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
