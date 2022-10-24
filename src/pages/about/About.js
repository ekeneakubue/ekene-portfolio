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
            <div className='row justify-content-center'>
                <div className='col aboutImageIn'>
                    <div className='aboutImageUp cover'>
                        <img src='images/aboutme.jpg' alt='aboutme' className='aboutimg'/>
                    </div>
                </div>

                <div className='col'>
                    <p>Hi! My name is Ekene Akubue. I am a Fulstack Developer. I am passionate about creating responsive designs</p>
                    <p>I specialize in efficient MERN stack apps that just works in all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting administrative technology and for educating other team members. being a developer with positive 
                        attitude and tireless energy I encourage others to work hard and succeed. In my free time, I love watching football and listen to music.</p>
                    <Button className='setup'><i class="bi bi-download"></i> Download My CV</Button>
                </div>
            </div><br/><br/>
        </Container>    
    </div>
  )
}
