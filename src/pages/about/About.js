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
                <h3>MY SKILLS</h3>
            </div>            
            <Row className='row justify-content-center setupp'>                
                <Col md={6} className="text-center about-intro">
                    <div className='about-info'>Skills</div>                                      
                    <div className='set2'>
                        <div className='skill-set'>                        
                            <ul>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> HTML/CSS</span>
                                    <span className='text-success'>Profficent</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> JavaScript</span>
                                    <span className='text-info'>Intermediate</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> ReactJs/Redux</span>
                                    <span className='text-success'>Profficent</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> NodeJs</span>
                                    <span className='text-success'>Profficent</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> ExpressJs</span>
                                    <span className='text-success'>Profficent</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> MongoDB</span>
                                    <span className='text-success'>Profficent</span>
                                </li><hr/>
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> NextJs</span>
                                    <span className='text-secondary'>beginner</span>
                                </li><hr/>   
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> Firebase</span>
                                    <span className='text-info'>Intermediate</span>
                                </li><hr/>          
                                <li className='bars'>
                                    <span><i className="bi bi-arrow-right-short text-danger"></i> EmailJs</span>
                                    <span className='text-success'>Profficent</span>
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
                                <span className='text-success'>Profficent</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> VSCode</span>
                                <span className='text-success'>Profficient</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> Git/GitHub</span>
                                <span className='text-success'>Profficent</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> Chrome Dev Tools</span>
                                <span className='text-success'>Profficent</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> NPM</span>
                                <span className='text-success'>Profficent</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> Postman</span>
                                <span className='text-success'>Profficent</span>
                            </li><hr/>
                            <li className='bars'>
                                <span><i className="bi bi-arrow-right-short text-danger"></i> React Router Dom</span>
                                <span className='text-success'>Profficent</span>
                            </li>                                                            
                        </ul>
                    </div>                                         
                </Col>
            </Row><br/><br/>
        </Container>    
    </div>
  )
}
