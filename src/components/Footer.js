import styled from "styled-components";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function App() {

 
  return (

    
    <footer className='bg-light text-center text-white'>
      <div  className='container p-4 pb-0'>
        <section className='mb-4'>
          <a class="btn btn-outline-dark m-1" href="https://github.com/truman126" role="button" target="_blank">
              <MDBIcon fab icon='github' />            
          </a>

          
            <a class="btn btn-outline-dark m-1" href="https://www.linkedin.com/in/trumanjohnston/" role="button" target="_blank">
              <MDBIcon fab icon='linkedin' />
            </a>
          
        </section>
      </div>

      <div  className='text-center p-3' style={{color:'black', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        This website was created with ReactJS&nbsp;
        <MDBIcon fab icon='react' />
        
      </div>
    </footer>
  );
}