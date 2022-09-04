import React from "react";
import videoSpa from "./videos/Spa Interior Design-(1080p).mp4"

function Video(props){
    return (
        <header className='video'>
            <h3>Conheça</h3>
            <h2>Nosso espaço</h2>
            <video width="750" height="500" controls >
            <source src={videoSpa} type="video/mp4"/>
     </video>
        </header>
      );    
}
export default Video;