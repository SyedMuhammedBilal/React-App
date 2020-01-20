import React, { Component } from 'react';
import App from "./apps";

class Apps extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <App />
            <App />
            <App />
            <App />
        </div> 
        );
    }
}
 
export default Apps;