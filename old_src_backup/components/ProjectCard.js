import styled from "styled-components";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  const Wrapper = styled.div`
  

  `;
  let displayProperty = props.url == "" ? "none" : "default";

  let githubButton, demoButton, useButton = "";
  
  if (props.demo != ""){
    demoButton = <a style={{ marginLeft: "20px" }} class="btn btn-primary" href={props.demo} role="button" target="_blank">See a Demo</a>;
  };
  if (props.use != ""){
    useButton = <a style={{ marginLeft: "20px" }} class="btn btn-primary" href={props.use} role="button" target="_blank">Try it Yourself</a>;
  };
 


  return (
      <Card style={{display:'inline-block', width:'32rem' }}>
        <Card.Img  style={{height: '20rem', width: '32rem', objectFit: 'scale-down', borderRadius: 'inherit'}} variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>

          <a class="btn btn-primary" href={props.github} role="button" target="_blank">
            View on Github{" "}
            <img
              style={{ width: "20px", fill: "red" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </a>
          {demoButton}
          {useButton}
        </Card.Body>
      </Card>
  );
}

export default ProjectCard;
