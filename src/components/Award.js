import styled from "styled-components";

const Wrapper = styled.section`
  display:inline-block;
  margin: 0 50px 0 50px;

`;
const Image = styled.img`

  height:200px;
  width:200px;
  border-radius: 7%;
  object-fit: cover;
  border: 5px solid skyblue;
`;

function Award(props) {
  
  //temp, until a better way to do this
  
  let displayProperty = props.url == "" ? "none" : "default";

  return (
    <Wrapper>
      <Image src={props.image}></Image>
      <br/>
      {props.name}
      <br />
      <date>{props.date} </date>
      <br />
      <a style={{display: displayProperty}} href={props.url} target="_blank">
        Link
      </a>
      <br />
    </Wrapper>
  );
}


export default Award;
