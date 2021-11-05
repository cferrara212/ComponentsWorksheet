import axios from 'axios';
import React, { Component } from 'react';

class GetJokes extends Component{
    constructor(props){
        super(props);
            this.state = {  
               joke:'',
               setup: '', 
               delivery: '' 
             };
    }
    

    componentDidMount(){
        this.getJoke()
    }

    async getJoke(){
        try{
            let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?amount=1');
            console.log(response.data);
            if (response.data.type === 'single') {
                this.setState({joke:response.data.joke})
                }
            else{
                this.setState({setup:response.data.setup, delivery:response.data.delivery})
            } 
            
        }
        catch (ex){
            console.log('error in API call');
        }
    }

    render(){
        return(
            <React.Fragment>
            <h1>Async await axios example</h1>
            <h2>{this.state.joke}{this.state.setup} : {this.state.delivery}</h2>
            <button onClick={()=>this.getJoke()}>Get Joke</button>
            </React.Fragment>
        );
    }
}

export default GetJokes