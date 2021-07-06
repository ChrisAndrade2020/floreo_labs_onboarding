import React, { Component } from "react"
import { BrowserRouter, Router, Route, Link, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import giphy from "./giphy";

class Home extends Component{
    render(){
        return(

            <div className="searchDiv">

            <h1> This the Home Page </h1>
            <h2> Literally nothing happens here so like just go away or something</h2>
            <h2> Like, just click something in the nav bar</h2>
            
            </div>
        )
    }
}export default Home;