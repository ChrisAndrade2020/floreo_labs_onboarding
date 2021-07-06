import React, { Component } from "react"
const axios = require('axios');

class Home extends Component{

    updateInput = (event) =>{
        event.preventDefault();
        this.setState({
            input: event.target.value
        });
    }

    onSubmit = (event) =>{  
        event.preventDefault();
        const SavedStuff = {
            input: this.state.userInput
        }
    }


    render(){
        return(

            <div className="searchDiv">

            <h1> This the Home Page </h1>

                <div>
                    <h2> Nothing much happens here cuz I couldn't refactor my code so like just go away or something</h2>
                    <h2> Like, just click something else on the nav bar</h2>
                
                    <input type="text" onChange = {this.something} placeholder = "This don't work" required/>
                    <button type="submit">Submit</button>

                </div>

            </div>
        )
    }
}
export default Home;