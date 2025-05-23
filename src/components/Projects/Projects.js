import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agentAi from "../../Assets/Projects/AgentAI.jpg";
import mockup from "../../Assets/Projects/mockup.png";
import weather from "../../Assets/Projects/weather.png";

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
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Developed a frontend application for understanding current weather condition of any city using OpenWeatherMap API and Angular. Deployed it to github pages"
              ghLink="https://github.com/vishnuEvolOss/WeatherApp"
              // demoLink="https://github.com/vishnuEvolOss/WeatherApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mockup}
              isBlog={false}
              title="Task Manager Mean App"
              description="Developed a task manager application using MEAN stack. The application allows user to create, update and delete tasks. It always remember the tasks to be prioritized."
              ghLink="https://github.com/vishnuEvolOss/task-manager-mean-app"
              // demoLink="https://github.com/vishnuEvolOss/task-manager-mean-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agentAi}
              isBlog={false}
              title="Karna AI Agent"
              description="Currently building AI agent that automatically applies for jobs on behalf of me by my CV tailoring it according to job description"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
