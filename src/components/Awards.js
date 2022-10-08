import Award from "./Award";
import styled from "styled-components";
import Stack from "react-bootstrap/Stack";


const Wrapper = styled.div`
  background-color: #f8f9fa;
`;

const AwardsContainer = styled.div`
`;

const Header = styled.h3`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;
const Container = styled(Stack)`
flex-wrap:wrap;
justify-content:center;
padding-top:40px;
flex: 1 0 auto;
`;

function Awards(props) {
  return (
    <Wrapper className={props.className}>
        <a id="awards" />

      <Header>Awards and Certifications</Header>
      <Container direction="horizontal" gap={3}>

        <Award
          className="Award"
          name="IBM Z Xplore - Advanced"
          date="July 22, 2022"
          image="./images/awards/ibmzxploreadvanced.png"
          url="https://www.credly.com/badges/30beead6-097e-493e-8def-def103484082/public_url"
        />
        <Award
          name="IBM Z Xplore - Concepts"
          date="June 15, 2022"
          image="./images/awards/ibmzxploreconcepts.png"
          url="https://www.credly.com/badges/1337dc39-bca6-4bf2-84cd-3bc47285f0ff/public_url"
        />
        <Award
          name="Dean's Honour List"
          date="Fall/Winter 2022"
          image="./images/awards/uwocrest.gif"
          url=""
        />
        <Award
          name="BSc. Major in Computer Science"
          date="2022"
          image="./images/awards/uwocrest.gif"
          url=""
        />
        <Award
          name="Codecademy: Learn React"
          date="2022"
          image="./images/awards/codecademy.png"
          url=""
        />
      </Container>
    </Wrapper>
  );
}

export default Awards;
