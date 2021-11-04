import React from 'react';


const NamesList= (props) =>{

    return(

        <div className="main">
            <div>
                <h1 className="name">Names List</h1>
            </div>
            <div>
            <h2 className="list">{props.name.map((element) => <ol>{element}</ol>)}</h2>
            </div>
        </div>
    )
}

export default NamesList