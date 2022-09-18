import React, { useState } from 'react';
import SkillCard from "./SkillCard";
import styled from "styled-components";



function Skills(props) {

  
  const MAX_ITEMS = 3;

  const [open, isOpen] = useState(true);

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
   ];
  
   const toggle = () => {
    isOpen(!open);
  }
  const getRenderedItems = ()  => {
    if (!open) {
      return items;
    }
    return items.slice(0, MAX_ITEMS);

  }



  const Header = styled.h3`
    
  `;
  const Wrapper = styled.div``;

  return (
    <Wrapper className={props.className}>
      <a id="skills" />
      <Header>Languages and Technologies</Header>
      <div>
        {getRenderedItems().map((item, id) => (
          <div key={id}>{item}</div>
        ))}
        <button onClick={toggle}>
          {!open ? 'less' : 'more'}
        </button>
      </div>
    </Wrapper>
  );
}

export default Skills;
