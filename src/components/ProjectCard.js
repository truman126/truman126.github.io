import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { CardMeta } from "semantic-ui-react";

function ProjectCard(props) {
  let githubButton,
    demoButton,
    useButton = "";

  return (
    <Card
      style={{
        width: "0 auto",
        overflow: "hidden",
        margin: "30px",
      }}
    >
      <Card.Header style={{textAlign: 'center'}}>
        <Card.Title>{props.title}</Card.Title>
      </Card.Header>
      <Card.Body style={{textAlign:'center'}}>
        <Card.Img
          style={{
            height: "25rem",
            width: "32rem",
            objectFit: "scale-down",
            borderRadius: "inherit",
            marginRight:"10px"
          }}
          src={props.img}
        />

        <Card.Text style={{textAlign:'left', width:'45%' , display:'inline-block', }}>{props.desc}</Card.Text>
      </Card.Body>

      <Card.Body>
        <a
          class="btn btn-primary"
          href={props.github}
          role="button"
          target="_blank"
        >
          View on Github{" "}
          <img
            style={{ width: "20px", fill: "red" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </a>
        {demoButton && (
          <a
            style={{ marginLeft: "20px" }}
            class="btn btn-primary"
            href={props.demo}
            role="button"
            target="_blank"
          >
            See a Demo
          </a>
        )}
        {useButton && (
          <a
            style={{ marginLeft: "20px" }}
            class="btn btn-primary"
            href={props.use}
            role="button"
            target="_blank"
          >
            Try it Yourself
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
