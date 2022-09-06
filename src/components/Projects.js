import ProjectCard from './ProjectCard';
import styled from "styled-components";





function Projects() {

  const Wrapper = styled.div`


  `;
  return (
    <Wrapper>
      
      <ProjectCard name="First project" link="http" desc="fun little project i did" media="" />
      <ProjectCard name="First project" link="http" desc="fun little project i did" media="" />
      <ProjectCard name="First project" link="http" desc="fun little project i did" media="" />
    </Wrapper>
  );
}

export default Projects;
