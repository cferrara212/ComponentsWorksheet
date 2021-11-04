import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import NameDisplay from './NameDisplay/NameDisplay'
import NamesList from './NamesList/NamesList'
import AlertUser from './AlertUser/AlertUser';
import HeroesTable from './HeroesTable/HeroesTable';

class App extends Component{
    
    constructor(props){
        super(props);
            this.state ={
            firstName:'Reggie',
            lastName:'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ],
        };
    }


    alertUser = () => {
        alert('devCodeCamp')
    }

    renderSuperHeroTable = () =>{
        return this.state.superheroes.map((hero, index) => {
            const {superheroId, name, primaryAbility, secondarAbility} = hero
            return (
                <tr key="superheroID">
                    <td>{superheroId}</td>
                    <td>{name}</td>
                    <td>{primaryAbility}</td>
                    <td>{secondarAbility}</td>
                </tr>
            )
        })
    }

    renderHeroesHeader = () =>{
        let header = Object.keys(this.state.superheroes[0])
        return header.map((key,index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render (){
        return(
            <div className="container-fluid">
                <TitleBar />
                <NameDisplay firstName={this.state.firstName} lastName={this.state.lastName} />
                <NamesList name={this.state.names} />
                <AlertUser alert={this.alertUser} />
                <HeroesTable table={this.renderSuperHeroTable} header={this.renderHeroesHeader} />
            </div> 
        )
    }

}

export default App;