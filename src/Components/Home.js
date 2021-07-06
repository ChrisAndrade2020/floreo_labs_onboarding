import React, { Component } from "react"
import { BrowserRouter, Router, Route, Link, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import giphy from "./giphy";

class Home extends Component{
    render(){
        return(
            <BrowserRouter>
                <Link to= "/giphy" className= "giphyPage"> GIPHY Page</Link>
            </BrowserRouter>
            
        )
    }
}export default Home;