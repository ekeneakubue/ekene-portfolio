import React from 'react'
import './Socials.css'
import {Container, Row, Col} from 'react-bootstrap'
import { BsTelephoneFill, BsHouseFill, BsEnvelopeFill, BsWhatsapp, BsInstagram, BsGithub, BsLinkedin} from "react-icons/bs";

export default function Socials() {
  return (
    <div className='bg-dark'>
      <Container>
        <Row><hr/>
            <Col></Col>
            <Col sm={8}>
                <Row className='justify-content-center'>
                    <h1><a href="https://wa.me/+2348032744865" target="_blank" rel="noopener npreferrer"><BsWhatsapp style={{ marginBottom: "2px" }} className='text-light social'/></a></h1>
                    <h1><a href="https://github.com/ekeneakubue" target="_blank"><BsGithub style={{ marginBottom: "2px" }} className='text-light social'/></a></h1>
                    <h1><a href="https://www.linkedin.com/in/ekene-akubue-58046b77/" target="_blank"><BsLinkedin style={{ marginBottom: "2px" }} className='text-light social'/></a></h1>
                    <h1><a href="https://www.instagram.com/ekeneakubue/" target="_blank"><BsInstagram style={{ marginBottom: "2px" }} className='text-light social'/></a></h1>
                </Row>
            </Col>
            <Col></Col>
        </Row> 
      </Container>
    </div>    
  )
}
