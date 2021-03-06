import "../App.css";

import SearchField from "./searchField";
import GifCard from "./gifCard";
import React from "react";

// Dis is my giphy key KXVc0eMXVYUZdSxAVn6IIFlaIp2i4Z1o

class giphy extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
         
            gifLink: "",
            gifs: []
        
        };
        
        this.setGif = this.setGifs.bind(this);
      
    }
      
    setGifs(value2) {
        
        this.setState({
            
            gifs: []
          
        });
          
        this.setState({
            
            gifs: value2
          
        });
          
    }



    componentDidMount() {

        fetch(

        "https://api.giphy.com/v1/gifs/trending?api_key=KXVc0eMXVYUZdSxAVn6IIFlaIp2i4Z1o"

        )

        .then((response) => response.json())
        .then((res) => this.setState({ gifs: res.data }));
    
    }

    render() {

        let cardArray = [];
        let random = 0;

        //console.log(this.state.gifs);
        //console.log(this.state.gifs.length);

        if(this.state.gifs.length === undefined) {
                
            random = 7;
            
        }
        
        if (this.state.gifs.length >= 1) {
            
            for (let i = 0; i < this.state.gifs.length; i++) {
                
                cardArray.push(
                
                    <GifCard data={this.state.gifs[i].images.original.url} />
                
                    );
                //console.log(this.state.gifs[i].images.original.url);
            
            }
            
        }
            
        else if (random === 7) {
            
            cardArray.push(
                
                <GifCard data={this.state.gifs.images.original.url} 
                />
            
            );
        }



        return (

            <div>

                <SearchField  setGifs={this.setGif} />

                <div>{cardArray}</div>
                
                </div>
            );
            
        }
        
}

export default giphy;