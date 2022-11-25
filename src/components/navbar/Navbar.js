// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";
// import './Navbar.css';

// import {
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";

// import { FaCode } from "react-icons/fa";


// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
  
//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className="navbar navbar-expand-lg navbar-light"
//     >
//       <Container>
//         <Navbar.Brand href="/" target="_blank">
//           <FaCode style={{ marginBottom: "2px" }} /> Ekene<span className='text-dander'>Akubue</span>
//         </Navbar.Brand>

//         <Navbar.Toggle
//             aria-controls="responsive-navbar-nav"
//             onClick={() => {updateExpanded(expand ? false : "expanded");}}
//           >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
        
//         <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
//           <Nav className="navbar" defaultActiveKey="#home">
//             <Nav.Item className='setup'>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item className='setup'>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item className='setup'>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }}/>{" "} Projects
//               </Nav.Link>
//             </Nav.Item> 

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
















import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaCode } from "react-icons/fa";
import { BsTelephoneFill, BsHouseFill, BsFileCodeFill, BsPersonFill} from "react-icons/bs";

export default function Navbar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <div>
      <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {updateExpanded(expand ? false : "expanded");}}
          >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <Link to = '/'><div class="navbar-brand" href="#"><FaCode style={{ marginBottom: "2px"}} className='text-danger'/> Ekene<span className='text-danger'>Akubue</span></div></Link>
          <button class="navbar-toggler setup" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
             <Link to = '/'><div class="nav-link setup"><BsHouseFill style={{ marginBottom: "2px" }} className='text-danger' onClick={() => updateExpanded(false)}/> Home</div></Link>
             <Link to = '/about'><div class="nav-link setup"><BsPersonFill style={{ marginBottom: "2px" }} className='text-danger'/> About</div></Link>
             <Link to = '/projects'><div class="nav-link setup"><BsFileCodeFill style={{ marginBottom: "2px" }} className='text-danger'/> Projects</div></Link>
             <Link to = '/contact'><div class="nav-link setup"><BsTelephoneFill style={{ marginBottom: "2px" }} className='text-danger'/> Contact</div></Link>              
            </div>
          </div>
        </nav>
    </div>
  )
}
