import styled from "styled-components";

function ProjectCard(props){

    const Wrapper = styled.div`
    `;
    let displayProperty = props.url == "" ? "none" : "default";


    return (

        <Wrapper>
            {props.name}
            {props.link}

        </Wrapper>


    )
}

export default ProjectCard;