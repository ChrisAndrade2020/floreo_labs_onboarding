import React from "react";

function SearchField(props) {
  
    function onSubmit(event,value) {
    event.preventDefault()
    console.log(value);

    if (value === 1) {
      
        fetch(

            "https://api.giphy.com/v1/gifs/trending?api_key=KXVc0eMXVYUZdSxAVn6IIFlaIp2i4Z1o"
      
        )

        .then((response) => response.json())
        .then((res) => props.setGifs(res.data));

    } 
    
    else if (value === 2) {
      
        fetch(
      
            "https://api.giphy.com/v1/gifs/random?api_key=KXVc0eMXVYUZdSxAVn6IIFlaIp2i4Z1o"
      
            )
       
            .then((response) => response.json())
            .then((res) => props.setGifs(res.data));
        
    } 
    
    else {
    
        let val= document.forms["form1"]["forChar"].value;
        let search =
        "https://api.giphy.com/v1/gifs/search?q=" +
        val +
        "&api_key=KXVc0eMXVYUZdSxAVn6IIFlaIp2i4Z1o";
     
        search = search.replace(/\s+/g, "-");

        fetch(search)
        
        .then((response) => response.json())
        .then((res) => props.setGifs(res.data));

    }

}

    return (

        <div className="searchDiv">

        <h1 className="gif-search">GIFS</h1>
        
        <form id="form1" name="form">
        <input type="text" id="forChar"></input>
        </form>

        <button onClick={(e) => onSubmit(e,0)}>
        <h3>Search</h3>
        </button>
        
        <button onClick={(e) => onSubmit(e,1)} value="1">
        <h3>Trending</h3>
        </button>
        
        <button onClick={(e) => onSubmit(e,2)} value="2">
        <h2>Random</h2>
        </button>

        </div>
    
    );

}

export default SearchField;