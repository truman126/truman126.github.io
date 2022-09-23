import React, { useState } from "react";
import SkillCard from "./SkillCard";
import styled, { keyframes } from 'styled-components';
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { flipInX, rotateInDownLeft } from 'react-animations';

function Skills(props) {
  const MAX_ITEMS = 4;

  const [more, showMore] = useState(false);
  const [buttonVisibility, setButtonVisibility] = useState("default");

  const items = [
    <SkillCard
      name="Java"
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    />,
    <SkillCard
      name="Python"
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    />,
    <SkillCard
      name="JavaScript"
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    />,
    <SkillCard
      name="C++"
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    />,
    <SkillCard
      name="C"
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    />,
    <SkillCard
      name="Windows"
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
    />,
    <SkillCard
      name="Mac OS"
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
    />,
  ];

  const toggle = () => {
    setButtonVisibility("none");
    showMore(true);

  };
  const getRenderedItems = () => {
    if (more) {
      return items;
    }
    return items.slice(0, MAX_ITEMS);
  };

  // Styles

  const Header = styled.h3`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
  `;
  const Wrapper = styled.div``;

  const Container = styled.div`
    height:100%;
  `;
  const SkillStack = styled(Stack)`
    flex-wrap:wrap;

    
  `;
  const flipAnimation = keyframes`${flipInX}`;
  const SkillItem = styled.div`
    animation: 1.5s ${flipAnimation};
  
  `;

  return (
    <Wrapper className={props.className}>
      <a id="skills" />
      <Header>Languages and Technologies</Header>

      <Container>
        <SkillStack direction="horizontal" gap={3}>
          {getRenderedItems().map((item, id) => (
            <SkillItem style={id<MAX_ITEMS ? {animation: 'none'} : {}} key={id}>{item}{id}</SkillItem>
          ))}

          <Button style={{display: buttonVisibility}} variant="outline-dark" onClick={toggle}>More</Button>
        </SkillStack>
      </Container>
    </Wrapper>
  );
}
export default Skills;
// {animationDelay: id*100 + 'ms'}
{/* <SkillItem style={id<MAX_ITEMS ? {animation: 'none'} : {animationDelay: (id-3.5)-0.75 + 's'}} key={id}>{item}{id}</SkillItem> */}