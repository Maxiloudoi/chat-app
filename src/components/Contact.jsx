import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css'


function Contact (props) {
    return (
        <div className="Contact">
            <img className="avatar" src={ props.image } alt={ props.name } />            
            <div className="status-text">
                <h3 className="name">{ props.name }</h3>
                <div className="status" >
    {props.status ? <div className="status-online"></div> :  <div className="status-offline"></div> }
                    <p className="status-text"> { props.online ? "Online" : "Offline" }</p>                                                         
                </div>               
            </div>
        </div>
    );
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.element.isRequired,
    status: PropTypes.bool.isRequired,
    online: PropTypes.bool.isRequired,
  };
export default Contact