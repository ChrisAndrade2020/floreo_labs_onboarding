import React, { Component } from "react"
import { BrowserRouter, Router, Route, Link, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from giphy;

class Home extends Component{
    render(){
        return(
            
            <Link to= "/giphy" className= "makeResButton"> GIPHY Page</Link>
            
        )
    }
}export default Home;