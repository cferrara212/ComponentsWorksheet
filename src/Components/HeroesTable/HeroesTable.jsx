import React from 'react';
import './HeroesTable.css'

const HeroesTable = (props) =>{

    return(
        <div>
            <h1 id='title'>Superheroes Table</h1>
            <table id="heroes">
                <tbody>
                    <tr>{props.header()}</tr>
                    {props.table()}
                </tbody>
            </table>
        </div>
    )
}

export default HeroesTable