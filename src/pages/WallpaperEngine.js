import styled from "styled-components";


function WallpaperEngine(){
    const Container = styled.div`
    align-content: center;
    margin-top:100px;
  `;


    return(
        <Container>
        <p>
            I'm currently working on an easily deployable version of this project.<br/><br/>
            In the meantime, enjoy this demo video:<br/>
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/URFz-dg1KTk?si=Q4dv0NHnA_tb6WDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p style={{textAlign: "center"}}><a href="https://github.com/truman126/WallpaperEngine">Source code</a></p>
        </Container>   
        
    
)
}
export default WallpaperEngine;
