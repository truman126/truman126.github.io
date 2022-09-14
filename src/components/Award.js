import styled from "styled-components";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const Wrapper = styled.section`
  display:inline-block;
  margin: 20px 50px 20px 50px;
  width:250px;
  overflow:hidden;


`;
const Image = styled.img`

  height: 250px;
  width: 250px;

  
  object-fit: cover;
  border-radius: inherit;

`;

function Award(props) {
  
  
  let displayProperty = props.url == "" ? "none" : "default";
return (

  <Wrapper>
    <MDBCard style={{height: '500px'}}>
      <Image src={props.image} alt={props.name}/>
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>
        {props.date}
          {props.desc}
        </MDBCardText>
        <MDBBtn style={{display: displayProperty}} href={props.url} target="_blank">Link</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </Wrapper>
);
}


export default Award;
