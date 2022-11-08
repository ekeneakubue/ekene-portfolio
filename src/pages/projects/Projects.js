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
                            <Card.Title>My Portfolio Website</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <a href="https://tinder-clone-khaki-five.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
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
                            <Card.Title>Amazone Clone Website</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <a href="https://tinder-clone-khaki-five.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
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
                            <Card.Title>TinderApp-Clone </Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
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
                            <Card.Img variant="top" src="images/Projects/gigostore.png" />
                        </div>                        
                        <Card.Body>
                            <Card.Title>ToDo App</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <a href="https://tinder-clone-khaki-five.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
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
                            <Card.Title>ToDo App</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <a href="https://tinder-clone-khaki-five.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
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
                            <Card.Title>ToDo App</Card.Title>
                            <Card.Text>
                                <div>Used Tools</div>
                                <div className='row'>
                                    <div className='col'>
                                        <ul>
                                            <li>HTML/CSS</li>
                                            <li>ReactJs</li>
                                            <li>NodeJs</li>
                                        </ul>
                                    </div>
                                    <div className='col'></div>
                                    <div className='col'></div> 
                                </div>                                                          
                            </Card.Text>
                            <a href="https://tinder-clone-khaki-five.vercel.app/" target="_blank"><Button className="setup2" variant=" btn-block"><i class="bi bi-chevron-double-right text-danger"></i> View Site</Button></a>
                        </Card.Body>
                        </Card><br/>
                    </Row>
                </div>
            </div>
                     
        </Container>    
    </div>
  )
}