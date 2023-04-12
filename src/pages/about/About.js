import React from 'react'
import './About.css'
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function About() {     
  return (
    <div>
        <Container className='justify-content-center'>
            <div className='info'>
                <h6 className='text-danger'>MY INFO</h6>
                <h3>ABOUT ME</h3>
            </div>            
            <Row className='row justify-content-center setupp'>                
                <Col md={6} className="text-center">                    
                    <div className='cover'>
                        <img src='images/aboutme.jpg' alt='aboutme' className='aboutimg setup'/>
                    </div>
                </Col>

                <Col md={6} className="text-center about-intro">
                    <p>I specialize in building efficient MERN-Stack-Apps that works across platforms and browsers. I care deeply about building interfaces that are useable and pleasant. I enjoy using my skills to contribute to existing projects and startups. In my free time, I love watching football and listening to music.</p>
                    <div className='text-center'>
                        <a href='Ekene-CV.pdf' download>
                            <Button className='setup'>                            
                                <i class="bi bi-download text-danger"></i> Download My CV
                            </Button> 
                        </a> 
                    </div>                      
                </Col>
            </Row><br/><br/>

            <div className='info'>
                <h6 className='text-danger'>Skills/Tools</h6>
            </div>            
            <Row className='row justify-content-center about-body'>                
                <Col md={6} className="text-center about-intro">
                    <div className='about-info'>My Skills</div>                                      
                    <div className=''>
                        <div className='skill-set'>                        
                            <ul>
                                <li className='bars text-center'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> HTML/CSS</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> JavaScript</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> ReactJs/Redux</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> NodeJs</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> ExpressJs</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> MongoDB</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> NextJs</span>
                                </li><hr/>   
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> Firebase</span>
                                </li><hr/>          
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> EmailJs</span>
                                </li>                                 
                            </ul>
                        </div>
                    </div>
                </Col>

                <Col md={6} className="text-center about-intro">                    
                    <div className='about-info'>Most Used Tools</div>
                    <div className='skill-set'>                        
                        <ul>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> Ubuntu Linux</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> VSCode</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> Git/GitHub</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> Chrome Dev Tools</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> NPM</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> Postman</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> React Router Dom</span>
                            </li>                                                            
                        </ul>
                    </div>                                         
                </Col>
            </Row><br/><br/>
        </Container>    
    </div>
  )
}
