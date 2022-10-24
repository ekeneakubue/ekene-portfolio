import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaCode } from "react-icons/fa";
import { BsTelephoneFill, BsHouseFill, BsFileCodeFill, BsPersonFill} from "react-icons/bs";

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <Link to = '/'><div class="navbar-brand" href="#"><FaCode style={{ marginBottom: "2px"}} className='text-danger'/> Ekene<span className='text-danger'>Akubue</span></div></Link>
          <button class="navbar-toggler setup" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
             <Link to = '/'><div class="nav-link setup"><BsHouseFill style={{ marginBottom: "2px" }} className='text-danger'/> Home</div></Link>
             <Link to = '/about'><div class="nav-link setup"><BsPersonFill style={{ marginBottom: "2px" }} className='text-danger'/> About</div></Link>
             <Link to = '/projects'><div class="nav-link setup"><BsFileCodeFill style={{ marginBottom: "2px" }} className='text-danger'/> Projects</div></Link>
             <Link to = '/contact'><div class="nav-link setup"><BsTelephoneFill style={{ marginBottom: "2px" }} className='text-danger'/> Contact</div></Link>              
            </div>
          </div>
        </nav>
    </div>
  )
}
