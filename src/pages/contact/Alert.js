import React from 'react'
import './Contact.css'

export default function Alert() {    
    var Name = document.getElementById('name');
    var email = document.getElementById('email')
    var msg = document.getElementById('msg')
    const success = document.getElementById('success')
    const danger = document.getElementById('danger')

    if (Name.value === ' ' || email.value === ' ' || msg.value === ' '){
        danger.style.display = 'block';
    }
    else{
        setTimeout (()=> {
            Name.value = ' ';                
            email.value = ' ';
            msg.value = ' ';
        }, 2000);
        success.style.display = 'block';
    
        setTimout (() =>{
            danger.style.display = 'none';
            success.style.display = 'none';
        }, 4000);
    }     

    return (
        <div className="message">
            <div className="text-success" id="success">Message Sent! Thank you for contacting me</div>
            <div className="text-danger" id="danger">Fields can't be empty!</div>
        </div> 
    )
}
