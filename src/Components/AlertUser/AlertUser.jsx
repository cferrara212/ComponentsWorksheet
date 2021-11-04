import React from 'react';
import './AlertUser.css'

function AlertUser(props){

    return(
        <div className="main">
            <h1 className="title">Button From Props</h1>
            <button className="button" onClick={()=> props.alert()}>Click Me</button>
            
        </div>
    )
}

export default AlertUser;