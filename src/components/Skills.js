import SkillCard from "./SkillCard";
import styled from "styled-components";
import { useState } from "react";

// TO-DO display setting for each card conditional on screen width, nth child

const Header = styled.h3`
  text-align: center;
  margin-bottom: 30px;

  margin-top: 50px;
`;

function Skills(props) {
  const [disp, setDisp] = useState("None");
  const [buttonText, updateButton] = useState("Show More");
  const [height, setHeight] = useState("100vh");

  const show = () => {
    if (disp === "None") {
      setDisp("Default");
      updateButton("Show Less");
      setHeight("auto")
    } else {
      setDisp("None");
      updateButton("Show More");
      setHeight("100vh");
    }
  };
  const Two = styled.div`
    display: ${disp};
  `;
  const Three = styled.div`
    display: ${disp};
  `;
  const ShowMore = styled.button`
    margin: 0 auto;
    display: block;
  `;

  const Wrapper = styled.div`
    min-height: ${height};
`;

  return (
    <Wrapper className={props.className}>
      <a id="skills" />

      <div>
        <Header>Languages and Technologies</Header>

        <div>
          <SkillCard
            icon="lang"
            name="C++"
            desc="I used this nameuage in my quizmaker project"
          />
          <SkillCard
            icon="lang"
            name="JavaScript"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="lang"
            name="Java"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="lang"
            name="C++"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="lang"
            name="Python"
            desc="I used this in my algorithms"
          />
        </div>
        <Two>
          <SkillCard
            icon="lang"
            name="SQL"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="lang"
            name="HTML/CSS"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="lang"
            name="React"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="lang"
            name="PHP"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="lang"
            name="Excel VBA"
            desc="I used this in my algorithms"
          />
        </Two>
        <Three>
          <SkillCard icon="lang" name="C" desc="I used this in my algorithms" />
          <SkillCard
            icon="tech"
            name="Git Version Control"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="tech"
            name="Windows, Linux, Mac OS"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="tech"
            name="Adobe Suite"
            desc="I used this in my algorithms"
          />
          <SkillCard
            icon="tech"
            name="Microsoft Office Suite"
            desc="I used this in my algorithms"
          />
        </Three>
      </div>
      <ShowMore onClick={show}>{buttonText}</ShowMore>
    </Wrapper>
  );
}

export default Skills;
