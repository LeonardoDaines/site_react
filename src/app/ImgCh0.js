import React from "react";

function ImgCh0(props){
    return (
        <header className='imgCh0'>
                <h1>{props.name}</h1>
                <p>{props.subname} </p>
                <button className="mybutton">{props.button}</button>
        </header>
      );    
}
export default ImgCh0;