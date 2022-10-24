import React from 'react'
import './Home.css'
import {Container, Row, Col} from 'react-bootstrap'
import TypeWriter from "./TypeWriter";
import About from '../about/About'
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

export default function Home() {
  return (
    <Container>
      {/* <div class="spinner-grow text-primary glow"></div> */}
        <Row>           

            <Col md={6} className="text-center intro">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>            

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Ekene <span className='text-danger'>Akubue</span></strong>
              </h1>

              <p className="heading-description blockquote">
                A Front-End Developer with over 3 years experience in Web Development. 
                I am passionate about Creating Clean, Beautiful, Responsive 
                and User Friendly Interfaces. <br/>             
              </p>

              <div className="heading-type">
                <br/>
                <hr/>
                <h2>
                    <TypeWriter />
                </h2>                
                <hr/>
              </div>
            </Col> 

            <Col md={6} className="text-center">
                <div className='img-setin'>
                  <div className='img-setup'>
                    <img src='images/ekene.jpg' className='myImage' alt="avatar" /> 
                  </div>                                      
                </div>              
            </Col>       
            
        </Row> 
        <br/><br/>
        <About />  
        <br/>
        <Projects /> 
        <br/><br/>
        <Contact />    
        <br/><br/>
    </Container>
  )
}
