import AnimatedTitle from "./AnimatedTitle";
import styled from "styled-components";
import avi from "../images/avatar.jpeg"

const Image = styled.img`
  border-radius: 150px;
  height: 300px;
  width: 300px;
  object-fit: cover;
  border: 5px solid lightgrey;
  float:right;
`;
const Header = styled.h3``;
const Wrapper = styled.div`
  border: 3px solid #fff;
    padding: 20px;
    height:92vh;
    display:flex;
    
    
`;
const Leftainer = styled.div`
    width: 70%;
    float: left;
    padding: 20px;

    `;

//note: split image and text 50%
function Intro(props) {
  return (
    <Wrapper className={props.className}>

      <Leftainer>
        <Header>Hi, my name is Truman!</Header>
        <Header>
          I am a{" "}
          <span>
            <AnimatedTitle />
          </span>
        </Header>
        <p style={{marginTop:'25px'}} >
          Hi, my name is Truman. I am a new grad software developer based in Halifax.
        </p>
      </Leftainer>

      <div>
        <Image src={avi} alt="Truman" />
      </div>
    </Wrapper>
  );
}

export default Intro;
