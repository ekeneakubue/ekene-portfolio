import React, {useRef} from 'react'
import './Home.css'
import About from '../about/About'
import Projects from '../../projects/Projects';
import Contact from '../contact/Contact';

export default function Home() {
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  } 

  return (
    <div className='container-fluid'>
      <div className='row' ref = {home}> 
        <div className='col-md-1'></div>
        <div className="col-md-5 text-center intro">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1>              
            <strong className="main-name">I'm Ekene <span className='text-danger'>Akubue</span></strong>
            <h5 className='fullstack'>Full-Stack Developer</h5>           
          </h1>               
          <p className="heading-description blockquote block">  
            I'm passionate about creating clean, beautiful, responsive 
            and user friendly interfaces, with over two years experience in web development. 
            I'm well knowledged in ReactJS, NodeJS, ExpressJs, & MongoDB.<br/>             
          </p> 
          <button type="button" className="btn btn-dark hire" onClick={() => scrollToSection(contact)}>Hire Me</button>             
        </div> 

        <div className="col-md-5 text-center"> 
          <div>
            <div className='img-setup'>
              <img src='images/ekene.jpg' className='myImage' alt="avatar" /> 
            </div>
          </div>                              
        </div> 
           
        <div className='col-md-1'></div>
      </div><br/><br/>

      <div ref={about}>
        <About/>
      </div> 
      <br/>

      <div ref={project}>
        <Projects/>
      </div>

      <br/><br/>
      <div ref={contact}>
        <Contact/>
      </div>            
      <br/><br/>
    </div>
  )
}
