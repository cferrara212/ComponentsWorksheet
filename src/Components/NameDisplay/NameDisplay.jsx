import React from 'react';
import './NameDisplay.css';

const NameDisplay = (props) => {
    return (
        <div className="row row-spacer">
            <div>
                <h1 id="title">Display Single Name</h1>
                <h2 id="names">{props.firstName} {props.lastName}</h2>
            </div>
        </div>
    )
}

export default NameDisplay;