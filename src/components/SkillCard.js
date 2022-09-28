import styled from "styled-components";
import Card from 'react-bootstrap/Card';



const Icon = styled.img`
  width:40px;
  display:inline-block;

`;
const SCard = styled(Card)`
  width: 12rem;
  display:inline-block;
  background-color: #d2dae2;
  height:auto;
`;

function SkillCard(props) {
  return (
      
      <SCard body>
        <Icon src={props.icon}/>&#9;{props.name}
        </SCard>
  );
}

export default SkillCard;
