import styled from "styled-components";


const Card = styled.section`
    background-color:skyblue;
    width: 200px;
    height: 200px;
    display:inline-block;
    padding:10px;
    margin:20px;
    vertical-align: top;
    overflow:scroll;


    


`;
const Heading = styled.h5`
    text-align: center;
`;


function SkillCard(props) {
    return(
    <Card>
        <Heading>{props.name}</Heading>
        <br/>
        {props.desc}
    </Card>
    )
};


export default SkillCard;
