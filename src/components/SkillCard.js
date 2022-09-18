import styled from "styled-components";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

const Wrapper = styled.div`
    min-width:250px;



`;

function SkillCard(props) {
  return (
        <Wrapper>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{props.name}</MDBCardTitle>
                <MDBCardText>{props.desc}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </Wrapper>
  );
}

export default SkillCard;
