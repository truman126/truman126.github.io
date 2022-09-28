import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import Stack from "react-bootstrap/Stack";

function Projects(props) {
  const Header = styled.h3`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
  `;

  const Wrapper = styled.div`
    background-color: #f8f9fa;
  `;
  const Container = styled(Stack)`
    flex-wrap:wrap;
    justify-content:center;
    padding-top:80px;
    flex: 1 0 auto;
  `;

  return (
    <Wrapper className={props.className}>
      <a id="projects" />
      <Header>Projects</Header>
      <Container direction="horizontal" gap={3}>
        <ProjectCard
          title="QuizMaker"
          desc="This application can be used by educators to create Quizzes of various types and save them for later use. Students cannot cheat as quiz files can be loaded by the program but the files cannot be view. This application was built in C++ with the Qt framework."
          img=""
          github="https://github.com/truman126/QuizMaker"
          demo=""
          use=""
        />
        <ProjectCard
          title="Truman's Weather Extension"
          desc="This is a chrome extension I created to learn how browser extensions work. In order to save network usage, I built a caching system to prevent constant refreshing. This was created using HTML, CSS, JavaScript, and JQuery."
          img="./images/projects/weatherextension.png"
          github="https://github.com/truman126/weather-extension"
          demo=""
          use="https://chrome.google.com/webstore/detail/trumans-weather-extension/jlgbkogpcpdgnjlbbokmoaekfknpgnkf/"
        />
        <ProjectCard
          title="Truman's Weather Extension"
          desc=""
          img=""
          github="https://github.com/truman126/weather-extension"
          demo=""
          use="https://chrome.google.com/webstore/detail/trumans-weather-extension/jlgbkogpcpdgnjlbbokmoaekfknpgnkf/"
        />
      </Container>
    </Wrapper>
  );
}

export default Projects;
