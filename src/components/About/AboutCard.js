import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishnu V </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am currently employed as a software developer at Infosys.
            <br />
            I have completed Bachelor of Technology in Computer Science from APJ Abdul Kalam Technological University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Great things always take time. Stay Motivated!"{" "}
          </p>
          <footer className="blockquote-footer">Vishnu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
