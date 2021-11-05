import axios from 'axios';
import React, { Component } from 'react';

class GetChuckFacts extends Component{
    constructor(props){
        super(props);
            this.state = {  
               fact:''

             };
    }
    

    componentDidMount(){
        this.getFact();
    }

    async getFact(){
        try{
            let response = await axios.get('https://api.chucknorris.io/jokes/random');
            console.log(response.data.value);
            this.setState({fact: response.data.value});
            
        }
        catch (ex){
            console.log('error in API call');
        }

    }

    render(){
        return(
            <React.Fragment>
            <h3>{this.state.fact}</h3>
            <button onClick={()=>this.getFact()}>Get Chuck Fact</button>
            </React.Fragment>
        );
    }
}

export default GetChuckFacts;