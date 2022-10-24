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
                    <h1><BsGithub style={{ marginBottom: "2px" }} className='text-light social'/></h1>
                    <h1><BsLinkedin style={{ marginBottom: "2px" }} className='text-light social'/></h1>
                    <h1><BsInstagram style={{ marginBottom: "2px" }} className='text-light social'/></h1>
                </Row>
            </Col>
            <Col></Col>
        </Row> 
      </Container>
    </div>    
  )
}
