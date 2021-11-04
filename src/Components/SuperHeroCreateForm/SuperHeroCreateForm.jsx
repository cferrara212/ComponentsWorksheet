import React, { Component } from 'react';


class SuperHeroCreateForm extends Component {
    constructor(props){
        super(props);
            this.state = {
                superheroes:[
                {
                    superheroId: 0,
                    name: '',
                    primaryAbility: '',
                    secondarAbility: ''
                },
            ]
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createHero(this.state);
        alert('hero created')
    };

    render(){
        return(
            <div>
                <br/>
            <h1>Create Hero Form</h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Hero Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.superheroes.name} />
                <label>Primary Ability</label>
                <input type="text" name="primaryAbility" onChange={this.handleChange} value={this.state.superheroes.primaryAbility} />
                <label>Secondary Ability</label>
                <input type="text" name="secondaryAbility" onChange={this.handleChange} value={this.state.superheroes.secondarAbility} />
                <button type="submit" >Add Super Hero</button>
            </form>
            </div>
        );
    }
}

export default SuperHeroCreateForm;