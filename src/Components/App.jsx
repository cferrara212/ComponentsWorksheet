import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import NameDisplay from './NameDisplay/NameDisplay'
import NamesList from './NamesList/NamesList'
import AlertUser from './AlertUser/AlertUser';
import HeroesTable from './HeroesTable/HeroesTable';
import SuperHeroCreateForm from './SuperHeroCreateForm/SuperHeroCreateForm';
import GetJokes from './GetJokes/GetJokes';
import GetChuckFacts from './ChuckNorrisFacts/ChuckNorrisFacts';

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
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ],
        };
    }


    alertUser = () => {
        alert('devCodeCamp')
    }

    renderSuperHeroTable = () =>{
        return this.state.superheroes.map((hero, index) => {
            const {superheroId, name, primaryAbility, secondaryAbility} = hero
            return (
                <tr key="superheroID">
                    <td>{superheroId}</td>
                    <td>{name}</td>
                    <td>{primaryAbility}</td>
                    <td>{secondaryAbility}</td>
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


    createSuperhero = (newHero) =>{
        console.log('from superheroes creator', newHero)
        this.state.superheroes.push(newHero);
        this.setState({...this.state.superheroes, newHero})
        
    }


    render (){
        return(
            <div className="container-fluid">
                <TitleBar />
                <NameDisplay firstName={this.state.firstName} lastName={this.state.lastName} />
                <NamesList name={this.state.names} />
                <AlertUser alert={this.alertUser} />
                <SuperHeroCreateForm createHero={this.createSuperhero} heroesLength={this.state.superheroes.length}/>
                <HeroesTable table={this.renderSuperHeroTable} header={this.renderHeroesHeader} />
                <GetJokes />
                <GetChuckFacts />
            </div> 
        )
    }

}

export default App;