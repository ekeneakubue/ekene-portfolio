import React, { useRef }  from 'react'
import './Contact.css'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { BsTelephoneFill, BsHouseFill, BsEnvelopeFill, BsWhatsapp, BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import emailjs from '@emailjs/browser';

export default function Contact() {
    //EmailJS Config
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_6d2kfmt', 
                'template_mepyilk', 
                form.current, 
                'CbvCANNmhODLvBPoS'
            )
        .then((result) => {
            console.log(result.text);
            console.log("message sent")            
            document.getElementById("alert").innerHTML = ('Messange sent Successfully')
            }, 
            (error) => {
                console.log(error.text);
                document.getElementById("alert").innerHTML = ('Error, Ensure no field is vacant')
        });
        e.target.reset();
    };
    
  return (
    <div className="container-fluid">
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
                          
                
                <form className='form-group' id="contactForm" ref={form} onSubmit={sendEmail}>
                    <br/><br/>    
                    <h5>Write me a Message</h5>                     

                    <div className="row mt-4">                        
                        <div className="col-lg-12 form-item">
                            <div className="form-group">
                                <input name="user_name" id="name" type="text" className="form-int form_setup" placeholder="Your Name*" required/>
                            </div>
                        </div>
                        <div className="col-lg-12 form-item">
                            <div className="form-group">
                                <input name="user_email" id="email" type="email" className="form-int form_setup" placeholder="Your Email*" required/>
                            </div>
                        </div>                        
                        <div className="col-12 form-item">
                            <div class="form-group">
                                <textarea name="message" id="comments" rows="4" className="form-int form_setup" placeholder="Your message..." required/>
                            </div>
                        </div>                      

                        <div className="col-12 form-item">
                            <Button className='form-int-button form_setup' type="submit" id="send" onClick="Alert()">            
                                <h6><i className="bi bi-send-fill text-danger"></i> Send Message</h6>
                            </Button> 
                            <div id='alert' className='message'></div>                                                   
                        </div>  
                                 
                    </div>
                </form>
            </div>          
        </Container>
        
    </div>
  )
}
