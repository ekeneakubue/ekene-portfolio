import React from 'react'
import './About.css'
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function About() {
  return (
    <div>
        <Container className='justify-content-center'>
            <Row>
                <Col>
                    <div className='info'>
                        <h6 className='text-danger'>MY INFO</h6>
                        <h3>ABOUT ME</h3>
                    </div>
                </Col>                
            </Row>
            
            <Row className='row justify-content-center'>
                <Col md={6} className="text-center">
                    <div className='cover'>
                        <img src='images/aboutme.jpg' alt='aboutme' className='aboutimg setup'/>
                    </div>
                </Col>

                <Col md={6} className="text-justify intro">
                    <p>Hi! My name is Ekene Akubue. I am a Fullstack Developer. I am passionate about creating responsive designs</p>
                    <p>I specialize in efficient MERN stack apps that works in all platforms and browsers. I care deeply about building interfaces that are useable and pleasant. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting administrative technology and for educating other team members. Being a developer with positive 
                        attitude and tireless energy I encourage others to work hard and succeed. In my free time, I love watching football and listening to music.</p>
                    <div className='text-center'>
                        <Button className='setup'>
                            <a href='EkeneCV.pdf' download>
                                <i class="bi bi-download text-danger"></i> Download My CV
                            </a>
                        </Button>  
                    </div>                      
                </Col>
            </Row><br/><br/>

            <Row className='row justify-content-center'>
                <Col md={6} className="text-center">
                    <div >
                        <h3>My <span className='text-danger'>Skills</span></h3><hr/>
                        <Row>
                            <Col md="6">
                                <ul>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> HTML/CSS</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> JavaScript</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> React/Redux</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> NodeJS</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> ExpressJS</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> MongoDB</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> Firebase</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> EmailJS</li>
                                </ul>
                            </Col>
                            <Col md="6">     
                                <ul>                                                                       
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> Bootstrap</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> MaterialUI</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> Fontawesome</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> Git/GitHub</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> Problem Solving</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> Decision Making</li>
                                    <li className='aboutImageIn2'><i class="bi bi-award-fill text-primary"></i> Time Management</li>
                                </ul>  
                            </Col> 
                        </Row>                     
                    </div>
                </Col>

                <Col md={6} className="text-center">
                    <h3>Most used <span className='text-danger'>Tools</span></h3><hr/>
                    <div className='skill'>                        
                        <ul>
                            <li><i class="bi bi-award-fill text-primary"></i> Visual Studio Code</li>
                            <li><i class="bi bi-award-fill text-primary"></i> GitHub</li>
                            <li><i class="bi bi-award-fill text-primary"></i> Chrome DevTools</li>
                            <li><i class="bi bi-award-fill text-primary"></i> NPM</li>
                            <li><i class="bi bi-award-fill text-primary"></i> Postmon</li>
                            <li><i class="bi bi-award-fill text-primary"></i> Ubuntu Linux</li>
                        </ul>                        
                    </div>
                </Col>
            </Row><br/>


        </Container>    
    </div>
  )
}
