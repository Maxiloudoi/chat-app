import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        };
    }
    render() {    
    return (
        <div className="Contact">
            <img className="avatar" src={ this.props.image } alt={ this.props.name } />            
            <div className="status-text">
                <h3 className="name">{ this.props.name }</h3>                
                    <div className="status" onClick={ event => {
                            const newStatus = !this.state.online;
                            this.setState({online: newStatus});
                            }}>
                        <div className={this.state.online ? "status-online" : "status-offline"}></div> 
                            <p className="status-text"> { this.state.online ? "Online" : "Offline" }</p>
                                                                                
                    </div> 
                </div>              
           </div>
        );
    }
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.element.isRequired,
    online: PropTypes.bool.isRequired,
  };
export default Contact