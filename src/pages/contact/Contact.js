import React from 'react'
import './Contact.css'
import {Container, Row, Col} from 'react-bootstrap'
import { BsTelephoneFill, BsHouseFill, BsEnvelopeFill, BsWhatsapp, BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

export default function Contact() {
  return (
    <div>
        <Container className='justify-content-center'>
            <Row>
                <Col>
                    <div className='info'>
                        <h6 className='text-danger'>CONTACT</h6>
                        <h3>GET IN TOUCH</h3>                        
                    </div>
                </Col>                
            </Row> 
        
            <Row className='contact justify-content-center'>
                <Col className='contact-setup'>
                    <h4><BsWhatsapp style={{ marginBottom: "2px" }} className='text-danger'/></h4>
                    <b>PHONE</b>
                    <h5>+2348032744865</h5>
                </Col>
                <Col className='contact-setup'>
                    <h4><BsEnvelopeFill style={{ marginBottom: "2px" }} className='text-danger'/></h4>
                    <b>EMAIL</b>
                    <h5>ekeneakubue@gmail.com</h5>
                </Col>
                <Col className='contact-setup'>
                    <div>
                        <h4><BsHouseFill style={{ marginBottom: "2px" }} className='text-danger'/></h4>
                        <b>OFFICE ADDRESS</b>
                        <h5>ICT, University of Nigeria, Nsukka</h5>
                    </div>                    
                </Col>
            </Row>
            <div className='row'>
            <form id="contactForm">
                                <div class="row mt-4">
                                    <div class="col-lg-6 form-item">
                                        <div class="form-group">
                                            <input name="name" id="name" type="text" class="form-control" placeholder="Your Name*" required="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 form-item">
                                        <div class="form-group">
                                            <input name="email" id="email" type="email" class="form-control" placeholder="Your Email*" required="" />
                                        </div>
                                    </div>
                                    <div class="col-12 form-item">
                                        <div class="form-group">
                                            <input name="subject" id="subject" type="text" class="form-control" placeholder="Your Subject*" required="" />
                                        </div>
                                    </div>
                                    <div class="col-12 form-item">
                                        <div class="form-group">
                                            <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Your message..."/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 mt-4 text-left">
                                        <button type="button" class="pill-button rounded" id="submit-btn" onclick="sendEmail()">Send Message</button>
                                        <div id="message" class="toast text-white shadow-none border-0" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000" >
                                            <div class="toast-body d-inline-block"></div>
                                            <button type="button" class="pr-3 close" data-dismiss="toast" aria-label="Close">
                                                <span aria-hidden="true" class="lni-close size-xs text-white"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
            </div>          
        </Container>
    </div>
  )
}