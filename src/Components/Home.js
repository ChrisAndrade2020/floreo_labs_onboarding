import React, { Component } from "react"
import { BrowserRouter, Router, Route, Link, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import giphy from "./giphy";

class Home extends Component{
    render(){
        return(

            <div className="searchDiv">

            <h1> This the Home Page </h1>

                <div>
                    <h2> Nothing much happens here cuz I couldn't refactor my code so like just go away or something</h2>
                    <h2> Like, just click something else on the nav bar</h2>
                
                    <input type="text" onChange = {this.something} placeholder = "Put something on here" required/>
                    <button type="submit">Submit</button>

                </div>

            </div>
        )
    }
}export default Home;