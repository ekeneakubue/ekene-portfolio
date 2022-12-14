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
                            <Card.Img variant="top" src="images/Projects/ekene-portfolio.png" />
                        </div>                        
                        <Card.Body>
                            <Card.Title>My-Portfolio-Website</Card.Title>
                            <Card.Text>
                                <b className='text-danger'>Frontend.</b> Designed with ReactJS, HTML, CSS, ReactBootstrap, and was deployed on vercel. This Site represent everything about me. 
                            </Card.Text>
                            <a href="https://ekene-portfolio.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
                        </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
                <div className='col'><br/>
                    <Row className="justify-content-center">
                        <Card style={{ width: '20rem' }} className='cad'>
                        <div className='setup'>
                            <Card.Img variant="top" src="images/Projects/gigostore.png" />
                        </div>                        
                        <Card.Body>
                            <Card.Title>Gigo-Store-App</Card.Title>
                            <Card.Text>
                            <b className='text-danger'>Frontend.</b> Designed with HTML, CSS, ReactJS and it was deployed on vercel. <br/><br/>
                            </Card.Text>
                            <a href="https://gigostore.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
                        </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
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
                            <a href="https://tinder-clone-khaki-five.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
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
                            <Card.Img variant="top" src="images/Projects/bcard.png" />
                        </div>                        
                        <Card.Body>
                            <Card.Title>Digital-Business-Card</Card.Title>
                            <Card.Text>
                            <b className='text-danger'>Frontend.</b> Designed with ReactJS, HTML, CSS, Bootstrap, and was deployed on vercel. This Site represent everything about my business.
                            </Card.Text>
                            <a href="https://digital-business-card-psi.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
                        </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
                <div className='col'><br/>
                    <Row className="justify-content-center">
                        <Card style={{ width: '20rem' }} className='cad'>
                        <div className='setup'>
                            <Card.Img variant="top" src="images/Projects/crud-img.png" />
                        </div>                        
                        <Card.Body>
                            <Card.Title>CRUD-Operations</Card.Title>
                            <Card.Text>
                                <b className='text-danger'>Fullstack.</b> Designed with ReactJS, HTML, CSS, Bootstrap, Firebase and was deployed on vercel. This App shows CRUD operations.
                            </Card.Text>
                            <a href="https://react-firebase-crud-lake.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
                        </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
                <div className='col'><br/>
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
                </div>
            </div>
                     
        </Container>    
    </div>
  )
}