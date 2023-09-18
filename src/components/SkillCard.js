import styled from "styled-components";
import Card from 'react-bootstrap/Card';



const Icon = styled.img`
  width:40px;
  height:40px;
  display:inline-block;
  object-fit: contain;

`;
const SCard = styled(Card)`
  width: 13rem;
  display:inline-block;
  background-color: #d2dae2;
  height:auto;
  height: 72px;
  margin: 3px;

`;

function SkillCard(props) {
  return (
      
      <SCard body>
        <Icon src={props.icon}/>&#9;{props.name}
        </SCard>
  );
}

export default SkillCard;
