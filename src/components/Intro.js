import AnimatedTitle from "./AnimatedTitle";
import styled from "styled-components";
import avi from "../images/avatar.jpeg";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const Image = styled.img`
  border-radius: 150px;
  height: 300px;
  width: 300px;
  object-fit: cover;
  border: 5px solid lightgrey;
  float: right;
`;
const Header = styled.h3``;
const Wrapper = styled.div`
  border: 3px solid #fff;
  padding: 20px;
  height: 92vh;
  display: flex;
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
        
      </Leftainer>

      <div>
        <Image src={avi} alt="Truman" />
        <div>
          <a
            class="btn btn-outline-dark m-3"
            href="https://github.com/truman126"
            role="button"
            target="_blank"
          >
            GitHub <MDBIcon fab icon="github" />
          </a>

          <a
            class="btn btn-outline-dark m-3"
            href="https://www.linkedin.com/in/trumanjohnston/"
            role="button"
            target="_blank"
          >
            LinkedIn <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Intro;
