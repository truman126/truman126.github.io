import styled from "styled-components";

function ProjectCard(props){

    const Wrapper = styled.div`
    `;

    return (

        <Wrapper>
            {props.name}
        </Wrapper>


    )
}

export default ProjectCard;