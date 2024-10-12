import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krish Gupta </span>
            from <span className="purple"> Agra, India.</span>
            <br />
            I am currently pursuing Btech with Computer Science and Engineering from GLA University Mathura. I have a strong foundation in full-stack development, also worked on complex systems like a hospital management system, credit card point calculators, and a Python-based desktop agent application for tracking employee activity.
            {/* <br />
            {/* I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra. */}
            {/* <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Krish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
