import React from 'react';
import './Contact.css'

const online = true;
const image = "https://randomuser.me/api/portraits/women/37.jpg"

function Contact () {
    return (
        <div className="Contact">
            <img className="avatar" src={ image } alt="Marlène Brewer" />            
            <div className="status-text">
                <h3 className="name">Marlène Brewer</h3>
                <div className="status">
                    <div className="status-online"></div> 
                    <p className="status-text"> { online ? "Online" : "Offline" }</p>                                                         
                </div>               
            </div>
        </div>
    );
}

export default Contact