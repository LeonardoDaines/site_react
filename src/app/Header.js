import React from "react";
import { Link } from "react-router-dom";

function Header(props){
    return (
        <header className='header'>
          <ul className='menu'>
            <Link to="/Squad"><li>Equipe</li></Link>
            <Link to="/"><h1>{props.name}</h1></Link>
            {props.linkss.map((link, index) => <li key={index}>{link}</li>)}
          </ul>   
        </header>
      );

}

export default Header;