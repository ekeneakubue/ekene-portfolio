import React from 'react'
import './Projects.css'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Projects() {
    
  return (
    <div>
        <Container className='justify-content-center'>
            <Row>
                <Col>
                    <div className='info'>
                        <h6 className='text-danger'>PROJECTS</h6>
                        <h3>MY LATEST WORKS</h3>
                    </div>
                </Col>                
            </Row> 
            
            <div className='row'>                
            <div className='col'><br/>
                    <Row className="justify-content-center">
                        <Card style={{ width: '20rem' }} className='cad'>
                            <div className='setup'>
                                <Card.Img variant="top" src="images/Projects/tinder.png" />
                            </div>                        
                            <Card.Body>
                                <Card.Title>Tinder-App-Clone </Card.Title>
                                <Card.Text>
                                <b className='text-danger'>Fullstack.</b> Designed with HTML, CSS, ReactBootstrap, MongoDB, ExpressJS, ReactJS, NodeJS. Deployed on vercel & Heroku.
                                </Card.Text>
                                <Row>
                                    <div className='col-6 '>
                                        <a href="https://tinder-clone-khaki-five.vercel.app/" target="_blank">
                                            <Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right"></i> View Site</Button>
                                        </a>
                                    </div>
                                    <div className='col-6 '>
                                        <a href="https://github.com/ekeneakubue/tinder-clone" target="_blank">
                                            <Button className="setup3" variant=" btn-block"><i class="bi bi-github"></i> GitHub</Button>
                                        </a>
                                    </div>                                
                                </Row>                                
                            </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
                <div className='col'><br/>
                    <Row className="justify-content-center">
                        <Card style={{ width: '20rem' }} className='cad'>
                            <div className='setup'>
                                <Card.Img variant="top" src="images/Projects/ekene.png" />
                            </div>                        
                            <Card.Body>
                                <Card.Title>My-Portfolio-Website</Card.Title>
                                <Card.Text>
                                    <b className='text-danger'>Frontend.</b> Designed with ReactJS, HTML, CSS, ReactBootstrap, and was deployed on vercel. This Site represent everything about me. 
                                </Card.Text>
                                <Row>
                                    <div className='col-6 '>
                                        <a href="https://ekene-portfolio.vercel.app/" target="_blank">
                                            <Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right"></i> View Site</Button>
                                        </a>
                                    </div>
                                    <div className='col-6 '>
                                        <a href="https://github.com/ekeneakubue/ekene-portfolio" target="_blank">
                                            <Button className="setup3" variant=" btn-block"><i class="bi bi-github"></i> GitHub</Button>
                                        </a>
                                    </div>                                
                                </Row>                            
                            </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
                <div className='col'><br/>
                    <Row className="justify-content-center">
                        <Card style={{ width: '20rem' }} className='cad'>
                            <div className='setup'>
                                <Card.Img variant="top" src="images/Projects/code-city.png" />
                            </div>                        
                            <Card.Body>
                                <Card.Title>Code-City-App</Card.Title>
                                <Card.Text>
                                <b className='text-danger'>Frontend.</b> Designed with HTML, CSS, ReactJS and it was deployed on vercel. <br/><br/>
                                </Card.Text>
                                <Row>
                                    <div className='col-6 '>
                                        <a href="https://gigostore.vercel.app/" target="_blank">
                                            <Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right"></i> View Site</Button>
                                        </a>
                                    </div>
                                    <div className='col-6 '>
                                        <a href="https://github.com/ekeneakubue/gigostore" target="_blank">
                                            <Button className="setup3" variant=" btn-block"><i class="bi bi-github"></i> GitHub</Button>
                                        </a>
                                    </div>                                
                                </Row>                                
                            </Card.Body>
                        </Card><br/>
                    </Row>
                </div>                
            </div>
            <div className='row'>
                <div className='col'><br/>
                    <Row className="justify-content-center">
                        <Card style={{ width: '20rem' }} className='cad'>
                            <div className='setup'>
                                <Card.Img variant="top" src="images/Projects/react-dashboard.png" />
                            </div>                        
                            <Card.Body>
                                <Card.Title>React DashBoard</Card.Title>
                                <Card.Text>
                                    <b className='text-danger'>Frontend.</b> Designed with ReactJS, HTML, CSS, Bootstrap, and was deployed on vercel. This Site represent everything about my business.
                                </Card.Text>
                                <Row>
                                    <div className='col-6 '>
                                        <a href="https://digital-business-card-psi.vercel.app/" target="_blank">
                                            <Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right"></i> View Site</Button>
                                        </a>
                                    </div>
                                    <div className='col-6 '>
                                        <a href="https://github.com/ekeneakubue/students-record-crud.git" target="_blank">
                                            <Button className="setup3" variant=" btn-block"><i class="bi bi-github"></i> GitHub</Button>
                                        </a>
                                    </div>                                
                                </Row>                                
                            </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
                <div className='col'><br/>
                    <Row className="justify-content-center">
                        <Card style={{ width: '20rem' }} className='cad'>
                            <div className='setup'>
                                <Card.Img variant="top" src="images/Projects/students-crud.png" />
                            </div>                        
                            <Card.Body>
                                <Card.Title>React-CRUD-Table</Card.Title>
                                <Card.Text>
                                    <b className='text-danger'>Fullstack.</b> This is MERN-Stack CRUD operation. Deployed the frontend on vercel and the baackend deployed on Render.
                                </Card.Text>
                                <Row>
                                    <div className='col-6 '>
                                        <a href="https://students-record-crud.vercel.app/" target="_blank">
                                            <Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right"></i> View Site</Button>
                                        </a>
                                    </div>
                                    <div className='col-6 '>
                                        <a href="https://github.com/ekeneakubue/students-record-crud.git" target="_blank">
                                            <Button className="setup3" variant=" btn-block"><i class="bi bi-github"></i> GitHub</Button>
                                        </a>
                                    </div>                                
                                </Row>                                
                            </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
                <div className='col'><br/>
                    <Row className="justify-content-center">
                        <Card style={{ width: '20rem' }} className='cad'>
                        <div className='setup'>
                            <Card.Img variant="top" src="images/Projects/responsive-dashboard.png" />
                        </div>                        
                        <Card.Body>
                            <Card.Title>Responsive-Dashboard</Card.Title>
                            <Card.Text>
                                <b className='text-danger'>Frontend.</b> This is a tipical React Responsive Admin Dashboard,    designed
                                 with ReactJS, HTML, CSS, Bootstrap, and was deployed on vercel.                                                       
                            </Card.Text>
                            <Row>
                                <div className='col-6 '>
                                    <a href="https://code-city-dashboard.vercel.app/students" target="_blank">
                                        <Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right"></i> View Site</Button>
                                    </a>
                                </div>
                                <div className='col-6 '>
                                    <a href="https://github.com/ekeneakubue/code-city-dashboard.git" target="_blank">
                                        <Button className="setup3" variant=" btn-block"><i class="bi bi-github"></i> GitHub</Button>
                                    </a>
                                </div>                                
                            </Row>                                                     
                        </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
                {/* <div className='col'><br/>
                    <Row className="justify-content-center">
                        <Card style={{ width: '20rem' }} className='cad'>
                        <div className='setup'>
                            <Card.Img variant="top" src="images/Projects/calculator.jpg" />
                        </div>                        
                        <Card.Body>
                            <Card.Title>Calculator-App</Card.Title>
                            <Card.Text>
                                <b className='text-danger'>Frontend.</b> Designed with ReactJS, HTML, CSS, Bootstrap, and was deployed on vercel. This Site shows a digital calculator.                                                       
                            </Card.Text>
                            <a href="#" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
                        </Card.Body>
                        </Card><br/>
                    </Row>
                </div> */}
            </div>
                     
        </Container>    
    </div>
  )
}